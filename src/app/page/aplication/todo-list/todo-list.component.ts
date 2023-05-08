import { Component, OnInit } from '@angular/core';
import { thresholdScott } from 'd3';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  tableColums: string[] = ['nombres', 'apellidos', 'posicion', 'edad','acciones'];
  listJugadores: any[] = [
    {
      id:1,
      nombres:'jhona',
      apellidos:'lawliet',
      posicion:'delantero',
      edad:20,
    },
    {
      id:2,
      nombres:'jhona',
      apellidos:'lawliet',
      posicion:'delantero',
      edad:21,
    }, {
      id:3,
      nombres:'jhona',
      apellidos:'lawliet',
      posicion:'delantero',
      edad:22,
    },
    {
      id:4,
      nombres:'jhona',
      apellidos:'lawliet',
      posicion:'delantero',
      edad:23,
    },
    {
      id:5,
      nombres:'jhona',
      apellidos:'lawliet',
      posicion:'delantero',
      edad:24,
    },
    {
      id:6,
      nombres:'jhona',
      apellidos:'lawliet',
      posicion:'delantero',
      edad:25,
    }
  ]
  foods: any[] = [
    {value: 1, viewValue: 'Delantero'},
    {value: 2, viewValue: 'Arquero'},
    {value: 3, viewValue: 'Defensa'},
  ];

  selection = 0;

  constructor() { }

  ngOnInit(): void {
  }


  selectRow(jugadorId$: number) : void{
    this.selection = jugadorId$;
  }


}
