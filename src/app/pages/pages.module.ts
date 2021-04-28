import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementComponent } from './management/management.component';


const routes: Routes = [
  {
    path: '02_1',
    component: ManagementComponent,
  }
];

@NgModule({
  declarations: [ManagementComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
})
export class PagesModule {}
