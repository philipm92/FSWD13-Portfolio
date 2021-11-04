import { Component, OnInit } from '@angular/core';
import CRData from '../../assets/dbdata.json';

@Component({
  selector: 'app-code-reviews',
  templateUrl: './code-reviews.component.html',
  styleUrls: ['./code-reviews.component.scss']
})
export class CodeReviewsComponent implements OnInit {
  data_set: any[] = CRData;
  constructor() { }

  ngOnInit(): void {
    // for (let i = 0; i < 5; i++) {
    //   console.log(this.data_set[i]);
    // }
  }

}
