import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroeModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';



@NgModule({
  declarations: [
    AppComponent,  //estan todos los componentes.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroeModule,
    ContadorModule //entran todos los modulos 
  ],
  providers: [], ///estaran los servicios.
  bootstrap: [AppComponent] //solo muestra un solo componente
})
export class AppModule { }
