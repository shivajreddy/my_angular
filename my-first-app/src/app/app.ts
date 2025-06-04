import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}
  `,
})
export class User {
  username = 'youngTech';
}


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'my-first-app';
  city = 'San Fransisco';
}
