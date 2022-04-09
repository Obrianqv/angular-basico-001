
import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <b>{{ title }}</b>
    <br><br>
    <hr>
    <button (click)=" acumular(1, 1) "> + 1</button> -- <button (click)="acumular(-1, 0)"> - 1</button>
    <hr>
    <ul>
    <li><span>{{ num }}</span></li>
    </ul>
    `,
    styleUrls: ['./../../app.component.css']
})
export class ContadorComponent {
    title: string = 'Contador';

    num: number = 0;

    base: number = 5

    acumular(valor:number, tipo:number) {
        if (tipo == 1) {
            this.num = this.num+this.base;
        } else {
            this.num = this.num-this.base;
        }
    }
}