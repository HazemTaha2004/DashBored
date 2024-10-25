import { Component } from '@angular/core';
import { HeaderComponent } from "../../template/header/header.component";
import { NavbarComponent } from "../../template/navbar/navbar.component";
import { FooterComponent } from "../../template/footer/footer.component";
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editcategory',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, FooterComponent, RouterLink,FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './editcategory.component.html',
  styleUrl: './editcategory.component.css'
})
export class EditcategoryComponent {
  editCategoryForm:FormGroup;
  constructor()
  {
    this.editCategoryForm = new FormGroup({
      name:new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      id_editor:new FormControl('',[
        Validators.required,
      ]),
    });
  }
  updateCategoryById()
  {
    alert(this.editCategoryForm.value.name);
    alert(this.editCategoryForm.value.id_editor);
    alert("updated");
  }
}
