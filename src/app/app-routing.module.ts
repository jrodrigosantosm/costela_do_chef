import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkBioComponent } from './components/link-bio/link-bio.component';

const routes: Routes = [
  { path: 'link', component: LinkBioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
