import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { RelazioneComponent } from './relazione/relazione.component';
import { ChartComponent } from './chart/chart.component';



@NgModule({
  declarations: [
    AppComponent,
    RelazioneComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
