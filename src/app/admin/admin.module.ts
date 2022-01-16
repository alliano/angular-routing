import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DatabaseComponent } from './database/database.component';

const routrs: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashbord',
        component:DashbordComponent
      },
      {
        path: 'database',
        component:DatabaseComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    DashbordComponent,
    DatabaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routrs)
  ],

})
 
export class AdminModule implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
