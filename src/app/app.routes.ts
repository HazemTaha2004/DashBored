import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AddeditorComponent } from './pages/addeditor/addeditor.component';
import { AlleditorsComponent } from './pages/alleditors/alleditors.component';
import { AddcategoryComponent } from './pages/addcategory/addcategory.component';
import { AllcategoriesComponent } from './pages/allcategories/allcategories.component';
import { AddnewsComponent } from './pages/addnews/addnews.component';
import { AllnewsComponent } from './pages/allnews/allnews.component';
import { EditeditorComponent } from './pages/editeditor/editeditor.component';
import { EditcategoryComponent } from './pages/editcategory/editcategory.component';
import { EditnewsComponent } from './pages/editnews/editnews.component';

export const routes: Routes = [
    {path:"", component:IndexComponent},
    {path:"dashboard/index", component:IndexComponent},
    {path:"dashboard/editor/add", component:AddeditorComponent},
    {path:"dashboard/editor/all", component:AlleditorsComponent},
    {path:"dashboard/editor/:id/show", component:EditeditorComponent},
    {path:"dashboard/category/add", component:AddcategoryComponent},
    {path:"dashboard/category/all", component:AllcategoriesComponent},
    {path:"dashboard/category/:id/show", component:EditcategoryComponent},
    {path:"dashboard/news/add", component:AddnewsComponent},
    {path:"dashboard/news/all", component:AllnewsComponent},
    {path:"dashboard/news/:id/show", component:EditnewsComponent},
];
