import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PratoRoutingModule } from './prato-routing.module';
import { PratoCreateComponent } from './prato-create/prato-create.component';
import { PratoDetailsComponent } from './prato-details/prato-details.component';
import { PratoEditComponent } from './prato-edit/prato-edit.component';
import { PratoDeleteComponent } from './prato-delete/prato-delete.component';
import { PratoListComponent } from './prato-list/prato-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PratoCreateComponent, PratoDetailsComponent, PratoEditComponent, PratoDeleteComponent, PratoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    
    PratoRoutingModule
  ]
})
export class PratoModule { }