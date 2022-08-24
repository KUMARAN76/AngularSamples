import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTMLLearningComponent } from './htmllearning/htmllearning.component';
import { RouterModule } from '@angular/router';
import { CsslearningComponent } from './csslearning/csslearning.component';
import { BootstraplearningComponent } from './bootstraplearning/bootstraplearning.component';

@NgModule({
  declarations: [
    AppComponent,
    HTMLLearningComponent,
    CsslearningComponent,
    BootstraplearningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot
      ([
        { path:'html', component: HTMLLearningComponent },
        { path:'css', component: CsslearningComponent},
        { path:'bootstrap', component: BootstraplearningComponent },

      ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
