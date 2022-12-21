
import { Component, Input, OnInit  } from '@angular/core';
import { UsuarioComponent } from 'src/app/logins/usuario/usuario.component';
import { ReservasService } from 'src/app/services/reservas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-data-cards',
  templateUrl: './data-cards.component.html',
  styleUrls: ['./data-cards.component.css']
})
export class DataCardsComponent implements OnInit {
    @Input() dataChollos:any;
    @Input() isReserva: any;
    @Input() reservaId: any;

    constructor(private reservaService: ReservasService, private usuarioService: UsuariosService){}


    ngOnInit(): void {

      if(this.isReserva == null){
        this.isReserva = false;
      }

    }

    reservar(idChollo: number){

      const usuario = {id: 0}

      this.usuarioService.retornarUsuario().subscribe(data=>{
        console.log(data);
        usuario.id = data.id;

        const chollo = {id_chollo: idChollo}

        const reserva = {
          usuario: usuario,
          chollo: chollo
        }
        console.log(reserva);
        this.reservaService.hacerReserva(reserva).subscribe(data =>{
          console.log(data);

        });
      });



    }

    eliminarReserva(){
      this.reservaService.eliminarReserva(this.reservaId).subscribe(data=>{
      })
    }
}
