import { Component } from '@angular/core';
import { HeaderComponent } from "../../template/header/header.component";
import { NavbarComponent } from "../../template/navbar/navbar.component";
import { FooterComponent } from "../../template/footer/footer.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addeditor',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, FooterComponent, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './addeditor.component.html',
  styleUrl: './addeditor.component.css'
})
export class AddeditorComponent {
  addEditorForm:FormGroup;
  constructor(){
    this.addEditorForm = new FormGroup({
      name:new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      salary:new FormControl('',[
        Validators.required
      ])
    });
  }

  addEditor(){
    //alert(this.addEditorForm.value);
    alert(this.addEditorForm.value.name);
    alert(this.addEditorForm.value.salary);
  }
}
