import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }



  search(Name: any) {

    //specify request body 
const data={
  Name
}

//transaction API CALL
return this.http.post('http://localhost:3000/search', data)

  }









}
