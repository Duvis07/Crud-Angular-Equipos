import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { EquipoInterface } from '../../interfaces/equipo';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  //Variables
  ListarEquipos: EquipoInterface[] = [];

  constructor(private equipoService: EquipoService, private router: Router) {}

  ngOnInit(): void {
    this.listarEquipos();
  }

  listarEquipos() {
    this.equipoService.getEquipos().subscribe(
      (res) => {
        this.ListarEquipos = <any>res;
      },
      (err) => console.error(err)
    );
  }

  eliminarEquipo(id: string) {
    this.equipoService.deleteEquipo(id).subscribe(
      (res) => {
        Swal.fire({
          title: 'Good',
          text: 'Equipo eliminado',
          icon: 'warning',
          confirmButtonText: 'Cool',
        });

        this.listarEquipos();
      },
      (err) => console.error(err)
    );
  }

  modificarEquipo(id: string) {
    this.router.navigate(['/edit/' + id]);
  }
}
