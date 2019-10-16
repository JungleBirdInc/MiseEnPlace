import { Component, OnInit,  HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetCurrentInvService } from '../services/getcurrentinventory.service';
import { GetbotsizeService } from '../services/getbotsize.service';
import { GetMasterInvService } from '../services/getmasterinv.service';
import { GetdistService } from '../services/getdist.service';
import { GetrepsService } from '../services/getreps.service';
import { unwrapResolvedMetadata } from '@angular/compiler';

// implement check boxes to select which orders to sebd, need icons
// export interface OrderElement {
//   productName: string;
//   unitCost: number;
//   volume: string;
//   quantity: number;
//   par: number;
//   suggested: number;
// }

@Component({
  selector: 'app-suggest-order',
  templateUrl: './suggest-order.component.html',
  styleUrls: ['./suggest-order.component.css']
})

export class SuggestOrderComponent implements OnInit {

  constructor(
    private router: Router,
    public _getInv: GetCurrentInvService,
    public _getbotsize: GetbotsizeService,
    public _master: GetMasterInvService,
    public _getdist: GetdistService,
    public _getReps: GetrepsService,
    ) {}

  conv = false;
  show = false;

  // tables states
  rep1 = false;
  rep2 = false;

  public masterInv;
  public dist;
  public inventory;
  public botsize;
  public reps;
  public suggested = false;
public ordered = {id: []};
public masterArray = [];
public currentArray = [];
public OrderArray = [];
public visible = false;

  ngOnInit() {
    // GET MASTER INV
    this._master.getMaster()
      .then(data => {
        this.masterInv = data;
        console.log(data, 'master');
      });

    // GET CURRENT INV
    this._getInv.getCurentInventory()
      .then(data => {
        this.inventory = data;
        console.log(data, 'inv');
      });

    // GET DISTRIBUTORS
    this._getdist.getDistributors()
      .then(data => {
        this.dist = data;
        console.log(data, 'dist');
      });

    // GET BOTTLE SIZES
    this._getbotsize.getCategories()
      .then(data => {
        this.botsize = data;
        console.log(data, 'bot');
    });

    // GET REPS
    this._getReps.getReps()
      .then(data => {
        this.reps = data;
        console.log(data, 'reps');
      });
}
// takes requested data and makes into new array
convert() {
  this.suggested = !this.suggested;
  // ORGANIZE MASTER INVENTORY
  this.masterInv[0].logs_products.forEach(product => {
    this.masterArray.push({
      productName: product.distributors_product.product.product_name,
      unitCost: (product.distributors_product.price) / 100,
      // (i think this is price ?)
      volume: product.distributors_product.product.btlSizeId,
      par: product.qty,
      // not sure how qty and par is refrenced in this database
      suggested: undefined, // to be calculated
      distributorId: product.distributors_product.dist_id,
      dist_products_id: product.distributors_product.id,

    });
  });

  // ORGANIZE CURRENT INVENTORY
  this.inventory[0].logs_products.forEach(product => {
    this.currentArray.push({
      productName: product.distributors_product.product.product_name,
      unitCost: product.distributors_product.price,
      // (i think this is price ?)
      volume: product.distributors_product.product.btlSizeId,
      quantity: product.qty,
      par: undefined,
      // not sure how qty and par is refrenced in this database
      suggested: undefined, // to be calculated
      distributorId: product.distributors_product.dist_id,
    });
  });

  // ASSIGN FOREIGN KEYS FOR MASTER ARRAY
  this.masterArray.forEach(product => {
    // ASSIGN BOTTLE SIZE FOR MASTER ARRAY
    this.botsize.forEach(size => {
      if (product.volume === size.id) {
        product.volume = size.size;
      }
    });

    // ASSIGN DISTRIBUTOR NAME FOR MASTER ARRAY
    this.dist.forEach(dist => {
      if (product.distributorId === dist.distributor.distributorOrganizationId) {
        // not sure if that is actually the correct id
        product.distributor = dist.distributor.name;
        product.rep = dist.distributor.reps[0].first_name;
        product.cell = dist.distributor.reps[0].phone;
        product.repId = dist.distributor.distributorOrganizationId;
        }
      });
    this.currentArray.forEach((p) => {
      if (product.distributorId === p.distributorId)  {
        product.quantity = p.quantity;
      }
    });
    if ((product.par - product.quantity) > 0) {
      product.suggested = (product.par - product.quantity);
      product.qty = (product.par - product.quantity);
    } else {
      product.suggested = 0;
      product.qty = 0;
    }
  });

    // ASSIGN FOREIGN KEYS FOR CURRENT INV
  this.currentArray.forEach(product => {
      // ASSIGN BOTTLE SIZE FOR MASTER ARRAY
    this.botsize.forEach(size => {
      if (product.volume === size.id) {
        product.volume = size.size;
      }
    });

    // ASSIGN DISTRIBUTOR NAME FOR CURRENT ARRAY
    this.dist.forEach(dist => {
      if (product.distributorId === dist.distributor.distributorOrganizationId) {
        // not sure if that is actually the correct id
        product.distributor = dist.distributor.name;
      }
    });
  });

    // SET UP ORDERED OBJ
  this.masterArray.forEach(obj => {
      const id = obj.distributorId;
      if (this.ordered.hasOwnProperty(id)) {
        this.ordered[id].push(obj);
      } else {
        this.ordered[id] = [obj];
      }
    });

  console.log('masterArray', this.masterArray);
  console.log('currentArray', this.currentArray);
  console.log(this.ordered, 'ordered');
  this.visible = true;
}

  confirmOrders() {
    this.router.navigateByUrl('review-orders', {state: {ordered: this.ordered}});
  }

  totalPrice(dist) {
      return dist.map(t => t.unitCost * t.qty).reduce((acc, value) => acc + value, 0);
    }

}
