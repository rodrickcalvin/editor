import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'management',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/pages.module').then(
            (m) => m.PagesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
