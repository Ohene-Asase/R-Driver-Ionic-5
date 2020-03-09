import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder } from '@angular/forms';

import { error } from 'util';
import {ToastController} from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  signedin = this.formbuilder.group({
    email: '',
    password: ''
  })
  

  constructor(private router:Router,
    private _dataservice: DataServiceService,
    private formbuilder: FormBuilder,
    private http: HttpClient,
    public toastController: ToastController) { }

  ngOnInit() {
  }
  Login(FormData: any){
    this._dataservice.login(FormData).subscribe(
      
     (res: any) => {
       if (res) {
         this.router.navigate(['../tabs/tab1']);
        /* if(res.data.role_id==2){
           this.router.navigate(['../driver/tab4']);
         }  */
   
         localStorage.setItem('userData',res.data.token) 
         localStorage.setItem('id', res.data.id); 
         console.log(res.data.token);
         console.log(res.data.id);
         console.log(res.data.role_id)
         this.resetForm()
         
   }
     },
     async (error) => {
       console.log('error occured:', error);
     
      if(error.status === 401){
     const toast = await this.toastController.create({
      message: 'Invalid email or password',
      duration: 3000,
      color: 'danger',
      position: 'top',
      
     });
     toast.present();
   }else if (error){
     const toast = await this.toastController.create ({
       message: 'Server error',
       duration: 3000,
       color: 'danger',
       position: 'top',
   
     });
     toast.present();
   
   }
     },
   
   
    )
      
      
   }
   
   logout(){
     localStorage.removeItem('userData');
     this.router.navigate(['/home']);
   }
   
   
   
   resetForm(){
     this.signedin.reset();
   }

}
