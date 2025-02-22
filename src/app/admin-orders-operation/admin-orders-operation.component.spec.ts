import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersOperationComponent } from './admin-orders-operation.component';

describe('AdminOrdersOperationComponent', () => {
  let component: AdminOrdersOperationComponent;
  let fixture: ComponentFixture<AdminOrdersOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOrdersOperationComponent]
    });
    fixture = TestBed.createComponent(AdminOrdersOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
