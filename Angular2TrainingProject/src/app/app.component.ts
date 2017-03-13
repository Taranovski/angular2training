import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'app works!';
  authorName:string = "Alyx";
  authorAge:number = 1235;

  authorHobbies:string[] = ["SnowBoarding", "MountClimbing", "etc"];
}
