import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  constructor(private dataService: DataServiceService ) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs()
    .subscribe((response: any) => {
      console.log('Data', response);
    });
  }

}
