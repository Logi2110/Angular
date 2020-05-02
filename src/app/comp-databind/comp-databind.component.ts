import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp-databind',
  templateUrl: './comp-databind.component.html',
  styleUrls: ['./comp-databind.component.css']
})
export class CompDatabindComponent implements OnInit {
  @Input() public logeshData;
  @Input('nameData') public name;    // using alias

  constructor() {  // input value is undefined in constructor
    // console.log(this.logeshData);
  }
  ngOnInit() {
    // console.log(this.logeshData);  // got input value
    // console.log(this.name);
  }

}
