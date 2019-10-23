// ANGULAR IMPORTS
import { Component, OnInit } from '@angular/core';

// SERVICES
import { GetordersService } from '../services/getorders.service';
import { GetbotsizeService } from '../services/getbotsize.service';
import { GetdistService } from '../services/getdist.service';
import { showMessage } from 'igniteui-angular/lib/core/deprecateDecorators';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  constructor(
    private _getorders: GetordersService,
    private _getbotsize: GetbotsizeService,
    private _getdist: GetdistService,
    ) { }

    // RESPONSE FROM SERVICES
    public orders;
    public show = false;
    public botsize;
    public dists;
    public orderList = [];

    ngOnInit() {
      // GET ORDERS
      this._getorders.getOrders()
      .then(data => {
        this.orders = data;
        console.log(data, 'orders');
        setTimeout(() => {this.convert(); }, 200);
      });

      // GET BOTTLE SIZES
      this._getbotsize.getCategories()
      .then(data => {
        this.botsize = data;
        console.log(data, 'bots');
      });

      // GET DISTRIBUTORS
      this._getdist.getDistributors()
      .then(data => {
        this.dists = data;
        console.log(data, 'dists');
      });

    }

    // STORE CONVERTED DATA

    convert() {
      // CONVERT PRODUCT OBJECTS AND STORE IN MASTER ARRAY
      this.show = !this.show;
      this.orders.forEach(order => {
        const prod = {
            distributor: order.dist_id,
            repName: order.rep_id,
            repNum: undefined,
            total: order.total_price,
            products: [],
            date: order.createdAt,
          };

        // ASSIGN DISTRIBUTOR AND REP NAME/NUMBER
        this.dists.forEach(dist => {
          if (prod.distributor === dist.distributorOrganizationId) {
            prod.distributor = dist.distributor.name;

            if (dist.distributor.reps.length !== 0) {
              prod.repName = `${dist.distributor.reps[0].first_name} ${dist.distributor.reps[0].last_name}`;
              prod.repNum = dist.distributor.reps[0].phone;
            } else {
              prod.repName = `Dist. #`;
              prod.repNum = dist.distributor.phone;
            }
          }
        });

        // ASSIGN PRODUCT NAME / BOTTLE SIZE / PRICE / ORDER QTY
        order.logs_products.forEach(product => {
          prod.products.push({
            name: product.distributors_product.product.product_name,
            bottleSize: this.botsize[product.distributors_product.product.btlSizeId - 1].size,
            price: product.distributors_product.price,
            qty: product.qty,
            // NOT SURE IF QTY REFERS TO ON HAND OR ON ORDER
          });
        });
        this.orderList.push(prod);
      });
      console.log('order list', this.orderList);
    }
}
