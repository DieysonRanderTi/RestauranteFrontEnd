import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/model/restaurante';
import { RestauranteServiceService } from '../restaurante-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurante-create',
  templateUrl: './restaurante-create.component.html',
  styleUrls: ['./restaurante-create.component.css']
})
export class RestauranteCreateComponent implements OnInit {

  restaurante: Restaurante;

  constructor(private service: RestauranteServiceService, private router: Router) { }


  ngOnInit() {
    this.restaurante = new Restaurante();
    this.restaurante.nomeRestaurante = "";
  }

  insert(){
    if(this.restaurante.nomeRestaurante.length == 0 ||
      this.restaurante.nomeRestaurante == undefined ||
      this.restaurante.nomeRestaurante == null){

        return alert("Digite um nome para o restaurante");
      }

      this.service.insert(this.restaurante).subscribe(
        () =>{
          alert("Restaurante Cadastrado!"), this.router.navigateByUrl('/restaurante');
        });
  }

  cancel(){
    this.restaurante.nomeRestaurante = "";
  }

}
