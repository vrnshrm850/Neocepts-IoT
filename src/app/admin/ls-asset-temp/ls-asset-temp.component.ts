import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ls-asset-temp",
  templateUrl: "./ls-asset-temp.component.html",
  styleUrls: ["./ls-asset-temp.component.scss"]
})
export class LsAssetTempComponent implements OnInit {
  assetTemplate: any = {
    assetTemplateId: "",
    lightSensor: "",
    pirSensor: "",
    temperatureSensor: "",
    doorSensor: "",
    levelSensor: ""
  };

  constructor() {}

  ngOnInit() {}
}
