import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { UserComponent } from './components/user/user.component';
import { ControlBoxService } from './services/control-box.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa FormsModule o ReactiveFormsModule


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListUsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ControlBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
