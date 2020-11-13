import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug } from '../models/Bug';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class BugApiService {
    private serviceEndpoint = environment.serviceEndPoint;

    constructor(private http: HttpClient){

    }

    getAll() : Observable<Bug[]>{
        return this.http.get<Bug[]>(this.serviceEndpoint);
    }
}