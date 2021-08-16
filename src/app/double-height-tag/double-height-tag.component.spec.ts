import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleHeightTagComponent } from './double-height-tag.component';

describe('DoubleHeightTagComponent', () => {
  let component: DoubleHeightTagComponent;
  let fixture: ComponentFixture<DoubleHeightTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleHeightTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleHeightTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
