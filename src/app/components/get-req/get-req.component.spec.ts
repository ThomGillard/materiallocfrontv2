import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReqComponent } from './get-req.component';

describe('GetReqComponent', () => {
  let component: GetReqComponent;
  let fixture: ComponentFixture<GetReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetReqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
