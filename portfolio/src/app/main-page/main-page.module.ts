import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show/show.component';
import { ProjetsComponent } from './projets/projets.component';
import { Routes, RouterModule } from '@angular/router';
import { ShowProjetComponent } from './show-projet/show-projet.component';
import { JobsDirective } from '../jobs.directive';

const routesProjets: Routes = [
  { path: '', redirectTo: '/show', pathMatch: "full" },
  { path: 'show', component: ShowComponent},
  { path: 'projets', component: ProjetsComponent },
  { path: 'show-projet/:id', component: ShowProjetComponent}
];

@NgModule({
  declarations: [ShowComponent, ProjetsComponent, ShowProjetComponent, JobsDirective],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routesProjets)
  ]
})
export class MainPageModule { }
