import { Routes } from '@angular/router';
import { APP_ROUTES_NAMES } from './app.routes.names';
//Public components
import { LoginComponent } from '../public/login/login.component';
import { MemoryMarvelComponent } from '../public/memory-marvel/memory-marvel.component';
import { ResumeComponent } from '../public/resume/resume.component';
export const APP_ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: APP_ROUTES_NAMES.LOGIN,
    component: LoginComponent
  },
  {
    path: APP_ROUTES_NAMES.GAME,
    component: MemoryMarvelComponent
  },
  {
    path: APP_ROUTES_NAMES.RESUME,
    component: ResumeComponent
  }
]