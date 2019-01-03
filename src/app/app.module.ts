import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared';
import { HomeModule } from './home/home.module';
import { UserService } from './user/services/user.service';
import { UserGuard } from './user/services/user.guard';
import { TokeninterceptorService } from './user/services/tokeninterceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    UserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [ UserService, UserGuard,
  {
    provide : HTTP_INTERCEPTORS,
    useClass: TokeninterceptorService,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
