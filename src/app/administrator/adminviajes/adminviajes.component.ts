import { Component } from '@angular/core';
import { GeneralesService } from 'src/app/services/generales.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-adminviajes',
  templateUrl: './adminviajes.component.html',
  styleUrls: ['./adminviajes.component.css'],
})
export class AdminviajesComponent {
  menu: number = 1;
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
  ) {}

  onSubmit() {
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
            this.form.viajes = this.Vuelos;
            this.form.usuario = this.Hoteles;
            console.log(this.form);

            this.serviciosgenerales
              .creardatos('viajes', this.form)
              .subscribe((result) => (this.datos = result));
            this.menu = 0;
          });
      });
  }
  mostrarmenu(numero: any) {
    this.menu = numero;
  }

  buscaviaje() {
    this.serviciosgenerales
      .retornadato('viajes', this.id)
      .subscribe((result) => (this.datos = result));
    this.menu = 1;
  }

  borraviaje() {
    this.serviciosgenerales
      .deletedatos('viajes', this.id)
      .subscribe((result) => (this.datos = result));
    this.menu = 1;
  }
}
