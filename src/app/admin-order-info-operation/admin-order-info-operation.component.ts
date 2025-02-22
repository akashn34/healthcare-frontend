import { Component, OnInit } from '@angular/core';
import { OrderInfoService } from '../order-info.service';
import { OrderInfo } from '../order-info';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-order-info-operation',
  templateUrl: './admin-order-info-operation.component.html',
  styleUrls: ['./admin-order-info-operation.component.css']
})
export class AdminOrderInfoOperationComponent implements OnInit{
  orderInfos: OrderInfo [] = [];
  orderId: number = 0;
  msg: string = '';

  constructor(public ois: OrderInfoService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.orderId = +params['oid'];
      this.loadOrderInfo();
    });
  }

  loadOrderInfo(): void {
    this.ois.findByOrderId(this.orderId).subscribe({
      next: (data) => {
        console.log('Fetched orderInfo:', data);
        this.orderInfos = data;
      },
      error: (error) => {
        this.msg = 'Failed to load order information';
        console.error('Error', error);
      }
    });
  }
}
