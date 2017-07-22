import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from "ngx-bootstrap";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  constructor() { }

  selectTab(tab_id: number) {
    this.staticTabs.tabs[tab_id].active = true;
  }

  payment() {
    this.staticTabs.tabs[1].disabled = false;
    this.staticTabs.tabs[1].active = true;
  }
  ngOnInit() {
  }

}
