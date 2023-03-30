import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ThemesComponent } from './components/themes/themes.component';
import { ThemeComponent } from './components/themes/theme/theme.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'themes/:theme', component: ThemesComponent, children:[
      {path: ':id', component: ThemeComponent}
  ]},
  { path: 'about', component: AboutComponent },
  { path:'not-found', component: ErrorPageComponent, data:{message: 'Page not found'}},
  { path: '**', redirectTo:'/not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
