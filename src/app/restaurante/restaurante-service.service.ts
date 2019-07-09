import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurante } from '../model/restaurante';


const API_URL: string = 'https://localhost:44365/api/Restaurante';


@Injectable({
  providedIn: 'root'
})
export class RestauranteServiceService {

  constructor(private http: HttpClient) {

   }


   getAll(){
     return this.http.get(API_URL);
   }

   getOne(id: number){
     return this.http.get(API_URL +"/"+ id)
   }

   insert(restaurante: Restaurante){
     return this.http.post(API_URL, restaurante)
   }

   update(id: number, restaurante: Restaurante){
     return this.http.put(API_URL +"/"+ id, restaurante)
   }

   delete(id: number){
     return this.http.delete(API_URL +"/"+ id)
   }
}
