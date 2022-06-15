// "import" is used to import elements we need
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormationComponent } from './formation/formation.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

// ROUTING
const routes: Routes = [
  // the first property is the route's name and the second is the associated component
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'presentation',
    component: PresentationComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'formation',
    component: FormationComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
