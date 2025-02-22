import { Component, OnInit } from '@angular/core';
import { Orders } from '../orders';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-orders-operation',
  templateUrl: './admin-orders-operation.component.html',
  styleUrls: ['./admin-orders-operation.component.css']
})
export class AdminOrdersOperationComponent implements OnInit {
  orders: Orders[] = [];
  msg: string = "";

  constructor(public os: OrdersService, public router: Router) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.os.findAllOrders().subscribe({
      next: (result: any) => {
        this.orders = result;
      },
      error:(error: any) => {
        console.error(error);
      },
      complete:() => {

      }
    });
  }

  deleteOrder(oid: number | null): void {
    if (oid !== null) {
      this.os.deleteOrder(oid).subscribe({
        next: () => {
          this.msg = 'Order deleted successfully!';
          this.loadOrders(); 
        },
        error: (error: any) => {
          console.error('Failed to delete order:', error);
          this.msg = 'Failed to delete order.';
        }
      });
    } else {
      this.msg = 'Invalid order ID.';
    }
  }

  viewOrderInfo(oid: number): void {
    this.router.navigate(['admin/orderInfo', oid]);
  }
  
}
