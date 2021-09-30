import { Component, OnInit,Input,OnChanges, OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnDestroy{

  @Input()
  channelName : string = "";

  counter : number = 0;
  interval : any ;
  
  constructor() 
  {
      console.log("Child constructor is called:");
  }

  ngOnInit(): void 
  {
      console.log("Child ngOnInit is called:");

      // this.interval = setInterval(() => {
      //     this.counter = this.counter + 1;
      //     console.log(this.counter);
      // },1000)
  }
    

  ngOnDestroy()
  {
      clearInterval(this.interval);
      console.log("child Destory is called:");
  }  

  ngOnChanges(changes : SimpleChanges)
  {
    console.log(changes);
      console.log("Child onChanges method is called:");
  }
}
