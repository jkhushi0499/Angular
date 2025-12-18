import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Contact } from './contact/contact';
import { Aboutus } from './aboutus/aboutus';

export const routes: Routes = [
    {path:"header",component: Header},
    {path:"contact",component:Contact},
    {path:"aboutus",component:Aboutus}
];
