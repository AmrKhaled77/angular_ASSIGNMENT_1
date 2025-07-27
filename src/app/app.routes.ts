import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';

import { Contact } from './components/contact/contact';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [


{path:"home", component:Home},
{path:"about",component:About},
{path:"portofolio",component:Portfolio},
{path:"contact",component:Contact},
{path:"",component:Home},
{path:"**",component:NotFound},



];
