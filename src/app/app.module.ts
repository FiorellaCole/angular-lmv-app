import { LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './comp/interpolacion/interpolacion.component';
import { DirectEstructlComponent } from './comp/direct-estructl/direct-estructl.component';
import { DirectAtributComponent } from './comp/direct-atribut/direct-atribut.component';
import { ExamenAdmisionComponent } from './comp/examen-admision/examen-admision.component';
import { NavegadorComponent } from './comp/navegador/navegador.component';
import { HomeComponent } from './comp/home/home.component';
import { PageNotFoundComponent } from './comp/page-not-found/page-not-found.component';
import { TuberiasComponent } from './comp/tuberias/tuberias.component';

import { registerLocaleData } from "@angular/common";
import  LocalesEsPe  from "@angular/common/locales/es-PE";
import { VistasPipe } from './pipes/vistas.pipe';
import { BusquedaCursoPipe } from './pipes/busqueda-curso.pipe';
import { BuscadorComponent } from './comp/buscador/buscador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './comp/template-driven/template-driven.component';
import { ModelDrivenComponent } from './comp/model-driven/model-driven.component';
import { HttpClientModule } from "@angular/common/http";
import { GestorEmpleadosComponent } from './comp/gestor-empleados/gestor-empleados.component';
import { MarcaZapatillaComponent } from "./comp/marca-zapatilla/marca-zapatilla.component";
import { TiendaRopaComponent } from './comp/tienda-ropa/tienda-ropa.component';
import { NombrePipePipe } from './folder/nombre-pipe.pipe';
import { ClientesBancoComponent } from './comp/clientes-banco/clientes-banco.component';
import { GestorPeliculasComponent } from './comp/gestor-peliculas/gestor-peliculas.component';


registerLocaleData(LocalesEsPe);

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    DirectEstructlComponent,
    DirectAtributComponent,
    ExamenAdmisionComponent,
    NavegadorComponent,
    HomeComponent,
    PageNotFoundComponent,
    TuberiasComponent,
    VistasPipe,
    BusquedaCursoPipe,
    BuscadorComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    GestorEmpleadosComponent,
    MarcaZapatillaComponent,
    TiendaRopaComponent,
    NombrePipePipe,
    ClientesBancoComponent,
    GestorPeliculasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'es-PE'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
