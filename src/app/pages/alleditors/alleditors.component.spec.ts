import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleditorsComponent } from './alleditors.component';

describe('AlleditorsComponent', () => {
  let component: AlleditorsComponent;
  let fixture: ComponentFixture<AlleditorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlleditorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlleditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
