import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { FormComponent } from './core/form/form.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'tournament', component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
