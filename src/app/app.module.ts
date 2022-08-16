import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTMLLearningComponent } from './htmllearning/htmllearning.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HTMLLearningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot
      ([
        {path:'html', component: HTMLLearningComponent},
      ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
