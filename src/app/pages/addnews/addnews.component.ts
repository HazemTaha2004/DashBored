import { Component } from '@angular/core';
import { HeaderComponent } from '../../template/header/header.component';
import { FooterComponent } from "../../template/footer/footer.component";
import { NavbarComponent } from "../../template/navbar/navbar.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../service/news.service';
import { response } from 'express';


@Component({
  selector: 'app-addnews',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NavbarComponent, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './addnews.component.html',
  styleUrl: './addnews.component.css'
})
export class AddnewsComponent {
  addNewsForm:FormGroup;
  constructor(private newsService:NewsService ){
    this.addNewsForm = new FormGroup({
      title:new FormControl('',[
        Validators.required
      ]),
      content:new FormControl('',[
        Validators.required
      ]),
      id_editor:new FormControl('',[
        Validators.required
      ]),
      id_category:new FormControl('',[
        Validators.required
      ]),
      mainImage:new FormControl(null,[
        Validators.required
      ]),
    });
  }
  addNews(){
    const newNews = {title:this.addNewsForm.value.title, body:this.addNewsForm.value.content, userId:1};
    this.newsService.storeNewNews(newNews).subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.error('حدث خطأ:', error)
      }
    );
  }
}
