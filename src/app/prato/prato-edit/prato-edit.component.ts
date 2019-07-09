import { Component, OnInit } from '@angular/core';
import { Prato } from 'src/app/model/prato';
import { Restaurante } from 'src/app/model/restaurante';
import { RestauranteServiceService } from 'src/app/restaurante/restaurante-service.service';
import { PratoServiceService } from '../prato-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prato-edit',
  templateUrl: './prato-edit.component.html',
  styleUrls: ['./prato-edit.component.css']
})
export class PratoEditComponent implements OnInit {


  private id: number;
  private prato: Prato;
  private restaurantes: Restaurante[] = [];

  constructor(private service: PratoServiceService, private restauranteServices: RestauranteServiceService,
    private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.prato = new Prato();
    this.id = parseInt(this.activeRoute.snapshot.paramMap.get('id'));

    this.service.getOne(this.id).subscribe(
      (data: any) =>{
        this.prato = data
      }
    );
    this.getAllRestaurantes();
  }

  restaurante(event){
    console.log(event);
    this.prato.idPrato = Number(event);
  }

  update(){
    if (this.prato.nomePrato.length == 0 || 
      this.prato.nomePrato == null || 
      this.prato.nomePrato == undefined) {
      return alert("Informe o nome do prato");
    }
    else if(this.prato.preco < 0.01 || 
      this.prato.preco == null || 
      this.prato.preco == undefined){
      return alert("Informe um preço de prato válido");
    }
    this.prato.idPrato = this.id;

    console.log(this.prato);
    this.service.update(this.id, this.prato).subscribe(
      ()=>{
        alert("Prato alterado com sucesso!"), this.router.navigateByUrl('/prato');
      }
    );
  }

  getAllRestaurantes(){
    this.restauranteServices.getAll().subscribe(
      (data: any)=>{
        this.restaurantes = data,
        ()=>{}
      }
    );
  }
  cancel(){
    this.prato.nomePrato = "";
    this.prato.preco = null;
    this.prato.idRestaurante = null;
  }
}
