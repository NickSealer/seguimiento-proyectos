import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './core/auth.guard';


import { RouterModule, Routes } from "@angular/router";
import { MenuComponent } from './menu/menu.component';
import { GoogleChartsModule } from 'angular-google-charts';
// import { TarsComponent } from './tars/tars.component';

import { EstelarComponent } from './estelar/estelar.component';
import { AccordionModule } from 'primeng/accordion';
import { ChartModule } from 'primeng/chart';
import { NormaComponent } from './norma/norma.component';
import { HolcimComponent } from './holcim/holcim.component';
import { KikesComponent } from './kikes/kikes.component';


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  // {path: 'tars', component: TarsComponent},
  {path: 'estelar', component: EstelarComponent, canActivate: [AuthGuard]},
  {path: 'holcim', component: HolcimComponent, canActivate: [AuthGuard]},
  {path: 'kikes', component: KikesComponent, canActivate: [AuthGuard]},
  {path: 'norma', component: NormaComponent, canActivate: [AuthGuard]}



];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    // TarsComponent,
    EstelarComponent,
    NormaComponent,
    HolcimComponent,
    KikesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    GoogleChartsModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule,
    FormsModule,
    AccordionModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
