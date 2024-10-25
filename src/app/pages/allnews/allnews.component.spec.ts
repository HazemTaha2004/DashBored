import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllnewsComponent } from './allnews.component';

describe('AllnewsComponent', () => {
  let component: AllnewsComponent;
  let fixture: ComponentFixture<AllnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllnewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
