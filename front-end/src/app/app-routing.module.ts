import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListComponent } from './curso/curso-list/curso-list.component';

const routes: Routes = [
    ///nome das rotas não começam com barra
    {path: 'curso', component: CursoListComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
