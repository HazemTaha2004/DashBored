import { Component } from '@angular/core';
import { HeaderComponent } from "../../template/header/header.component";
import { NavbarComponent } from "../../template/navbar/navbar.component";
import { FooterComponent } from "../../template/footer/footer.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NewsService } from '../../service/news.service';
import { response } from 'express';

@Component({
  selector: 'app-allnews',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, FooterComponent, CommonModule, RouterLink],
  templateUrl: './allnews.component.html',
  styleUrl: './allnews.component.css'
})
export class AllnewsComponent {
  constructor(private newsService:NewsService){}
  ngOnInit(){
    this.getAllNews();
  }
  allNews:any = [];
  getAllNews(){
    this.newsService.getAllNewsData().subscribe(
      response=>{
        this.allNews = response;
        console.log(response);
      },
      error=>{
        console.error('حدث خطأ:', error);
      }
    );
  }
  deleteNews(id:number)
  {
    confirm("are you sure to delete");
    this.newsService.deleteNewsData(id).subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.error('حدث خطأ:', error)
      }
    );
    
  }
}
