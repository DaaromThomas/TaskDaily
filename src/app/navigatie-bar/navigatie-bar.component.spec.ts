import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatieBarComponent } from './navigatie-bar.component';

describe('NavigatieBarComponent', () => {
  let component: NavigatieBarComponent;
  let fixture: ComponentFixture<NavigatieBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigatieBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigatieBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
