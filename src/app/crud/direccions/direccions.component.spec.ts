import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionsComponent } from './direccions.component';

describe('DireccionsComponent', () => {
  let component: DireccionsComponent;
  let fixture: ComponentFixture<DireccionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DireccionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DireccionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
