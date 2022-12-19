import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  constructor(private equipoService: EquipoService) {}

  ngOnInit(): void {
    this.listarEquipos();
  }

 listarEquipos() {
    this.equipoService.getEquipos().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.error(err)
    );
  }
}
