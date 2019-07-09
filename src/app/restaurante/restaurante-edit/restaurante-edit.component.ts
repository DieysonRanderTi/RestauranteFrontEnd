import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/model/restaurante';
import { RestauranteServiceService } from '../restaurante-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurante-edit',
  templateUrl: './restaurante-edit.component.html',
  styleUrls: ['./restaurante-edit.component.css']
})
export class RestauranteEditComponent implements OnInit {

  private id: number;
  private restaurante: Restaurante;

  constructor(private service: RestauranteServiceService, private activeRouter: ActivatedRoute, 
    private route: Router) { }

  ngOnInit() {

    this.restaurante = new Restaurante();
    this.id = parseInt(this.activeRouter.snapshot.paramMap.get('id'));

    this.service.getOne(this.id).subscribe(
      (data: any) =>{this.restaurante = data} 
    );
  }

  update(){
    if(this.restaurante.nomeRestaurante.length ==0 ||
      this.restaurante.nomeRestaurante == undefined ||
      this.restaurante.nomeRestaurante == null){

        return alert("Nome do restaurante está vazio");
      }

      this.restaurante.IdRestaurante = this.id;
      this.service.update(this.id, this.restaurante).subscribe(
        ()=>{
          alert("Dados salvos!"), this.route.navigateByUrl('/restaurante');
        })
  }

}
