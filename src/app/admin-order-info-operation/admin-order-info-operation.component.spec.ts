import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderInfoOperationComponent } from './admin-order-info-operation.component';

describe('AdminOrderInfoOperationComponent', () => {
  let component: AdminOrderInfoOperationComponent;
  let fixture: ComponentFixture<AdminOrderInfoOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOrderInfoOperationComponent]
    });
    fixture = TestBed.createComponent(AdminOrderInfoOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
