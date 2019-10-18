import { Component, OnInit,  HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GetOpenBottlesService } from '../services/getopenbottle.service';
import { UpdateOpenBottlesService } from '../services/updateOpenBottles.service';
import { GetdistService } from '../services/getdist.service';

// export interface Burn {
//   productName: string;
//   previousVolume: number;
//   currentVolume: number;
//   burnCount: number;
// }

@Component({
  selector: 'app-burn-list',
  templateUrl: './burn-list.component.html',
  styleUrls: ['./burn-list.component.css'],
})
export class BurnListComponent implements OnInit {
  state$: Observable<object>;

  constructor(
    public snackBar: MatSnackBar,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    public _getOpenBottles: GetOpenBottlesService,
    public _updateOpenBottles: UpdateOpenBottlesService,
    public _getdist: GetdistService,
  ) { }

  // show = false;
  // barcode: string;
  // displayedColumns: string[] = ['productName', 'currentVolume', 'previousVolume', 'burnCount'];
  
  public distributors;
  public inventory;

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 4000 });
  }

  ngOnInit() {
    this._getOpenBottles.getOpenBottles()
      .then(data => {
        this.inventory = data;
        console.log(data);
      })

    this._getdist.getDistributors()
      .then(data => {
        this.distributors = data;
        console.log(data);
      })
      .then(() => {
        this.convert();
      })
    console.log(this.state$);
  }

  public burn = [];
  public burnHash = {};
  public displayBurn = [];
  public toggleIds = [];

  convert(){
    this.inventory.forEach(product => {
      //MISSING: BURN QTY ?
      //         QTY ON HAND ?
      this.burn.push({
        weight: product.weight,
        updatedAt: product.updatedAt,
        name: product.distributors_product.product.product_name,
        bottleSize: product.distributors_product.product.btlSizeId,
        tare: product.distributors_product.product.tare,
        distId: product.distributors_product.dist_id,
        burnCount: 0,
        distributor: undefined,
      });
    });

    //ASSIGN DISTRIBUTOR NAME
    this.burn.forEach(product => {
      this.distributors.forEach(dist => {
        if(product.distId === dist.distributorOrganizationId){
          product.distributor = dist.distributor.name;
        }
      });
    });

    //ORGANIZE BY DISTRIBUTOR
    this.burn.forEach(product => {
      if(!this.burnHash[product.distributor]){
        this.burnHash[product.distributor] = [product];
      }else{
        this.burnHash[product.distributor].push(product);
      }
    });

    //MOVE TO ARRAY
    for(let key in this.burnHash){
      this.displayBurn.push([key, this.burnHash[key]]);
    }

    this.displayBurn.forEach(dist => {
      this.toggleIds.push([dist[0], false]);
    });
  }

  toggle(dist) {
    console.log('before', this.toggleIds);
    this.toggleIds.forEach((distributor, index) => {
      if(dist === distributor[0]){
        this.toggleIds[index][1] = !this.toggleIds[index][1];
      }
    });
    console.log('after', this.toggleIds);

  }
}