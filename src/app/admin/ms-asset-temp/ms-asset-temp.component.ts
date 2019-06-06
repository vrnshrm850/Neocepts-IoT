import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ms-asset-temp",
  templateUrl: "./ms-asset-temp.component.html",
  styleUrls: ["./ms-asset-temp.component.scss"]
})
export class MsAssetTempComponent implements OnInit {
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
