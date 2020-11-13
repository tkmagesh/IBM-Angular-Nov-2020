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

    getById(id) : Observable<Bug>{
        return this.http.get<Bug>(`${this.serviceEndpoint}/${id}`);
    }

    save(bugData : Bug) : Observable<Bug>{
        if (bugData.id === 0){
            return this.http.post<Bug>(this.serviceEndpoint, bugData);
        } else {
            return this.http.put<Bug>(`${this.serviceEndpoint}/${bugData.id}`, bugData);
        }
    } 

    remove(bugData : Bug) : Observable<any>{
        return this.http.delete<Bug>(`${this.serviceEndpoint}/${bugData.id}`);
    }
}