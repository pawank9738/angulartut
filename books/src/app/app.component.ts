import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books';
  navPageSelected = 'Recipe'

  onNaveSelected(nav){
    //console.log(nav.Pagename)
    this.navPageSelected = nav.Pagename
  }

}
