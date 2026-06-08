import { Routes } from '@angular/router';
import { Contact } from './modules/contact/contact';
import { Help } from './modules/help/help';
import { Home } from './modules/home/home';
import { About } from './modules/about/about';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'help',
    component: Help
  },
  {
    path: 'about',
    component: About
  },
];
