import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingoptionComponent } from './shippingoption.component';

describe('ShippingoptionComponent', () => {
  let component: ShippingoptionComponent;
  let fixture: ComponentFixture<ShippingoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingoptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
