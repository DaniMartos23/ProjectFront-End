import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GeneralesService } from 'src/app/services/generales.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminvuelos',
  templateUrl: './adminvuelos.component.html',
  styleUrls: ['./adminvuelos.component.css'],
})
export class AdminvuelosComponent implements OnInit {
  menu: number = 1;
  mod: boolean = false;
  datos: any;
  id: any;
  form: any = {
    aerolinea: null,
    tipoAsiento: null,
    maletas: null,
    asignacion_asiento: null,
    duracion: null,
    escalas: null,
    origen: null,
    destino: null,
  };

  constructor(
    private serviciosgenerales: GeneralesService,
    private usuariosservice: UsuariosService
  ) {}

  ngOnInit(): void {
    this.mod = false;
  }
  onSubmit(fcrear:NgForm) {
    console.log(this.form);
    this.serviciosgenerales
      .creardatos('vuelos', this.form)
      .subscribe((result) => (this.datos = result));
    this.menu = 1;
    fcrear.resetForm();
  }
  mostrarmenu(numero: any) {
    this.menu = numero;
    this.mod = false;
  }
  mostrarvuelos() {
    this.menu = 2;
    this.mod = false;
    this.serviciosgenerales
      .retornardatos('vuelos')
      .subscribe((result) => (this.datos = result));
  }

  buscavuelo() {
    this.serviciosgenerales
      .retornadato('vuelos', this.id)
      .subscribe((result) => (this.datos = result));
    this.menu = 1;
  }

  borrarvuelo(ids: number) {

    Swal.fire({
      title: '¿Quieres eliminar el vuelo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'cancelar',
      confirmButtonText: 'Eliminar el vuelo'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Registro eliminado',
          'El vuelo ha sido eliminado',
          'success'
        );

        this.serviciosgenerales
        .deletedatos('vuelos', ids)
        .subscribe((result) => (this.datos = result));
      this.menu = 1;


        }
      });




  }
  modificavuelo(ids: number) {
    this.mod = true;
    this.serviciosgenerales
      .retornadato('vuelos', ids)
      .subscribe((result) => (this.datos = result));
  }


  modifica(fmodificar:NgForm) {
    if (this.form.aerolinea == null) {
      this.form.aerolinea=this.datos.aerolinea
    }
    if (this.form.tipoAsiento == null) {
      this.form.tipoAsiento=this.datos.tipoAsiento
    }
    if (this.form.maletas == null) {
      this.form.maletas=this.datos.maletas
    }
    if (this.form.asignacion_asiento == null) {
      this.form.asignacion_asiento=this.datos.asignacion_asiento
    }
    if (this.form.duracion == null) {
      this.form.duracion=this.datos.duracion
    }
    if (this.form.escalas == null) {
      this.form.escalas=this.datos.escalas
    }
    if (this.form.origen == null) {
      this.form.origen=this.datos.origen
    }
    if (this.form.destino == null) {
      this.form.destino=this.datos.destino
    }

    Swal.fire({
      title: '¿Quieres editar el vuelo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'cancelar',
      confirmButtonText: 'editar el vuelo'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'vuelo editado',
          'El vuelo ha sido editado',
          'success'
        );


        this.serviciosgenerales.updatedatos("vuelos",this.datos.id,this.form)
        .subscribe((result) => {(this.datos = result )
          this.mostrarvuelos()
          fmodificar.resetForm();})


        }
      });



  }
}
