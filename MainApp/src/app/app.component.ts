import { Component, ViewChild } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Footer } from 'cbre-product-footer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Product-Management';

  ngOnInit(){
    ReactDOM.render(React.createElement(Footer), document.getElementById("footer-container"));

  }
}
