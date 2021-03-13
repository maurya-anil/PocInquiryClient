import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class LoginService 
{

  private REST_API_SERVER = "http://localhost:4200/api";
  constructor(private httpClient: HttpClient)
   {
    }
    public getUserData ()
    {
      
      
        const headers = new HttpHeaders({'Access-Control-Allow-Origin':'http://localhost:4200/api'}); 
      
      
      return this.httpClient.get (this.REST_API_SERVER, {'headers':headers});
    }
    
}
