import { Component, OnInit } from '@angular/core';
import CRData from '../../assets/dbdata.json';

@Component({
  selector: 'app-code-details',
  templateUrl: './code-details.component.html',
  styleUrls: ['./code-details.component.scss']
})
export class CodeDetailsComponent implements OnInit {
  
  data_set: any[] = CRData;
  constructor() { }

  ngOnInit(): void {
  }

}
