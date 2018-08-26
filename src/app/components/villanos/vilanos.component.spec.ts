import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VilanosComponent } from './vilanos.component';

describe('VilanosComponent', () => {
  let component: VilanosComponent;
  let fixture: ComponentFixture<VilanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
