import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { AppHttpInterceptor } from './HttpInterceptors/AppHttpInterceptor';
import { AuthServiceService } from './servicios/auth-service.service';


@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule    
  ],
  providers: [AuthServiceService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass:AppHttpInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
