import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReal,   IRequest, IHistory } from './Interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private readonly _login = 'http://104.211.60.175/request_API/public/api/login';
  private _trial = 'assets/trial.json'
  private readonly _register = 'http://104.211.60.175/request_API/public/api/register';
  private readonly _request = 'http://104.211.60.175/request_API/public/api/request_ride';
  private readonly _history =  'http://104.211.60.175/request_API/public/api/trip_history'
  riderid = localStorage.getItem('id');
  
private readonly _HUl = " http://104.211.60.175/request_API/public/api/new_trip_s";
headers = new HttpHeaders().set('Content-Type', 'application/json')
.set('Accept', 'application/json')
.set('responseType', 'text')
.set('Access-Control-Allow-Origin', '*');




  constructor(private http: HttpClient) { }


  

  login(data: any) {
    return this.http.post(this._login, JSON.stringify(data),({ headers: this.headers }));
    }


    Registor(data: any){
      // data['appuser_id'] = this.riderid;
      console.log(data);
      return this.http.post(this._register, JSON.stringify(data),({headers: this.headers}));
    }

    Request(data:any){
      console.log(data);
      return this.http.post(this._request, JSON.stringify(data), ({headers: this.headers}));
    }

   getNrequest(): Observable<IRequest[]>{
     return this.http.get<IRequest[]>(`${this._HUl}/${this.riderid}`);
   }  

  getHistory(): Observable<IHistory[]>{
    
    return this.http.get<IHistory[]>(`${this._history}/${this.riderid}`);
  }


}
