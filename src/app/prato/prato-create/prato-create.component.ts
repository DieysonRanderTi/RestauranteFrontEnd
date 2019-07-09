import { Component, OnInit } from '@angular/core';
import { Prato } from 'src/app/model/prato';
import { Restaurante } from 'src/app/model/restaurante';
import { PratoServiceService } from '../prato-service.service';
import { RestauranteServiceService } from 'src/app/restaurante/restaurante-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prato-create',
  templateUrl: './prato-create.component.html',
  styleUrls: ['./prato-create.component.css']
})
export class PratoCreateComponent implements OnInit {

  prato: Prato;
  private restaurantes: Restaurante[] = [];

  constructor(private service: PratoServiceService, private serviceRestaurante: RestauranteServiceService,
    private router: Router){
    
  }
  ngOnInit() {

    this.prato = new Prato();
    this.prato.nomePrato = "";
    this.getAllRestaurantes();
  }

  insert(){
    if(this.prato.nomePrato.length == 0 ||
      this.prato.nomePrato == undefined ||
      this.prato.nomePrato == null){

        return alert("Digite um nome para o prato");
      }
      else if(this.prato.preco < 0.01 ||
        this.prato.preco == null ||
        this.prato.preco == undefined){

          return alert("Digite um preco válido para o prato");
        }

        this.service.insert(this.prato).subscribe(
          ()=>{
            alert('Prato cadastrado!'), this.router.navigateByUrl('/prato');
          }
        );
  }

  getAllRestaurantes(){

    this.serviceRestaurante.getAll().subscribe(
      (data: any)=>{this.restaurantes = data},
      ()=>{}
      );
  }

}
