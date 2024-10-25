import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }
  // publisher
  getAllNewsData():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
  // publisher 
  storeNewNews(newNews:{title:string, body:string, userId:number}): Observable<any>{
    return this.http.post(this.url,newNews);
  }
  // publisher 
  deleteNewsData(id:number): Observable<any>
  {
    return  this.http.delete(this.url+"/"+id);
  }
  // publisher 
  getNewsIdData(id:string|null): Observable<any>
  {
    return  this.http.get(this.url+"/"+id);
  }
  // publisher 
  updateNewsData(newNews:{id:any,title:string, body:string, userId:number}): Observable<any>{
    return this.http.patch(this.url+"/"+newNews.id,newNews);
  }
}
