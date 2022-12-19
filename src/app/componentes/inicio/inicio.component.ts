import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { EquipoInterface } from '../../interfaces/equipo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  //Variables
  ListarEquipos: EquipoInterface[] = [];

  constructor(private equipoService: EquipoService, private router: Router
    ) {}

  ngOnInit(): void {
    this.listarEquipos();
  }

  listarEquipos() {
    this.equipoService.getEquipos().subscribe(
      (res) => {
        console.log(res);
        this.ListarEquipos = <any>res;
      },
      (err) => console.error(err)
    );
  }

  eliminarEquipo(id: string) {

    this.equipoService.deleteEquipo(id).subscribe(
      (res) => {
       alert('Equipo eliminado');
        this.listarEquipos();
      },
      (err) => console.error(err)
    );

    }

    ModificarEquipo(id: string) {
      this.router.navigate(['/editar', id]);

    }



}
