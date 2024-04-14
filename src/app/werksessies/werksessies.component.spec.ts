import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WerksessiesComponent } from './werksessies.component';

describe('WerksessiesComponent', () => {
  let component: WerksessiesComponent;
  let fixture: ComponentFixture<WerksessiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WerksessiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WerksessiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
