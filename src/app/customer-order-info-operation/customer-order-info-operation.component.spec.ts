import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderInfoOperationComponent } from './customer-order-info-operation.component';

describe('CustomerOrderInfoOperationComponent', () => {
  let component: CustomerOrderInfoOperationComponent;
  let fixture: ComponentFixture<CustomerOrderInfoOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerOrderInfoOperationComponent]
    });
    fixture = TestBed.createComponent(CustomerOrderInfoOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
