import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { NavBar } from '../nav-bar/nav-bar';

@Component({
  selector: 'app-header',
  imports: [ NavBar],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
