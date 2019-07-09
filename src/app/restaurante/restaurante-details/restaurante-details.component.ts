import { Component, OnInit } from '@angular/core';
import { RestauranteServiceService } from '../restaurante-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurante } from 'src/app/model/restaurante';

@Component({
  selector: 'app-restaurante-details',
  templateUrl: './restaurante-details.component.html',
  styleUrls: ['./restaurante-details.component.css']
})
export class RestauranteDetailsComponent implements OnInit {

  private id: number;
  private restaurante: Restaurante;


  constructor(private service: RestauranteServiceService, private activeRouter: ActivatedRoute,
    private router: Router) { }



  ngOnInit() {

    this.restaurante = new Restaurante();
    this.id = parseInt(this.activeRouter.snapshot.paramMap.get('id'));

    this.service.getOne(this.id).subscribe(
      (data: any)=>{ this.restaurante = data, console.log(data)}
    );
  }

}
