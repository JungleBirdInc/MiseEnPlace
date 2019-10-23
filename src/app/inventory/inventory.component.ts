// ANGULAR IMPORTS
import { Component, OnInit } from '@angular/core';

// SERVICES
import { GetinventoryService } from '../services/getinventory.service';
import { GetcategoriesService } from '../services/getcategories.service';
import { GetbotsizeService } from '../services/getbotsize.service';
import { GetCurrentInvService } from '../services/getcurrentinventory.service';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit {
  constructor(
    private _getinventory: GetinventoryService,
    private _getcategories: GetcategoriesService,
    private _getbotsize: GetbotsizeService,
    private _getcurrent: GetCurrentInvService,
    ) { }

  // STORE CONVERTED DATA
  public usabledata = [];
  public beer = [];
  public wine = [];
  public liquor = [];
  public non = [];

  // TABLE STATES
  liqOn = false;
  beerOn = false;
  wineOn = false;
  nonOn = false;
  convOn = false;

  // RESPONSE FROM SERVICES
  public inventory;
  public categories;
  public botsize;
  public current;

  ngOnInit() {
    // GET INVENTORY
    this._getinventory.getInventory()
    .then(data => {
      this.inventory = data;
      console.log(data, 'inventories');
    });

    // GET CATEGORIES
    this._getcategories.getCategories()
    .then(data => {
      this.categories = data;
    });

    // GET BOTTLE SIZES
    this._getbotsize.getCategories()
    .then(data => {
      this.botsize = data;
    });

    // GET CURRENT INVENTORY
    this._getcurrent.getCurentInventory()
    .then( data => {
      this.current = data;
      console.log(data, 'current');
    });
  }

  // TOGGLES INDIVIDUAL TABLE STATE
  toggle(id) {
    this.convert();
    switch (id) {
      case 'liqOn': this.liqOn = !this.liqOn; break;
      case 'beerOn': this.beerOn = !this.beerOn; break;
      case 'wineOn': this.wineOn = !this.wineOn; break;
      case 'nonOn': this.nonOn = !this.nonOn; break;
    }
  }


  convert() {
    if (!this.convOn) {
      // ONLY RUN CONVERT ONCE
      this.convOn = true;

      // MISSING: PAR
      // CONVERT PRODUCT OBJECTS AND STORE IN MASTER ARRAY
      this.inventory[0].logs_products.forEach(item => {
        this.usabledata.push({
            name: item.distributors_product.product.product_name,
            quantity: 0,
            id: item.distributors_product.product.id,
            par: item.qty,
            price: item.distributors_product.price,
            bottleSize: this.botsize[item.distributors_product.product.btlSizeId - 1].size,
            category: this.categories[item.distributors_product.product.category_id - 1].category_name,
          });
      });

      // ORDER BY CATEGORY
      this.usabledata.forEach(product => {
        switch (product.category) {
          case 'Non-Alcoholic': this.non.push(product); break;
          case 'Liquor': this.liquor.push(product); break;
          case 'Beer': this.beer.push(product); break;
          case 'Wine': this.wine.push(product); break;
        }
      });

      this.usabledata.forEach(product => {
        this.current[0].logs_products.forEach(item => {
          if (product.id === item.distributors_product.product.id) {
           product.quantity = item.qty;
          }
        });
      });

      console.log(this.usabledata, 'mydata');
    }
  }
}
