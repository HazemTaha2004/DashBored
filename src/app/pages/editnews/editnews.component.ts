import { Component } from '@angular/core';
import { FooterComponent } from "../../template/footer/footer.component";
import { NavbarComponent } from "../../template/navbar/navbar.component";
import { HeaderComponent } from "../../template/header/header.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-editnews',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, HeaderComponent, RouterLink, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './editnews.component.html',
  styleUrl: './editnews.component.css'
})
export class EditnewsComponent {
  editNewsForm:FormGroup;
  id: string | null = null; // get id 
  constructor(private newsService:NewsService, private route: ActivatedRoute){
    this.editNewsForm = new FormGroup({
      title:new FormControl('', [
        Validators.required
      ]),
      content:new FormControl('', [
        Validators.required
      ]),
      id_editor:new FormControl('', [
        Validators.required
      ]),
      id_category:new FormControl('', [
        Validators.required
      ]),
      mainImage:new FormControl(null, [
        Validators.required
      ]),
    });
  }
  ngOnInit(){
    // get id here 
    this.route.paramMap.subscribe(
      params=>{
        this.id = params.get('id');
      }
    );
    this.getNews();
  }
  getNews(){
    this.newsService.getNewsIdData(this.id).subscribe(
      response=>{
        console.log(response);
        // set data into your form 
        this.editNewsForm.patchValue(response);
      },
      error=>{
        console.error('حدث خطأ:', error)
      }
    );
  }
  updateNewsById()
  {
    const newsData = {id:this.id, title:this.editNewsForm.value.title, body:this.editNewsForm.value.content, userId:1};
    this.newsService.updateNewsData(newsData).subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.error('حدث خطأ:', error)
      }
    );
    alert(this.editNewsForm.value.title);
    alert("updated");
  }
}
