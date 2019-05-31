import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatTooltipModule, MatToolbarModule, MatSnackBarModule, MatTabsModule, MatButtonToggleModule, MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatDialogModule, MatRippleModule, MatRadioModule, MatGridListModule, MatSliderModule, MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';

import { CovalentMessageModule } from "@covalent/core/message";

import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';

import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentMediaModule } from '@covalent/core/media';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,  
    LayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatRippleModule,
    MatRadioModule,
    MatGridListModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,

    

    FormsModule,
    CovalentMessageModule,



    CovalentMediaModule,



    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    // RecaptchaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }