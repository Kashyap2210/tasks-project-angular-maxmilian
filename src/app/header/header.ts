import { Component } from '@angular/core';

@Component({
  // selector should always have 2 words seperated by -.
  // convention is to name the tag as app-<your-component-name>
  selector: 'app-header',
  standalone: false, // if we set standalone to false & migrate the component from imports array in AppModule to declarations array our migraition is done.
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {}
