import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  private url="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }
  // get all editors from jsonplaceholder // publisher 
  getAllEditorsData():Observable<any[]>{
      return this.http.get<any[]>(this.url);
  }
}
