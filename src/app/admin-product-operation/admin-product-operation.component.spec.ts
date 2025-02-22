import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductOperationComponent } from './admin-product-operation.component';

describe('AdminProductOperationComponent', () => {
  let component: AdminProductOperationComponent;
  let fixture: ComponentFixture<AdminProductOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductOperationComponent]
    });
    fixture = TestBed.createComponent(AdminProductOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
