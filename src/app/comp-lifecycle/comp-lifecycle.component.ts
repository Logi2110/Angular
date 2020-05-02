import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, 
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, 
  ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-comp-lifecycle',
  templateUrl: './comp-lifecycle.component.html',
  styleUrls: ['./comp-lifecycle.component.css']
})
export class CompLifecycleComponent implements 
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() public mitVariableInput;
  @Output() public componentVariableOutput = new EventEmitter<String>();
  @ViewChild('viewChildRef', { static: true }) viewChildVariable : ElementRef;

  public componentVariable;
  public doctorName = 'mohan';

  constructor() { 
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchanges called');
    // console.log(changes);
  }

  ngOnInit() {
    // console.log(this.mitVariableInput);
    console.log(this.viewChildVariable.nativeElement.textContent)
    console.log('ngOnInit called')
  }

  ngDoCheck() {
    console.log('ngDoCheck called')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called')
    console.log(this.viewChildVariable.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called')
  }

  onChangeComponentVariable() {
    // this.componentVariableOutput.emit(this.componentVariable);
  }

  onChangeviewChildVariable() {
    this.componentVariableOutput.emit(this.viewChildVariable.nativeElement.value);
  }

}
