import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  hotels: string;
  stars: string;

  constructor(private http: Http) { }

  makeRequestHotels(): string {
    this.http.request('http://localhost:3000/api/hotelList/')
    .subscribe((res: Response) => {
      this.hotels = res.json();
    });
    return this.hotels;
  }


  onSubmit(f: NgForm) {
    console.log(this.stars);
  }


  ngOnInit() {
    this.makeRequestHotels();
  }

}
