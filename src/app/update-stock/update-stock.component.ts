import { Component, OnInit,  HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { GetCurrentInvService } from '../services/getcurrentinventory.service';
import { GetbotsizeService } from '../services/getbotsize.service';
import { GetMasterInvService } from '../services/getmasterinv.service';
import { GetdistService } from '../services/getdist.service';
import { GetrepsService } from '../services/getreps.service';

export interface UpdateInventory {
  productName: string;
  unitCost: number;
  volume: string;
  quantity: number;
   par: number;
}

const BOURBON_DATA: UpdateInventory [] = [
  {productName: 'Jack Daniels', unitCost: 11.42, volume: '750mL', quantity: 4, par: 6},
  {productName: 'Bulleit', unitCost: 11.42, volume: '1L', quantity: 4, par: 5},
  {productName: 'Eagle Rare', unitCost: 11.42, volume: '750mL', quantity: 2, par: 2},
  {productName: 'Jim Beam', unitCost: 11.42, volume: '1L', quantity: 3, par: 5},
  {productName: 'Old Forester', unitCost: 11.42, volume: '750mL', quantity: 5, par: 8},
  {productName: 'Blantons\'s', unitCost: 11.42, volume: '750mL', quantity: 2, par: 3},
];

const VODKA_DATA: UpdateInventory [] = [
  {productName: 'Tito\'s', unitCost: 9.47, volume: '750mL', quantity: 4, par: 4},
  {productName: 'Absolut', unitCost: 9.47, volume: '1L', quantity: 4, par: 5},
  {productName: 'Smirnoff', unitCost: 9.47, volume: '750mL', quantity: 2, par: 4},
  {productName: 'Rain', unitCost: 9.47, volume: '1L', quantity: 3, par: 3},
  {productName: 'Grey Goose', unitCost: 9.47, volume: '750mL', quantity: 5, par: 7},
  {productName: 'Stolichiniya', unitCost: 9.47, volume: '750mL', quantity: 2, par: 4},
];

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {

  constructor(
    public snackBar: MatSnackBar,
    private router: Router,
    public _getInv: GetCurrentInvService,
    public _getbotsize: GetbotsizeService,
    public _master: GetMasterInvService,
    public _getdist: GetdistService,
    public _getReps: GetrepsService,
  ) { }

  show = false;
  public suggested = false;
  public inventory;
  public masterInv;
  public dist;
  public botsize;
  public reps;
  public ordered = {id: []};
  public masterArray = [];
  public currentArray = [];
  public visible = false;

  productB = BOURBON_DATA;
  productV = VODKA_DATA;



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

  toggleShow() {
    this.show = !this.show;
  }

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

}
