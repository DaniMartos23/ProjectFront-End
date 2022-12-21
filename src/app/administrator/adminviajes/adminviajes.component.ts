import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GeneralesService } from 'src/app/services/generales.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-adminviajes',
  templateUrl: './adminviajes.component.html',
  styleUrls: ['./adminviajes.component.css'],
})
export class AdminviajesComponent implements OnInit {
  menu: number = 1;
  mod: boolean = false;
  datos: any;
  id: any;
  form: any = {
    vuelos: null,
    hotel: null,
    origen: null,
    destino: null,
  };
  Vuelos: any = {
    id: null,
  };

  Hoteles: any = {
    id: null,
  };

  constructor(
    private serviciosgenerales: GeneralesService,
    private usuariosservice: UsuariosService
  ) { }
  ngOnInit(): void {
    this.mod = false;
  }
  onSubmit(fcrear: NgForm) {
    this.serviciosgenerales
      .retornadato('vuelos', this.form.vuelos)
      .subscribe((result) => {
        this.Vuelos.id = result.id;
        console.log(result);
        console.log(this.Vuelos);

        this.serviciosgenerales
          .retornadato('hoteles', this.form.hotel)
          .subscribe((result) => {
            this.Hoteles.id = result.id;
            console.log(result);
            console.log(this.Hoteles);

            this.datos = this.form;
            this.form.vuelos = this.Vuelos;
            this.form.hotel = this.Hoteles;
            this.serviciosgenerales
              .creardatos('viajes/add', this.form)
              .subscribe((result) => {
                (this.datos = result)
                fcrear.resetForm();
                this.menu = 0;
              });


          });
      });
  }
  mostrarmenu(numero: any) {
    this.menu = numero;
  }
  mostrarviajes() {
    this.menu = 2;
    this.mod = false;

    this.serviciosgenerales
      .retornardatos('viajes')
      .subscribe((result) => (this.datos = result));
  }

  buscaviajes() {
    this.serviciosgenerales
      .retornadato('viajes', this.id)
      .subscribe((result) => (this.datos = result));
    this.menu = 1;
  }

  borrarviajes(ids: number) {
    this.serviciosgenerales
      .deletedatos('viajes', ids)
      .subscribe((result) => (this.datos = result));
    this.menu = 1;
  }
  modificaviajes(ids: number) {
    this.mod = true;
    this.serviciosgenerales
      .retornadato('viajes', ids)
      .subscribe((result) => (this.datos = result));
  }
  modifica(fmodificar: NgForm) {

    if (this.form.vuelos == null) {
      this.Vuelos.id = this.datos.vuelos;
      this.form.vuelos=this.Vuelos;
    }
    else{
      this.Vuelos.id=this.form.vuelos;
      this.form.vuelos=this.Vuelos;
    }
    if (this.form.hotel == null) {
      this.Hoteles.id = this.datos.hotel.id;
      this.form.hotel=this.Hoteles;
    }
    else{
      this.Hoteles.id=this.form.hotel;
      this.form.hotel=this.Hoteles;
    }
    if (this.form.origen == null) {
      this.form.origen = this.datos.origen;
    }
    if (this.form.destino == null) {
      this.form.destino = this.datos.destino;
    }


    this.serviciosgenerales
      .updatedatos('viajes', this.datos.id, this.form)
      .subscribe((result) => {
        this.datos = result;
        this.mostrarviajes();
        fmodificar.resetForm();
      });


  }
}
