import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  id:any='';
  accordian(ids:any){
    if(this.id == ids){
      this.id = '';
    }else{
      this.id = ids;
    }
  }

}
