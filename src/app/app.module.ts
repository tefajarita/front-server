import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// rutas
import { APP_ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ManagejobsComponent } from './pages/managejobs/managejobs.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { ResumesComponent } from './pages/resumes/resumes.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './contact/contact.component';

//Importaciones de formulario
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagenofoundComponent,
    DasboardComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    ProgressComponent,
    Graficas1Component,
    ProfileComponent,
    ManagejobsComponent,
    TransactionsComponent,
    ResumesComponent,
    SidebarComponent,
    BuscadorComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
