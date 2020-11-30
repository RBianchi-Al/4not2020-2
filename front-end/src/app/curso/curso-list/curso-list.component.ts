import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {
   
    cursos : any = []

   //colunas exibidas na tabela
    displayedColumns: string[] = ['nome', 'carga_horaria', 'nivel', 'valor_curso', 'editar', 'excluir']

  constructor(private cursoSrv : CursoService) { }

  async ngOnInit() {
      this.cursos = await this.cursoSrv.listar()
      console.log(this.cursos)
    
  }
  excluir(id: string){
      if(confirm('Deseja realmente excluir?'))
      alert ('Vai excluir o registro com o id' + id)
  }

}
