import { RestauranteDeleteComponent } from './restaurante-delete/restaurante-delete.component';
import { RestauranteDetailsComponent } from './restaurante-details/restaurante-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestauranteListComponent } from './restaurante-list/restaurante-list.component';
import { RestauranteCreateComponent } from './restaurante-create/restaurante-create.component';
import { RestauranteEditComponent } from './restaurante-edit/restaurante-edit.component';

const routes: Routes = [
  {
    path: '', component: RestauranteListComponent
  },
  {
    path: 'create', component: RestauranteCreateComponent
  },
  {
    path: 'update/:id', component: RestauranteEditComponent
  },
  {
    path: 'details/:id', component: RestauranteDetailsComponent
  },
  {
    path: 'delete/:id', component: RestauranteDeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }