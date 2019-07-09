import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/model/restaurante';
import { RestauranteServiceService } from '../restaurante-service.service';

@Component({
  selector: 'app-restaurante-list',
  templateUrl: './restaurante-list.component.html',
  styleUrls: ['./restaurante-list.component.css']
})
export class RestauranteListComponent implements OnInit {

  private list: Restaurante[] = [];


  constructor(private service: RestauranteServiceService) { }

  ngOnInit() {

    this.service.getAll().subscribe(
      (data: any)=>{
        this.list = data, 
        ()=>{}
      }
    );
  }

}
