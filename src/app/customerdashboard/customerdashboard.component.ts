import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {

  isOrdersPage: boolean = false; // To track if we're on the Orders page

  // Constructor for dependency injection
  constructor(private router: Router) { }

  ngOnInit() {
    // Subscribe to router events to detect route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isOrdersPage = this.router.url.includes('/orders'); 
      }
    });
    
  }

  logout(): void {
    console.log('User logged out');
    // Clear user authentication data (if any)
    localStorage.removeItem('email'); // removing user from localStorage
    sessionStorage.removeItem('email'); // Or from sessionStorage if used
    this.router.navigate(['/login']);   // Redirect to login
  }
  
}
