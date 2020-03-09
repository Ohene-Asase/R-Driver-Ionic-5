import { Component } from '@angular/core';

import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  history:[];

  constructor(
               private _dataservice: DataServiceService ) {}
 

               
            

}
