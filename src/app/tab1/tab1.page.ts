import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { ModalpagePage } from '../modalpage/modalpage.page';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public history:any;

  constructor(private modalCtrl: ModalController,
              private router: Router,
              private _dataservice: DataServiceService){}
                      
  
              ngOnInit(){
                this._dataservice.getNrequest()
                .subscribe(data => this.history = data)
                
              }
           
               
              

  
              async openModal(){

                const modal = await this.modalCtrl.create({
                 component:ModalpagePage,
                 cssClass: 'half-modal',
                 swipeToClose: true
              });
              return await modal.present();
                }
            
               logout(){
              localStorage.removeItem('userData');
              this.router.navigate(['/login']);
            } 

  doRefresh(event){
    this._dataservice.getNrequest()
                .subscribe(data => this.history = data);

                setTimeout(()=>{
                event.target.complete();
                },2000)

  }

}


