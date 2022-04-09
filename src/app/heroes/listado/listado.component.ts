import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  count:number = 0;

  eliminados: string[] = [];

  heroes: string[] = ['Spiderman', 'ironman', 'superman', 'batman'];

  borrandoHeroe(i:number) {
    console.log(this.heroes);
    let borrado = this.heroes.shift() || '';
    ///console.log(borrado?.toString);
    this.eliminados.push(borrado);
    this.count = this.eliminados.length;
  }
}
