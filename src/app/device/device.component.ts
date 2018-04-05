import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../servicios/auth-service.service';
import { device} from '../device/device';
import { Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  deviceId='5';
  from='2018-02-27T00:30:00Z';
  to='2018-02-27T23:30:00Z';

  loading = false;
  errorMessage = '';

  constructor(private authService:AuthServiceService) { }

  devices : device[];

  public getDevice(){
    this.loading = true;
    this.errorMessage = '';
    this.authService.getDevice(this.deviceId,this.from,this.to)
            .subscribe((response)=> {this.devices=response;},
            (error)=>{this.errorMessage = error.message;this.loading=false;},
            ()=> {this.loading = false;})
  }

  ngOnInit() {
  }

}
