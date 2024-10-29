import { Component } from '@angular/core';
import { HeaderComponent } from "../../template/header/header.component";
import { NavbarComponent } from "../../template/navbar/navbar.component";
import { FooterComponent } from "../../template/footer/footer.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addcategory',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, FooterComponent, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './addcategory.component.html',
  styleUrl: './addcategory.component.css'
})
export class AddcategoryComponent {
  addCategoryForm:FormGroup;
  constructor()
  {
    this.addCategoryForm = new FormGroup({
      name:new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      id_editor:new FormControl('',[
        Validators.required
      ])
    });
  }
  addCategory(){
    alert(this.addCategoryForm.value.name);
    alert(this.addCategoryForm.value.id_editor);
  }
}
