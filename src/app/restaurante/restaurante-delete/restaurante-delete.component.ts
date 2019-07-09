import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/model/restaurante';
import { RestauranteServiceService } from '../restaurante-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurante-delete',
  templateUrl: './restaurante-delete.component.html',
  styleUrls: ['./restaurante-delete.component.css']
})
export class RestauranteDeleteComponent implements OnInit {


  private id: number;
  private restaurante: Restaurante;


  constructor(private service: RestauranteServiceService, private activeRoute: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {

    this.restaurante = new Restaurante();
    this.id = parseInt(this.activeRoute.snapshot.paramMap.get('id'));

    this.service.getOne(this.id).subscribe(
      (data: any) => { this.restaurante = data }
      );
  }
  delete(){
    this.service.delete(this.restaurante.IdRestaurante).subscribe(
      ()=>{
        alert("Restaurante excluído!"), this.router.navigateByUrl('/restaurante')
      }
    );
  }
}
