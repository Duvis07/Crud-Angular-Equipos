import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { Router } from '@angular/router';
import { EquipoInterface } from '../../interfaces/equipo';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  equipo: EquipoInterface = {
    id_equipo: '',
    nombre: '',
    descripcion: '',
    logo: '',
  };

  constructor(private equipoService: EquipoService, private router: Router) {}

  ngOnInit() {}

  agregarEquipo() {
    this.equipoService.addEquipo(this.equipo).subscribe(
      (res) => {
        Swal.fire({
          title: 'Good',
          text: 'Equipo agregado',
          icon: 'success',
          confirmButtonText: 'Cool'
        })

        this.router.navigate(['/inicio']);
      },
      (err) => console.error(err)
    );
  }
}
