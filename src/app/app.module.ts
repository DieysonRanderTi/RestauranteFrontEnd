import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PratoCreateComponent } from './prato/prato-create/prato-create.component';
import { PratoDetailsComponent } from './prato/prato-details/prato-details.component';
import { PratoEditComponent } from './prato/prato-edit/prato-edit.component';
import { PratoDeleteComponent } from './prato/prato-delete/prato-delete.component';
import { PratoListComponent } from './prato/prato-list/prato-list.component';
import { RestauranteCreateComponent } from './restaurante/restaurante-create/restaurante-create.component';
import { RestauranteDetailsComponent } from './restaurante/restaurante-details/restaurante-details.component';
import { RestauranteEditComponent } from './restaurante/restaurante-edit/restaurante-edit.component';
import { RestauranteDeleteComponent } from './restaurante/restaurante-delete/restaurante-delete.component';
import { RestauranteListComponent } from './restaurante/restaurante-list/restaurante-list.component';
import { HomeComponent } from './home/home.component';
import { HttpClient } from '@angular/common/http';
import { RestauranteServiceService } from './restaurante/restaurante-service.service';
import { PratoServiceService } from './prato/prato-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PratoCreateComponent,
    PratoDetailsComponent,
    PratoEditComponent,
    PratoDeleteComponent,
    PratoListComponent,
    RestauranteCreateComponent,
    RestauranteDetailsComponent,
    RestauranteEditComponent,
    RestauranteDeleteComponent,
    RestauranteListComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ HttpClient, RestauranteServiceService,
    PratoServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
