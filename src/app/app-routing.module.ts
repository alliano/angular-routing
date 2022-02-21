import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BarangComponent } from './barang/barang.component';
import { ContacComponent } from './contac/contac.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contac',
    component:ContacComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'reg',
    component:RegisterComponent
  },
  {
    path: "message",
    component:MessageComponent
  },
  {
    path: 'barang',
    component:BarangComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
