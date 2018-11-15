import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YelperComponent } from './yelper/yelper.component';

const routes: Routes = [
  {path: '', component: YelperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
