import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prato } from '../model/prato';

const API_URL:string='https://localhost:44365/api/Prato';


@Injectable({
  providedIn: 'root'
})
export class PratoServiceService {

  constructor(private http: HttpClient) 
  {   }

   getAll(){
     return this.http.get<Prato[]>(API_URL);
   }

   getOne(id: number){
      return this.http.get<Prato[]>(API_URL+"/"+ id);
   }

   insert(prato: Prato){
     return this.http.post(API_URL, prato);
   }

   update(id:number, prato: Prato){
     return this.http.put(API_URL +"/"+ id,prato);
   }

   delete(id: number){
     return this.http.delete(API_URL +"/"+ id);
   }
}
