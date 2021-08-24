import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GisyService {
  gifs = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  getRandomGif(){
    return this.http.get(`https://api.giphy.com/v1/gifs/random?api_key=dG1BxqPXJwicd5aI77gkbsAiRnLrhqBK&tag=&rating=g`)
    .subscribe((response: any) => {
      this.gifs.next(response.data);
    })
  }
    
  getTrendingGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=dG1BxqPXJwicd5aI77gkbsAiRnLrhqBK&limit=50&rating=g`)
    .subscribe((response: any) => {
      this.gifs.next(response.data);
    })
  }

  searchGifs(search: string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=dG1BxqPXJwicd5aI77gkbsAiRnLrhqBK&q=${search}&limit=50&offset=0&rating=g&lang=en`)
    .subscribe((response: any) => {
      this.gifs.next(response.data);
    })
  }
 
 
  getGifs(){
    return this.gifs.asObservable();
  }
}
