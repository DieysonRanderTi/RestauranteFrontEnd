import { PratoCreateComponent } from './prato-create/prato-create.component';
import { PratoDeleteComponent } from './prato-delete/prato-delete.component';
import { PratoDetailsComponent } from './prato-details/prato-details.component';
import { PratoEditComponent } from './prato-edit/prato-edit.component';
import { PratoListComponent } from './prato-list/prato-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '', component: PratoListComponent
  },
  {
    path: 'create', component: PratoCreateComponent
  },
  {
    path: 'update/:id', component: PratoEditComponent
  },
  {
    path: 'details/:id', component: PratoDetailsComponent
  },
  {
    path: 'delete/:id', component: PratoDeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PratoRoutingModule { }