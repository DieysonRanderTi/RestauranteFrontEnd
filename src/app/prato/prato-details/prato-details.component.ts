import { Component, OnInit } from '@angular/core';
import { Prato } from 'src/app/model/prato';
import { Restaurante } from 'src/app/model/restaurante';
import { PratoServiceService } from '../prato-service.service';
import { RestauranteServiceService } from 'src/app/restaurante/restaurante-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prato-details',
  templateUrl: './prato-details.component.html',
  styleUrls: ['./prato-details.component.css']
})
export class PratoDetailsComponent implements OnInit {

  private id: number;
  private prato: Prato;
  private restaurante: Restaurante;


  constructor(private service: PratoServiceService, private restauranteService: RestauranteServiceService,
    private actionRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.prato = new Prato();
    this.restaurante = new Restaurante();
    this.id = parseInt(this.actionRoute.snapshot.paramMap.get('id'));

    this.service.getOne(this.id).subscribe(
      (data: any)=>{
        this.prato = data, console.log(data);
        this.getOneRestaurante();
      }
    );
  }
  getOneRestaurante() {
    this.restauranteService.getOne(this.prato.idRestaurante).subscribe(
      (data: any) => { this.restaurante = data },
      () => { }
    );
  }

}
