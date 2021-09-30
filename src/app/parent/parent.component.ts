import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit,OnChanges {

  isChild : boolean = true;
  channelName : string = '';
  constructor() 
  {
      console.log("Parent constructor is called:");
  }

  ngOnInit(): void 
  {
      console.log("Parent ngOnInit is called:");
  }

  toggleChild()
  {
      this.isChild = !this.isChild;
  }

  ngOnChanges()
  {
      console.log("Parent onChanges method is called:");
  }
}
