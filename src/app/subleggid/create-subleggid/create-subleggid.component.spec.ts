import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubleggidComponent } from './create-subleggid.component';

describe('CreateSubleggidComponent', () => {
  let component: CreateSubleggidComponent;
  let fixture: ComponentFixture<CreateSubleggidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubleggidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubleggidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
