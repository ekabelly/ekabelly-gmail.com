import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '../models/store';
import storeStub from '../stubs/store.stub';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  store: Store;

  constructor(private http: HttpClient) { }

  public getStore(id: string): Observable<Store>{
    return this.storeObservable();
  }

  // private fetchStore(id: string): Observable<Store>{
  //   return this.http.get('https://restcountries.eu/rest/v2/all')
  //   .map((data) => {
  //     this.store = data;
  //     return this.store;
  //   });
  // }

  private storeObservable(): Observable<Store>{
    return new Observable(observer => {
      // observer.next(this.store);
      observer.next(storeStub);

      return {
        unsubscribe() {}
      };
    });
  }
}
