import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterdocumentsComponent } from './enterdocuments.component';

describe('EnterdocumentsComponent', () => {
  let component: EnterdocumentsComponent;
  let fixture: ComponentFixture<EnterdocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterdocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
