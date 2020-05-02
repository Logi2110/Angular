import { Component } from '@angular/core';    // to know 

@Component({           
  selector: 'app-root',
  templateUrl: './app.component.html',  // instead of creating external file for this component, you can use inline template as well
  styleUrls: ['./app.component.css']    // instead of creating external file for this component, you can use inline styling as well
})
export class AppComponent {     // export - it accessible by other components too
}

// decorator always start at @ - it creates special features compared to normal class
// @Component => it parse this file and compiles to javascript 
