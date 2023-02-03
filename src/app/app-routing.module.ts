import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './comp/buscador/buscador.component';
import { ClientesBancoComponent } from './comp/clientes-banco/clientes-banco.component';
import { DirectAtributComponent } from './comp/direct-atribut/direct-atribut.component';
import { DirectEstructlComponent } from './comp/direct-estructl/direct-estructl.component';
import { ExamenAdmisionComponent } from './comp/examen-admision/examen-admision.component';
import { GestorEmpleadosComponent } from './comp/gestor-empleados/gestor-empleados.component';
import { GestorPeliculasComponent } from './comp/gestor-peliculas/gestor-peliculas.component';
import { HomeComponent } from './comp/home/home.component';
import { InterpolacionComponent } from './comp/interpolacion/interpolacion.component';
import { MarcaZapatillaComponent } from './comp/marca-zapatilla/marca-zapatilla.component';
import { ModelDrivenComponent } from './comp/model-driven/model-driven.component';
import { PageNotFoundComponent } from './comp/page-not-found/page-not-found.component';
import { TemplateDrivenComponent } from './comp/template-driven/template-driven.component';
import { TiendaRopaComponent } from './comp/tienda-ropa/tienda-ropa.component';
import { TuberiasComponent } from './comp/tuberias/tuberias.component';


const routes: Routes = [
  {path:'interpolacion-componente', component:InterpolacionComponent},
  {path:'directivas-estructurales', component:DirectEstructlComponent},
  {path:'directivas-atributos', component:DirectAtributComponent},
  {path:'caso-examen-admisión', component:ExamenAdmisionComponent},
  {path:'inicio', component:HomeComponent},
  {path:'tuberias-formato-salida', component:TuberiasComponent},
  {path:'app-buscador', component:BuscadorComponent},
  {path:'app-template-driven', component:TemplateDrivenComponent},
  {path:'app-model-driven', component:ModelDrivenComponent},
  {path:'app-gestor-empleados', component:GestorEmpleadosComponent},
  {path:'app-marca-zapatilla', component:MarcaZapatillaComponent},
  {path:'app-clientes-banco', component:ClientesBancoComponent},
  {path:'app-tienda-ropa', component:TiendaRopaComponent},
  {path:'app-gestor-peliculas', component:GestorPeliculasComponent},
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path:'**', pathMatch:'full', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
