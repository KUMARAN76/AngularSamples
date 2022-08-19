import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTMLLearningComponent } from './htmllearning/htmllearning.component';
import { RouterModule } from '@angular/router';
import { CsslearningComponent } from './csslearning/csslearning.component';

@NgModule({
  declarations: [
    AppComponent,
    HTMLLearningComponent,
    CsslearningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot
      ([
        { path:'html', component: HTMLLearningComponent },
        { path:'css', component: CsslearningComponent}
      ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
