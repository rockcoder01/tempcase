import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { DOCUMENT } from '@angular/common';

@Injectable({
   providedIn: 'root'
})

export class MetaService {

   constructor(private http: HttpClient) {

   }
   
   
}