import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./template/header/header.component";
import { NavbarComponent } from "./template/navbar/navbar.component";
import { FooterComponent } from "./template/footer/footer.component";
import { IndexComponent } from "./pages/index/index.component";
import { AddeditorComponent } from "./pages/addeditor/addeditor.component";
import { EditeditorComponent } from "./pages/editeditor/editeditor.component";
import { AlleditorsComponent } from "./pages/alleditors/alleditors.component";
import { AddcategoryComponent } from "./pages/addcategory/addcategory.component";
import { EditcategoryComponent } from "./pages/editcategory/editcategory.component";
import { AllcategoriesComponent } from "./pages/allcategories/allcategories.component";
import { AddnewsComponent } from "./pages/addnews/addnews.component";
import { EditnewsComponent } from "./pages/editnews/editnews.component";
import { AllnewsComponent } from "./pages/allnews/allnews.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, FooterComponent, IndexComponent, AddeditorComponent, EditeditorComponent, AlleditorsComponent, AddcategoryComponent, EditcategoryComponent, AllcategoriesComponent, AddnewsComponent, EditnewsComponent, AllnewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secondPro';
}
