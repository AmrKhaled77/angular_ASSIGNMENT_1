import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./components/nav-bar/nav-bar";
import { Fotter } from "./components/fotter/fotter";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Fotter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'assignment1';
}
