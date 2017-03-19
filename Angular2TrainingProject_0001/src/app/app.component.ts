import { Component } from '@angular/core';
import { AuthorDataProviderService } from './dataProviders/author-data-provider.service';
import { SomeNewComponentComponent } from './someComponents/some-new-component/some-new-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthorDataProviderService],
  declarations: []
})
export class AppComponent {

  constructor(public authorDataProviderService:AuthorDataProviderService) { }

  title:string = 'app works!';
  authorName:string = "Alyx";
  authorAge:number = 1235;

  authorHobbies:string[] = ["SnowBoarding", "MountClimbing", "etc"];

  buttonClicked:boolean = false;

  clicked():void {
    this.buttonClicked = !this.buttonClicked;
  }
}
