import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public history = [];

  constructor(private _dataservice: DataServiceService) {}

  ngOnInit(){
    
    this._dataservice.getHistory()
    .subscribe(data => this.history= data)
     
  }


dofresh(event){
  this._dataservice.getHistory()
  .subscribe(data => this.history = data);

  
  setTimeout(()=>{
    event.target.complete();
    },2000)

  }
}

