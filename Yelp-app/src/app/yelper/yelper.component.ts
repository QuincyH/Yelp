import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../models/restaraunts';
import {YelpService} from '../yelp.service';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-yelper',
  templateUrl: './yelper.component.html',
  styleUrls: ['./yelper.component.scss']
})
export class YelperComponent implements OnInit {

  yelpForm: FormGroup;
  food: any

  constructor(
    private yelp: YelpService,
    private fb: FormBuilder
  ) {}
  
  ngOnInit() {
    this.yelpForm = this.fb.group({
      city: new FormControl(''),
      state: new FormControl(''),
      prices: new FormControl('')
      
    })
  }
  
  getItems() {
    this.yelp.YelpMe(this.yelpForm.value.city, this.yelpForm.value.state, this.yelpForm.value.prices).subscribe(foodie => {
      this.food = foodie.businesses[Math.floor(Math.random() * foodie.businesses.length)]
      console.log(this.food)
      return this.food
    })
  }
}
  

