import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicInputComponent } from './topic-input/topic-input.component';

@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule, HttpClientModule, TopicInputComponent, FormsModule ,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
