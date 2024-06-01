import {Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/form/form.component';

export const routes = [
    {path: 'home', component: HomeComponent},
    {path: 'list', component: ListComponent},
    {path: 'form', component: FormComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

