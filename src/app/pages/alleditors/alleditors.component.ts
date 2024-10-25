import { Component } from '@angular/core';
import { HeaderComponent } from "../../template/header/header.component";
import { NavbarComponent } from "../../template/navbar/navbar.component";
import { FooterComponent } from "../../template/footer/footer.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EditorService } from '../../service/editor.service';

@Component({
  selector: 'app-alleditors',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, FooterComponent, CommonModule, RouterLink],
  templateUrl: './alleditors.component.html',
  styleUrl: './alleditors.component.css'
})
export class AlleditorsComponent {
  allEditors:any = [];
  ngOnInit(): void {
    this.getAllEditors();
  }
  constructor(public editorService:EditorService){}
  deleteEditor(id:number)
  {
    confirm("are you sure to delete");
  }
  getAllEditors(){
    this.editorService.getAllEditorsData().subscribe(
      response=>{
        this.allEditors = response;
        console.log(response);
      },
      error=>{
        console.error('حدث خطأ:', error);
      }
    );
  }
}
