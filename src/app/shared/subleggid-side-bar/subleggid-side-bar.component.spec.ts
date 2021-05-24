import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubleggidSideBarComponent } from './subleggid-side-bar.component';

describe('SubleggidSideBarComponent', () => {
  let component: SubleggidSideBarComponent;
  let fixture: ComponentFixture<SubleggidSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubleggidSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubleggidSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
