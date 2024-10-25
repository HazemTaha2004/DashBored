import { Component } from '@angular/core';
import { HeaderComponent } from "../../template/header/header.component";
import { NavbarComponent } from "../../template/navbar/navbar.component";
import { FooterComponent } from "../../template/footer/footer.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-allcategories',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, FooterComponent, CommonModule, RouterLink],
  templateUrl: './allcategories.component.html',
  styleUrl: './allcategories.component.css'
})
export class AllcategoriesComponent {
  allCategories = [
    {"id":1, "name":"sport", "managedBy":"ali", "noOfNews":333},
    {"id":2, "name":"technology", "managedBy":"hossam", "noOfNews":643},
    {"id":3, "name":"economy", "managedBy":"ramy", "noOfNews":322},
    {"id":4, "name":"poltical", "managedBy":"samy", "noOfNews":5454},
    {"id":5, "name":"talkshow", "managedBy":"kamal", "noOfNews":4554},
    {"id":6, "name":"media", "managedBy":"hussien", "noOfNews":4442},
  ];

  deleteCategory(id:number)
  {
    confirm("are you sure to delete");
  }
}
