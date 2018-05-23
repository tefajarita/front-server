import {  Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';

const appRoutes: Routes = [
    {path: 'login' , component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'register' , component: RegisterComponent},
    {path: 'contact' , component: ContactComponent},
    {path: '' , redirectTo: '/404', pathMatch: 'full'},
    {path: '**' , component: PagenofoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true} );