import {Injectable} from '@angular/core';
import {HttpEvent,HttpHandler,HttpResponse,HttpHeaders,HttpRequest,HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor{

    constructor (){}

   
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({
            headers: req.headers.set('Authorization','Basic' + btoa('maxi:gay'))
        })       
        
        return next.handle(authReq);

    }

    

    
   
    
    








}