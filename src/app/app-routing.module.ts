import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTagComponent } from './basic-tag/basic-tag.component';

const routes: Routes = [
  {
    path: '',
    component: BasicTagComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
