import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './components/show/show.component';
import { ProjetsComponent } from './components/projets/projets.component';

const routes : Routes = [
  { path: '', component : ShowComponent},
  { path: 'projets', component : ProjetsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    ProjetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
