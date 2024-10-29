import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  powered=["powered by Hazem Taha"];
  addLinks = [
    { path: '/dashboard/editor/add', label: 'Add New Editor' },
    { path: '/dashboard/category/add', label: 'Add New Category' },
    { path: '/dashboard/news/add', label: 'Add New News' },
    { path: '#', label: 'Help' }
  ];
  allLinks = [
    { path: '/dashboard/editor/all', label: 'All Editor' },
    { path: '/dashboard/category/all', label: 'All Category' },
    { path: '/dashboard/news/all', label: 'All News' },
    { path: '#', label: 'Help' }
  ];
}

