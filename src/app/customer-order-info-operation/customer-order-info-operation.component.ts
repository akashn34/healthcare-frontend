import { Component, OnInit } from '@angular/core';
import { OrderInfoService } from '../order-info.service';
import { ActivatedRoute } from '@angular/router';
import { OrderInfo } from '../order-info';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-customer-order-info-operation',
  templateUrl: './customer-order-info-operation.component.html',
  styleUrls: ['./customer-order-info-operation.component.css']
})
export class CustomerOrderInfoOperationComponent implements OnInit {
  orderInfos: OrderInfo[] = [];
  msg: string = '';
  orderId: number = 0;

  constructor(public ois: OrderInfoService,public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.orderId = +params['oid']; // Extract the Order ID from URL
      this.loadOrderInfo(this.orderId);
    });
  }

  loadOrderInfo(orderId: number): void {
    this.ois.findByOrderId(orderId).subscribe({
      next: (data) => {
        console.log('OrderInfo data:', data);
        this.orderInfos = data;
      },
      error: (error) => {
        this.msg = 'Failed to load order information.';
        console.error('API error:',error);
      }
    });
  }

}
