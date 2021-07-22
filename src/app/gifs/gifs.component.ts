import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GisyService } from '../gisy.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit, OnDestroy {
  gifs: any[] = [];
  subscription!: Subscription;

  constructor(private gisyService: GisyService) { }

  ngOnInit(): void {
    this.gisyService.getTrendingGifs();
    this.subscription = this.gisyService.getGifs()
    .subscribe((response: any) => {
      this.gifs = response;
    })
  }
 
  ngOnDestroy() {
    this.subscription.unsubscribe();

  }
}
