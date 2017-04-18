import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GalleryService {

  constructor(private http: Http) { 
  	console.log('Gallery Service Initialize ...');
  }

  getGallery(){
  	return this.http.get('./image/resource.json')
        .flatMap((data) => data.json())
        ;
  	// return this.http.get('http://jsonplaceholder.typicode.com/photos')
   //      .flatMap((data) => data.json())
   //      ;
  }

}
