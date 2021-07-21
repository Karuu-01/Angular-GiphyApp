import { Component, OnInit } from '@angular/core';
import { GisyService } from '../gisy.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  gifs: any[] = [];

  constructor(private gisyService: GisyService) { }

  ngOnInit(): void {
    this.gisyService.getTrendingGifs()
    .subscribe((response: any) => {
      this.gifs = response.data;
    });
  }

}
