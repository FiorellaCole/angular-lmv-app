import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ipelicula } from 'src/app/modelo/ipelicula';
import { Pelicula } from 'src/app/modelo/pelicula';
import { PeliculaService } from 'src/app/servicios/pelicula.service';

@Component({
  selector: 'app-gestor-peliculas',
  templateUrl: './gestor-peliculas.component.html',
  styleUrls: ['./gestor-peliculas.component.css']
})
export class GestorPeliculasComponent implements OnInit{

  peliculas:Ipelicula[]=[];
  pelObj:Pelicula= new Pelicula(); 

  formPeliculas =new FormGroup({
    nombre:new FormControl(),
    estreno:new FormControl(),
    genero:new FormControl(),
    duracion:new FormControl(),
    calificacion:new FormControl(),
  })

  ngOnInit(): void {
    this.listar();
  }

  constructor(private peliculaService:PeliculaService){}

  listar=()=>{
    this.peliculaService.getMovie().subscribe((resp:any)=>{
      this.peliculas=resp;
    })
  }

  registrar=()=>{
    this.pelObj.nombre=this.formPeliculas.value.nombre;
    this.pelObj.estreno=this.formPeliculas.value.estreno;
    this.pelObj.genero=this.formPeliculas.value.genero;
    this.pelObj.duracion=this.formPeliculas.value.duracion;
    this.pelObj.calificacion=this.formPeliculas.value.calificacion;

    this.peliculaService.addMovie(this.pelObj).subscribe(resp=>{
      this.formPeliculas.reset();
      this.listar();
    })
  }


  eliminar=(pelicula:Ipelicula)=>{
    this.peliculaService.deleteMovie(pelicula.id).subscribe(resp=>{
      this.listar();
    })
  }

}

