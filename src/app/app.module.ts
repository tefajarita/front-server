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
import { EmployerComponent } from './employer/employer.component';
import { EmployerManageJobsComponent } from './employer/employer-manage-jobs/employer-manage-jobs.component';
import { EmployerPackageComponent } from './employer/employer-package/employer-package.component';
import { EmployerPostNewComponent } from './employer/employer-post-new/employer-post-new.component';
import { EmployerProfileComponent } from './employer/employer-profile/employer-profile.component';
import { EmployerResumeComponent } from './employer/employer-resume/employer-resume.component';
import { EmployerTransactionsComponent } from './employer/employer-transactions/employer-transactions.component';
import { EmployerJobAlertComponent } from './employer/employer-job-alert/employer-job-alert.component';
import { EmployerChangePasswordComponent } from './employer/employer-change-password/employer-change-password.component';
import { JobListComponent } from './job-list/job-list.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { CandidatesAppliedJobsComponent } from './candidates/candidates-applied-jobs/candidates-applied-jobs.component';
import { CandidatesChangePasswordComponent } from './candidates/candidates-change-password/candidates-change-password.component';
import { CandidatesCoverLetterComponent } from './candidates/candidates-cover-letter/candidates-cover-letter.component';
import { CandidatesDashboardComponent } from './candidates/candidates-dashboard/candidates-dashboard.component';
import { CandidatesJobAlertComponent } from './candidates/candidates-job-alert/candidates-job-alert.component';
import { CandidatesProfileComponent } from './candidates/candidates-profile/candidates-profile.component';
import { CandidatesResumeComponent } from "./candidates/candidates-resume/candidates-resume.component";
import { CandidatesResumeAddNewComponent } from "./candidates/candidates-resume-add-new/candidates-resume-add-new.component";
import { CandidatesShortListComponent } from "./candidates/candidates-shortlist/candidates-shortlist.component";


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
    ContactComponent,
    EmployerComponent,
    EmployerManageJobsComponent,
    EmployerPackageComponent,
    EmployerPostNewComponent,
    EmployerProfileComponent,
    EmployerResumeComponent,
    EmployerTransactionsComponent,
    EmployerJobAlertComponent,
    EmployerChangePasswordComponent,
    JobListComponent,
    CandidatesComponent,
    CandidatesAppliedJobsComponent,
    CandidatesChangePasswordComponent,
    CandidatesCoverLetterComponent,
    CandidatesCoverLetterComponent,
    CandidatesDashboardComponent,
    CandidatesJobAlertComponent,
    CandidatesProfileComponent,
    CandidatesResumeComponent,
    CandidatesResumeAddNewComponent,
    CandidatesShortListComponent,
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
