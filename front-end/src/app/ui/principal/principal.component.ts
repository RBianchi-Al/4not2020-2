import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

    nome = 'AGORA VAI' //publico é subtendido, coloca apenas se for privado
  constructor() { }

  ngOnInit(): void {
  }

}
