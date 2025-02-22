import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrdersOperationComponent } from './customer-orders-operation.component';

describe('CustomerOrdersOperationComponent', () => {
  let component: CustomerOrdersOperationComponent;
  let fixture: ComponentFixture<CustomerOrdersOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerOrdersOperationComponent]
    });
    fixture = TestBed.createComponent(CustomerOrdersOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
