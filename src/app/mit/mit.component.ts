import { Component } from '@angular/core';


@Component({
    selector: 'app-mit',
    templateUrl: './mit.component.html',
    styleUrls: ['./mit.component.css']
})

export class MitComponent {
    public students;
    public name = 'logesh';
    public lastName = 'waran';
    
    public studentProfile = true;
    public showProfile;

    public lifeCycleCount = 1;
    public mitVariable = 'mit';
    constructor() {
        this.students = {
            ID: '5512',
            Name: 'Logesh',
            Gender: 'M',
            DOB: '1994-10-21',
            Blood_Group: 'B +ive',
            Caste: 'MBC',
            Mail_ID: 'logesh94@gmail.com',
            Address: 'Chennai, Tamilnadu',
            Fee: '7500',
            Dept_no: '1'
        }
        // console.log(this.students);
        setTimeout(() => {
            this.studentProfile = false;
        }, 2000)
    }

    getStudentsName() {
        return this.students.Name;
    }

    onGetStudentProfile() {
        this.showProfile = true;
    }

    onUpdateEmail(event: Event) {
        console.log(event);
        this.students.Mail_ID = (<HTMLInputElement>event.target).value;
        // this.students.Mail_ID = event.target.value;  event type is Event that's why give error
    }

    onUpdateAddress(event: any) {
        this.students.Address = event.target.value; // event type is any so didnt throw error
    }

    getDoctorName(newdoctorName) {
        console.log(newdoctorName);
    }

    getDoctorName2(newdoctorName) {
        console.log(newdoctorName);
    }
    
    getDoctorName3(newdoctorName) {
        console.log(newdoctorName);
    }


}