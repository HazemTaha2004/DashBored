import { Component } from '@angular/core';
import { HeaderComponent } from "../../template/header/header.component";
import { NavbarComponent } from "../../template/navbar/navbar.component";
import { FooterComponent } from "../../template/footer/footer.component";
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editeditor',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, FooterComponent, RouterLink, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './editeditor.component.html',
  styleUrl: './editeditor.component.css'
})
export class EditeditorComponent {
  EditEditorForm:FormGroup;
  constructor(){
    this.EditEditorForm = new FormGroup({
      name:new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      salary:new FormControl('',[
        Validators.required
      ]),
    });
  }
  updateEditorById()
  {
    alert(this.EditEditorForm.value.name);
    alert(this.EditEditorForm.value.salary);
    alert("updated");
  }
}
