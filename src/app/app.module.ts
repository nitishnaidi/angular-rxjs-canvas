import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas.component';
import { SketchpadComponent } from './sketchpad/sketchpad.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CanvasComponent, SketchpadComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
