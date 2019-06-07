import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { TdMediaService } from "@covalent/core/media";
import { Observable } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  isLoggedIn$: Observable<boolean>; 
  routes: Object[] = [
    {
      icon: "home",
      route: ".",
      title: "Home"
    },
    {
      icon: "library_books",
      route: ".",
      title: "Documentation"
    },
    {
      icon: "color_lens",
      route: ".",
      title: "Style Guide"
    },
    {
      icon: "view_quilt",
      route: ".",
      title: "Layouts"
    },
    {
      icon: "picture_in_picture",
      route: ".",
      title: "Components & Addons"
    }
  ];
  usermenu: Object[] = [
    {
      icon: "swap_horiz",
      route: ".",
      title: "Switch account"
    },
    {
      icon: "tune",
      route: ".",
      title: "Account settings"
    },
    {
      icon: "exit_to_app",
      route: ".",
      title: "Sign out"
    }
  ];
  navmenu: Object[] = [
    // {
    //   icon: "looks_one",
    //   route: "customer-details",
    //   title: "Customer Details",
    //   description: "Item description"
    // },
    // {
    //   icon: "looks_two",
    //   route: "",
    //   title: "Asset Template",
    //   description: "Item description"
    // }
    // {
    //   icon: "looks_3",
    //   route: "ss-asset-temp",
    //   title: "Small Size Asset Template",
    //   description: "Item description"
    // },
    // {
    //   icon: "looks_4",
    //   route: "ms-asset-temp",
    //   title: "Medium Size Asset Template",
    //   description: "Item description"
    // },
    // {
    //   icon: "looks_5",
    //   route: "ls-asset-temp",
    //   title: "Large Size Asset Template",
    //   description: "Item description"
    // }
  ];

  constructor(public media: TdMediaService,private authService: AuthService, private _router: Router) {}

  ngOnInit() {
    this._router.navigate(['/customer-details'])
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }


  logout(){
    localStorage.removeItem("isLoggedIn");
    this._router.navigate(['/'])
  }
}
