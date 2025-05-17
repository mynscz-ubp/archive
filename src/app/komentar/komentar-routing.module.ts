import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KomentarPage } from './komentar.page';

const routes: Routes = [
  {
    path: '',
    component: KomentarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KomentarPageRoutingModule {}
