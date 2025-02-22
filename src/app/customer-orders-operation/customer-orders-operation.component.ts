import { Component, OnInit } from '@angular/core';
import { Orders } from '../orders';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-orders-operation',
  templateUrl: './customer-orders-operation.component.html',
  styleUrls: ['./customer-orders-operation.component.css']
})
export class CustomerOrdersOperationComponent implements OnInit  {
  orders: Orders[] = []; 
  msg: string = ''; 

  constructor(private os: OrdersService, private router: Router) {}

  ngOnInit(): void {
    const email = sessionStorage.getItem('email');  // Retrieve email from session storage
    this.msg = sessionStorage.getItem('orderMessage') ?? '';
    if (!email) {
      this.router.navigate(['login']);  // Redirect to login if not logged in
    } else {
      this.loadOrders(email);
    }
    sessionStorage.removeItem('orderMessage');
  }

  loadOrders(email: string): void {
    this.os.findOrdersByEmail(email).subscribe({
      next: (orders: Orders[]) => {
        this.orders = orders;
      },
      error: (error: any) => {
        this.msg = 'Failed to load orders.';
        console.error(error);
      }
    });
  }

  deleteOrder(orderId: number): void {
    if (confirm('Are you sure you want to delete this order?')) {
      this.os.deleteOrder(orderId).subscribe({
        next: () => {
          this.msg = 'Order deleted successfully.';
          this.orders = this.orders.filter(order => order.oid !== orderId);  // Remove the deleted order from the list
        },
        error: (error: any) => {
          this.msg = 'Failed to delete order.';
          console.error(error);
        }
      });
    }
  }

  viewOrderInfo(oid: number): void {
    this.router.navigate(['customer/orderInfo',oid]);
  }
}
