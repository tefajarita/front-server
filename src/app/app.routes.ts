import {  Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
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
import { Component } from '@angular/core';


const appRoutes: Routes = [
    {path: 'login' , component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'employer', component: EmployerComponent},
    {path: 'employer-manage-jobs', component: EmployerManageJobsComponent},
    {path: 'employer-package', component: EmployerPackageComponent},
    {path: 'employer-post-new', component: EmployerPostNewComponent},
    {path: 'employer-profile', component: EmployerProfileComponent},
    {path: 'employer-resume', component: EmployerResumeComponent},
    {path: 'employer-transactions', component: EmployerTransactionsComponent},
    {path: 'employer-job-alert', component: EmployerJobAlertComponent},
    {path: 'employer-change-password', component: EmployerChangePasswordComponent},
    {path: 'candidates', component: CandidatesComponent},
    {path: 'candidates-applied-jobs', component: CandidatesAppliedJobsComponent},
    {path: 'candidates-change-password', component: CandidatesChangePasswordComponent},
    {path: 'candidates-cover-letter', component: CandidatesCoverLetterComponent},
    {path: 'candidates-dashboard', component: CandidatesDashboardComponent},
    {path: 'candidates-job-alert', component: CandidatesJobAlertComponent},
    {path: 'candidates-profile', component: CandidatesProfileComponent},
    {path: 'candidates-resume', component: CandidatesResumeComponent},
    {path: 'candidates-resume-add-new', component: CandidatesResumeAddNewComponent},
    {path: 'candidates-shortlist', component: CandidatesShortListComponent},
    {path: 'job-list', component: JobListComponent},
    {path: 'register' , component: RegisterComponent},
    {path: 'contact' , component: ContactComponent},
    {path: '' , redirectTo: '/home', pathMatch: 'full'},
    {path: '**' , component: PagenofoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true} );