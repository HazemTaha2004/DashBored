import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeditorComponent } from './editeditor.component';

describe('EditeditorComponent', () => {
  let component: EditeditorComponent;
  let fixture: ComponentFixture<EditeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditeditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
