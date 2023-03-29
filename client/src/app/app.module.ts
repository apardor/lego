import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ThemesComponent } from './components/themes/themes.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThemeComponent } from './components/themes/theme/theme.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AboutComponent } from './components/about/about.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    ThemesComponent,
    NavbarComponent,
    ThemeComponent,
    ErrorPageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
