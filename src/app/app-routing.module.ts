import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { DashboardListComponent } from './components/dashboard/dashboard-list/dashboard-list.component';
import { DashboardCreateComponent } from './components/dashboard/dashboard-create/dashboard-create.component';
import { DashboardEditComponent } from './components/dashboard/dashboard-edit/dashboard-edit.component';
import { DashboardShowComponent } from './components/dashboard/dashboard-show/dashboard-show.component';
import { BaseComponent } from './components/layout/base/base.component';
import { LayoutDashboardComponent } from './components/layout/layout-dashboard/layout-dashboard.component';
import { WidgetCreateComponent } from './components/widget/widget-create/widget-create.component';
import { DashboardComponent } from './components/dashboard-monitoring/dashboard/dashboard.component';

import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {
    path: 'd',
    component: LayoutDashboardComponent,
    canActivate: [AuthGuard],
    children: [{ path: ':id', component: DashboardComponent }]
  },

  {
    path: '',
    component: BaseComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'dashboard', component: DashboardListComponent, canActivate: [AuthGuard] },
      { path: 'dashboard/create', component: DashboardCreateComponent, canActivate: [AuthGuard] },
      { path: 'dashboard/:id', component: DashboardShowComponent, canActivate: [AuthGuard] },
      { path: 'dashboard/:id/edit', component: DashboardEditComponent, canActivate: [AuthGuard] },
      { path: 'dashboard/:id/widget', component: WidgetCreateComponent, canActivate: [AuthGuard] },
      { path: 'dashboard/:id/widget/:idWidget', component: WidgetCreateComponent, canActivate: [AuthGuard] },
      // { path: '', pathMatch: 'full', redirectTo: '/alpha' },
      { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
      { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
      { path: 'contact', component: ContactComponent },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
