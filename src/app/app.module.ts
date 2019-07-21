import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { TimeAgoPipe } from 'time-ago-pipe';

import { DashboardService } from './services/dashboard.service';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DashboardListComponent } from './components/dashboard/dashboard-list/dashboard-list.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DashboardCreateComponent } from './components/dashboard/dashboard-create/dashboard-create.component';

import { AuthGuard } from './helpers/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './helpers/interceptor/token.interceptor';
import { ConfirmationDialogComponent } from './components/layout/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './components/layout/confirmation-dialog/confirmation-dialog.service';
import { DashboardEditComponent } from './components/dashboard/dashboard-edit/dashboard-edit.component';
import { DashboardShowComponent } from './components/dashboard/dashboard-show/dashboard-show.component';
import { WidgetCreateComponent } from './components/widget/widget-create/widget-create.component';
import { BaseComponent } from './components/layout/base/base.component';
import { LayoutDashboardComponent } from './components/layout/layout-dashboard/layout-dashboard.component';
import { DashboardComponent } from './components/dashboard-monitoring/dashboard/dashboard.component';
import { SpecificTextComponent } from './components/dashboard-monitoring/widgets/specific-text/specific-text.component';
import { HeaderComponent } from './components/dashboard-monitoring/layout/header/header.component';
import { SslCertificateComponent } from './components/dashboard-monitoring/widgets/ssl-certificate/ssl-certificate.component';

const config: SocketIoConfig = { url: '', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardListComponent,
    NotFoundComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    DashboardCreateComponent,
    ConfirmationDialogComponent,
    DashboardEditComponent,
    DashboardShowComponent,
    WidgetCreateComponent,
    BaseComponent,
    LayoutDashboardComponent,
    DashboardComponent,
    SpecificTextComponent,
    TimeAgoPipe,
    HeaderComponent,
    SslCertificateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    SocketIoModule.forRoot(config)
  ],

  providers: [
    TimeAgoPipe,
    DashboardService,
    UserService,
    ConfirmationDialogService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  entryComponents: [ConfirmationDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
