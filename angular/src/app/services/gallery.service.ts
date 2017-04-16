import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GalleryService {

  constructor(private http: Http) { 
  	console.log('Gallery Service Initialize ...');
  }

  getGallery(){
  	return this.http.get('https://jsonplaceholder.typicode.com/photos').
  	map(res => res.json());
  }

}
