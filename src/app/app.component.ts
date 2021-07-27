import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'effective-travels';

    darkmode(){
      var element=document.getElementById('content');
      element?.classList.toggle('dark')
    }

}
