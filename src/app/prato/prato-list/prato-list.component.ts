import { Component, OnInit } from '@angular/core';
import { Prato } from 'src/app/model/prato';
import { PratoServiceService } from '../prato-service.service';

@Component({
  selector: 'app-prato-list',
  templateUrl: './prato-list.component.html',
  styleUrls: ['./prato-list.component.css']
})
export class PratoListComponent implements OnInit {

  private list: Prato[] = [];

  constructor(private service: PratoServiceService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (data:any)=>{
        this.list = data, () => {}
      }
    );
  }

}
