import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangComponent } from './barang.component';

describe('BarangComponent', () => {
  let component: BarangComponent;
  let fixture: ComponentFixture<BarangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
