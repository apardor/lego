import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ThemesComponent } from './components/themes/themes.component';
import { ThemeComponent } from './components/themes/theme/theme.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: ':theme', component: ThemesComponent, children:[
    { path: ':id', component: ThemeComponent },
  ] }, 
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
