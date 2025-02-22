import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { AdminProductOperationComponent } from './admin-product-operation/admin-product-operation.component';
import { CustomerProductOperationComponent } from './customer-product-operation/customer-product-operation.component';
import { AdminOrdersOperationComponent } from './admin-orders-operation/admin-orders-operation.component';
import { CustomerOrdersOperationComponent } from './customer-orders-operation/customer-orders-operation.component';
import { AdminOrderInfoOperationComponent } from './admin-order-info-operation/admin-order-info-operation.component';
import { CustomerOrderInfoOperationComponent } from './customer-order-info-operation/customer-order-info-operation.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"admin",
    component:AdmindashboardComponent,
    children:[
    {path:"product",component:AdminProductOperationComponent},
    {path:"orders",component:AdminOrdersOperationComponent},
    {path:"orderInfo/:oid",component:AdminOrderInfoOperationComponent}
  ]},
  {path:"customer",
    component:CustomerdashboardComponent,
    children:[
    {path:"product",component:CustomerProductOperationComponent},
    {path:"orders",component:CustomerOrdersOperationComponent},
    {path:"orderInfo/:oid",component:CustomerOrderInfoOperationComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
