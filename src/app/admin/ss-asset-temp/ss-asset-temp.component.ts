import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ss-asset-temp",
  templateUrl: "./ss-asset-temp.component.html",
  styleUrls: ["./ss-asset-temp.component.scss"]
})
export class SsAssetTempComponent implements OnInit {
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

  // if I code this as "this.result = +this.number1 + +this.number2;" it is working.
}
