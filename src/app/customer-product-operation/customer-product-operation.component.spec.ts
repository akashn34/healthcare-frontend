import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProductOperationComponent } from './customer-product-operation.component';

describe('CustomerProductOperationComponent', () => {
  let component: CustomerProductOperationComponent;
  let fixture: ComponentFixture<CustomerProductOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerProductOperationComponent]
    });
    fixture = TestBed.createComponent(CustomerProductOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
