import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AdminProductOperationComponent } from './admin-product-operation/admin-product-operation.component';
import { CustomerProductOperationComponent } from './customer-product-operation/customer-product-operation.component';
import { AdminOrdersOperationComponent } from './admin-orders-operation/admin-orders-operation.component';
import { CommonModule } from '@angular/common';
import { CustomerOrdersOperationComponent } from './customer-orders-operation/customer-orders-operation.component';
import { AdminOrderInfoOperationComponent } from './admin-order-info-operation/admin-order-info-operation.component';
import { CustomerOrderInfoOperationComponent } from './customer-order-info-operation/customer-order-info-operation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdmindashboardComponent,
    CustomerdashboardComponent,
    AdminProductOperationComponent,
    CustomerProductOperationComponent,
    AdminOrdersOperationComponent,
    CustomerOrdersOperationComponent,
    AdminOrderInfoOperationComponent,
    CustomerOrderInfoOperationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
