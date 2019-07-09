import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteRoutingModule } from './restaurante-routing.module';
import { RestauranteListComponent } from './restaurante-list/restaurante-list.component';
import { RestauranteCreateComponent } from './restaurante-create/restaurante-create.component';
import { RestauranteDetailsComponent } from './restaurante-details/restaurante-details.component';
import { RestauranteEditComponent } from './restaurante-edit/restaurante-edit.component';
import { RestauranteDeleteComponent } from './restaurante-delete/restaurante-delete.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RestauranteListComponent, RestauranteCreateComponent, RestauranteDetailsComponent, RestauranteEditComponent, RestauranteDeleteComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    
    RestauranteRoutingModule
  ]
})
export class RestauranteModule { }