import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//
import { FormsModule, } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldCustomInputComponent } from './form-formly/form-formly.component';

//

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      types: [
        { name: 'custom', component: FormlyFieldCustomInputComponent, wrappers: ['form-field'] },
      ],
    }),
  ],
  declarations: [
    AppComponent,
    FormlyFieldCustomInputComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
