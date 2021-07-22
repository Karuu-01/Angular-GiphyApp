import { Component, OnInit } from '@angular/core';
import { GisyService } from '../gisy.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {

  constructor(private gisyService: GisyService) { }

  ngOnInit(): void {
  }

  search(searchTerm: string){
    if(searchTerm !== '') {
      this.gisyService.searchGifs(searchTerm)
    }
  }
  

  }
