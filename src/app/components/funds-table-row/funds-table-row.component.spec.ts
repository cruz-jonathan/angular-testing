import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsTableRowComponent } from './funds-table-row.component';

describe('FundsTableRowComponent', () => {
  let component: FundsTableRowComponent;
  let fixture: ComponentFixture<FundsTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundsTableRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
