import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sketchpad',
  templateUrl: './sketchpad.component.html',
  styleUrls: ['./sketchpad.component.css']
})
export class SketchpadComponent implements OnInit {

  private actionType: string = 'text';
  private hideTextArea: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  onActionClick(action: string) {
    console.log('action: ', action);
    if (action === 'text') {
      this.hideTextArea = true;
    } else {
      this.hideTextArea = false;
      this.actionType = action;
    }
  }

}