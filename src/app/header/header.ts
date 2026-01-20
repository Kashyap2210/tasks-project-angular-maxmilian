import { Component } from '@angular/core';

@Component({
  // selector should always have 2 words seperated by -.
  // convention is to name the tag as app-<your-component-name>
  selector: 'app-header',
  imports: [],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
