import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ThemeComponent } from './components/theme/theme.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children:[
    { path: ':theme', component: ThemeComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
