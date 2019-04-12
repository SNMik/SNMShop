import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { PavFilter } from '../models/pav-filter.model';
import { UrlConstants } from '../url-constants';

@Injectable({ providedIn: 'root' })
export class PavFilterService {

  constructor(private http: HttpClient) { }

  getAllPavFilter(): Observable<PavFilter[]> {
    return this.http.get<PavFilter[]>(UrlConstants.API_MAIN_URL + `/pavFilters`);
  }
}
