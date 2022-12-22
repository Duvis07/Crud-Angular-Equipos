import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EquipoInterface } from '../../interfaces/equipo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css'],
})
export class ModificarComponent implements OnInit {
  equipo: EquipoInterface = {
    id_equipo: '',
    nombre: '',
    descripcion: '',
    logo: '',
  };

  constructor(
    private equipoService: EquipoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id_entrada = <string>this.activatedRoute.snapshot.params['id'];

    if (id_entrada) {
      this.equipoService
        .getEquipo(id_entrada)
        .subscribe((res) => (this.equipo = res[0]));
    }
  }

  modificarEquipo() {
    this.equipoService
      .updateEquipo(this.equipo.id_equipo, this.equipo)
      .subscribe(
        (res) => {
          Swal.fire({
            title: 'Equipo modificado',
            text: 'El equipo se ha modificado correctamente',
            icon: 'success',
            confirmButtonText: 'OK',
          });
        },
        (err) => console.log(err)
      );

    this.router.navigate(['/inicio']);
  }
}
