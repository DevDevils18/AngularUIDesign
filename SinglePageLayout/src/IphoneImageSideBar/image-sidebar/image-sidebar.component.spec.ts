import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSidebarComponent } from './image-sidebar.component';

describe('ImageSidebarComponent', () => {
  let component: ImageSidebarComponent;
  let fixture: ComponentFixture<ImageSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
