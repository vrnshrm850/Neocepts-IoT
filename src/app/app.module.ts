import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
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
  MatNativeDateModule
} from "@angular/material";

import { MatCardModule } from "@angular/material/card";

import { CovalentMessageModule } from "@covalent/core/message";
import { CovalentLayoutModule } from "@covalent/core/layout";
import { CovalentStepsModule } from "@covalent/core/steps";
import { CovalentHttpModule } from "@covalent/http";
import { CovalentHighlightModule } from "@covalent/highlight";
import { CovalentMarkdownModule } from "@covalent/markdown";
import { CovalentDynamicFormsModule } from "@covalent/dynamic-forms";
import { CovalentMediaModule } from "@covalent/core/media";

import { FormsModule } from "@angular/forms";
import { MatStepperModule } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";

import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LayoutComponent } from "./layout/layout.component";
import { AdminComponent } from "./admin/admin.component";
import { CustomerDetailsComponent } from "./admin/customer-details/customer-details.component";
import { SsAssetTempComponent } from "./admin/ss-asset-temp/ss-asset-temp.component";
import { MsAssetTempComponent } from "./admin/ms-asset-temp/ms-asset-temp.component";
import { LsAssetTempComponent } from "./admin/ls-asset-temp/ls-asset-temp.component";
import { AssetTempComponent } from "./admin/asset-temp/asset-temp.component";
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import {AuthGuard} from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LayoutComponent,
    AdminComponent,
    CustomerDetailsComponent,
    SsAssetTempComponent,
    MsAssetTempComponent,
    LsAssetTempComponent,
    AssetTempComponent,
    HomeLayoutComponent,
    LoginLayoutComponent
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
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,

    CovalentMessageModule,

    CovalentMediaModule,

    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule
    // RecaptchaModule,
  ],
  exports: [MatExpansionModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
export class PizzaPartyAppModule {}
