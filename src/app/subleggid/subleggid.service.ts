import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SubleggidModel} from './subleggid-model';
import {urls} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubleggidService {
  constructor(private http: HttpClient) { }

  getAllSubleggids(): Observable<Array<SubleggidModel>> {
    return this.http.get<Array<SubleggidModel>>(urls.subleggid);
  }
}
