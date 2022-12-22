
import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginsComponent } from 'src/app/logins/logins.component';
import { UsuarioComponent } from 'src/app/logins/usuario/usuario.component';
import { ReservasService } from 'src/app/services/reservas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-data-cards',
  templateUrl: './data-cards.component.html',
  styleUrls: ['./data-cards.component.css']
})
export class DataCardsComponent implements OnInit {
    @Input() dataChollos:any;
    @Input() isReserva: any;
    @Input() reservaId: any;

    @Output() cargarReservas = new EventEmitter<any>();

    constructor(private reservaService: ReservasService, public usuarioService: UsuariosService, public tokenService: TokenStorageService,
      public dialog: MatDialog,){}


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
          Swal.fire({
            icon: 'success',
            title: 'Reserva completada correctamente',
            showConfirmButton: false,
            timer: 1500
          })

        });
      });



    }

    eliminarReserva(){



      Swal.fire({
        title: '¿Quieres eliminar la reserva?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'cancelar',
        confirmButtonText: 'Eliminar la reserva'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'actualizado!',
            'Su perfil ha sido actualizado',
            'success'
          )
          this.reservaService.eliminarReserva(this.reservaId).subscribe(data=>{
            this.cargarReservas.emit();
          })

        }


      })
    }

    openDialog(): void {

      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "100%"
      dialogConfig.enterAnimationDuration = "400ms";
      dialogConfig.exitAnimationDuration = "1200ms";

      this.dialog.open(LoginsComponent);
    }

}
