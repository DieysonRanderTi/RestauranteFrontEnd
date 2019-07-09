import { Component, OnInit } from '@angular/core';
import { Prato } from 'src/app/model/prato';
import { PratoServiceService } from '../prato-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prato-delete',
  templateUrl: './prato-delete.component.html',
  styleUrls: ['./prato-delete.component.css']
})
export class PratoDeleteComponent implements OnInit {

  private id: number;
  private prato: Prato;

  constructor(private service: PratoServiceService, private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.prato = new Prato();
    this.id = parseInt(this.activeRoute.snapshot.paramMap.get('id'));

    this.service.getOne(this.id).subscribe(
      (data: any) => {this.prato = data}
    );
  }
  delete(){
    this.service.delete(this.prato.idPrato).subscribe(
      ()=>{alert("Prato excluído com sucesso!"), this.router.navigateByUrl('/prato')}
    );
  }

}
