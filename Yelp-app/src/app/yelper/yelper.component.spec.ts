import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YelperComponent } from './yelper.component';

describe('YelperComponent', () => {
  let component: YelperComponent;
  let fixture: ComponentFixture<YelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
