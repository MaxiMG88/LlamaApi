import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs/Rx';
import {device} from '../device/device';

@Injectable()
export class AuthServiceService {

  url='http://loyola.com.ar:8082/api/reports/route?deviceId=5&from=2018-02-27T00:30:00Z&to=2018-02-27T23:30:00Z';

  constructor(private httpClient: HttpClient) { }

  getDevice(deviceId:string,from:string,to:string):Observable<device[]>{

    const params = new HttpParams()
              .set('deviceId',deviceId)
              .set('from',from)
              .set('to',to);

    return this.httpClient.get<device[]>(this.url + 'reports/'+'/route',{params});




  }
}
