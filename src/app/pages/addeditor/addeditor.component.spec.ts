import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditorComponent } from './addeditor.component';

describe('AddeditorComponent', () => {
  let component: AddeditorComponent;
  let fixture: ComponentFixture<AddeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddeditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
