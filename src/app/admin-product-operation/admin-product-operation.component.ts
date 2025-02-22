import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-product-operation',
  templateUrl: './admin-product-operation.component.html',
  styleUrls: ['./admin-product-operation.component.css']
})
export class AdminProductOperationComponent implements OnInit {
  productRef = new FormGroup({
    pid:new FormControl(),
    pname:new FormControl(),
    price:new FormControl(),
    description:new FormControl(),
    stock:new FormControl(),
    imageurl:new FormControl(),
  })
  
  products:Array<Product>=[];
  msg:string ="";
  selectedProduct: Product | null = null;

  constructor(public ps:ProductService,public router:Router) {}    //DI for  product Service
  
  ngOnInit(): void {
    this.loadProductInfo();
  }
  loadProductInfo(): void {
    this.ps.findAll().subscribe({
      next:(result: any) => {
        this.products = result;
      },
      error:(error: any) => {
        console.error(error);
      },
      complete:() => {

      }
    });
  }
  storeProduct(): void {
    let product = this.productRef.value;
    this.ps.storeProduct(product).subscribe({
      next:(result: any) => {
          this.msg=result;
      },
      error:(error: any) => {
        console.error(error);
      },
      complete:() => {
        this.loadProductInfo();
      }
    });
    this.productRef.reset();
  }

  editProduct(product:Product): void {
    this.selectedProduct = product;
    this.productRef.setValue({
      pid: product.pid,
      pname: product.pname,
      price: product.price,
      description: product.description,
      stock: product.stock,
      imageurl: product.imageurl
    });
  }

  updateProduct(): void {
    if (this.selectedProduct) {
      let updatedProduct: Product = {
      pid: this.productRef.value.pid,
      pname: this.productRef.value.pname,
      price: this.productRef.value.price,
      description: this.productRef.value.description,
      stock: this.productRef.value.stock,
      imageurl: this.productRef.value.imageurl
      };
      this.ps.updateProduct(updatedProduct).subscribe({
        next: (result: any) => {
          this.msg = result;
        },
        error: (error: any) => {
          console.error(error);
        },
        complete: () => {
          this.loadProductInfo();
          this.selectedProduct = null;
          this.productRef.reset();
        }
      });
    }
  }

  deleteProduct(pid: number): void {
    this.ps.deleteProduct(pid).subscribe({
      next: (result: any) => {
        this.msg = result;
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
        this.loadProductInfo();
      }
    });
  }

  clearMsg(): void {
    this.msg = "";
  }

  logout():void {
    sessionStorage.removeItem('email'); 
    this.router.navigate(["login"])
  }

}
