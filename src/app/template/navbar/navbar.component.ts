import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule,NgFor,RouterModule,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  links = [
    { path: '/dashboard/index', label: 'Home' },
    { path: '/dashboard/editor/add', label: 'Add Editor' },
    { path: '/dashboard/editor/all', label: 'Edit Editor' },
    { path: '/dashboard/category/add', label: 'Add Category' },
    { path: '/dashboard/category/all', label: 'Edit Category' },
    { path: '/dashboard/news/add', label: 'Add News' },
    { path: '/dashboard/news/all', label: 'Edit News' }
];


  trackByFn(index: number, item: any): number {
    return index;
  }
}
