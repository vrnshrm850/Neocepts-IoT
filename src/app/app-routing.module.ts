import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { CustomerDetailsComponent } from "./admin/customer-details/customer-details.component";
import { LayoutComponent } from "./layout/layout.component";
import { SsAssetTempComponent } from "./admin/ss-asset-temp/ss-asset-temp.component";
import { LsAssetTempComponent } from "./admin/ls-asset-temp/ls-asset-temp.component";
import { MsAssetTempComponent } from "./admin/ms-asset-temp/ms-asset-temp.component";
import { AssetTempComponent } from './admin/asset-temp/asset-temp.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "customer-details", component: CustomerDetailsComponent },
  { path: "ss-asset-temp", component: SsAssetTempComponent },
  { path: "ms-asset-temp", component: MsAssetTempComponent },
  { path: "ls-asset-temp", component: LsAssetTempComponent },
  { path: "asset-temp", component: AssetTempComponent },
  { path: "**", component: AssetTempComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
