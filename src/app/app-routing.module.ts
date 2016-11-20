import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchboxComponent } from './searchbox/searchbox.component';

const routes: Routes = [
  {path: '',        redirectTo: '/searchbox', pathMatch: 'full' },
  {path: 'searchbox',    component: SearchboxComponent},
  {path: '**',      redirectTo: '/searchbox' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2RestAppRoutingModule { }
