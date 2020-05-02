import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  @Output() public doctorName = new EventEmitter<String>();
  @Output('favouriteDoctor') public doctorName2 = new EventEmitter<String>();
  @ViewChild('newDoctorName3', { static: true }) doctorName3 : ElementRef;
  // view child make Local reference(newDoctorName3) as ElementRef

  public newDoctorName;

  constructor() { 
    this.newDoctorName = "mohan";
  }

  ngOnInit() {
  }

  onChangeDoctorName() {
    this.doctorName.emit(this.newDoctorName);
  }

  onChangeDoctorName2(newDoctorName2: HTMLInputElement) {
    console.log(newDoctorName2);  // get the value in the form of html element
    this.doctorName2.emit(newDoctorName2.value);
  }

  onChangeDoctorName3() {
    console.log(this.doctorName3);    // get the value in the form of native element
    this.doctorName2.emit(this.doctorName3.nativeElement.value);
  }

}
