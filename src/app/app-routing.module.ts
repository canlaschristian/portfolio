import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'about', 
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) 
  },
  { 
    path: 'skills', 
    loadChildren: () => import('./features/skills/skills.module').then(m => m.SkillsModule) 
  },
  { 
    path: 'projects', 
    loadChildren: () => import('./features/projects/projects.module').then(m => m.ProjectsModule) 
  },
  { 
    path: 'testimonials', 
    loadChildren: () => import('./features/testimonials/testimonials.module').then(m => m.TestimonialsModule) 
  },
  { 
    path: 'contact', 
    loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule) 
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }