import { Component, OnInit,  HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { GetCurrentInvService } from '../services/getcurrentinventory.service';
import { GetbotsizeService } from '../services/getbotsize.service';
import { GetMasterInvService } from '../services/getmasterinv.service';
import { GetdistService } from '../services/getdist.service';
import { GetrepsService } from '../services/getreps.service';
import { GetcategoriesService } from '../services/getcategories.service';
import { UpdateCurrentInvService } from '../services/updateCurrentInv.service';


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
    public _getCats: GetcategoriesService,
    public _update: UpdateCurrentInvService,
  ) { }

  show = false;
  public suggested = false;
  public inventory;
  public cats;
  public masterInv;
  public dist;
  public botsize;
  public reps;
  public masterArray = [];
  public currentArray = [];
  public visible = false;
  public updated = {id: []};

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

      // Get Cats
    this._getCats.getCategories()
      .then( data => {
        this.cats = data;
        console.log(data);
      });

    setTimeout(() => {this.convert(); }, 500);
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
        distributorsProductId: product.distributors_product.id,
        catId: product.distributors_product.product.category_id,
        id: product.logId
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
        id: product.logId
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
      } else {
        product.suggested = 0;
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

      // SET UP updated OBJ
    this.cats.forEach(cat => {
      const id = cat.id;
      const categ = cat.category_name;
      this.masterArray.forEach(obj => {
        if (this.updated.hasOwnProperty(id)) {
          if (id === obj.catId) {
            obj.categ = categ;
            this.updated[id].push(obj);
          }
        } else {
          if (id === obj.catId) {
            obj.categ = categ;
            this.updated[id] = [obj];
          }
        }
      });
    });

    console.log('masterArray', this.masterArray);
    console.log('currentArray', this.currentArray);
    console.log(this.updated, 'updated', this.updated);
    this.visible = true;
  }

confirmOrders(data) {
  console.log(data);
  const currentSet = data;
  currentSet.forEach(set => {
    set.unitCost = Math.floor(set.unitCost * 100);
    set.qty = set.quantity;
    set.distributorsProductId = set.dist_products_id;
  });
  setTimeout(() => {this._update.updateInv(currentSet).then((res) => {
    console.log(res);
  }); }, 500);
}

}
