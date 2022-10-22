import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MyserviceService} from './myservice.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColouringDirective } from './colouring.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColouringDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
