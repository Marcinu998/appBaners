import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  width = 600;
  height = 500;
  color1 = 'red';
  color2 = 'yellow';
  percentColor1 = 0;
  percentColor2 = 100;
  fontSize = 52;

  layout = {
    horizontal: false,
    horizontalRev: false,
    vertical: false,
    verticalRev: false,
  };

  colors = [
    'red',
    'purple',
    'blue',
    'green',
    'yellow',
    'brown',
    'grey',
    'black',
  ];

  // tslint:disable-next-line: typedef
  getBannerStyles() {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`,
      backgroundImage: `linear-gradient(to bottom, ${this.color1} ${this.percentColor1}%, ${this.color2} ${this.percentColor2}%)`,
    };
  }

  // tslint:disable-next-line: typedef
  setLayout(selectedLayout: string) {
    Object.keys(this.layout).forEach(key => (this.layout[key] = false));
    this.layout[selectedLayout] = true;
  }

  // tslint:disable-next-line: typedef
  saveImage(element: HTMLDivElement) {
    domtoimage.toBlob(element).then(blob => saveAs(blob));
  }
}
