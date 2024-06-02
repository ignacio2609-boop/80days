import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  ciudades: any []= [];
  addCiudad(ciudad: any){
    this.ciudades.push(ciudad);
  }
}
