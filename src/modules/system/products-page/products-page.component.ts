import { Component, OnInit } from '@angular/core';
import { PavFilter } from 'src/modules/shared/models/pav-filter.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  pavFilters: PavFilter[];

  constructor() { }

  ngOnInit() {
    this.initArrayForTest();
  }

  private initArrayForTest(){
    const pavFilterTest1 = {
      centerFrequency: '18.18',
      type: 'A132-18.18M1',
      bandwidthMgz: '1.3',
      stripLevelBandwidthDb: '-3',
      unevenness: 'NS',
      losses: '6.5',
      housing: 'DIP14',
      acceptance: '5'
    };

    const pavFilterTest2 = {
      centerFrequency: '18.18',
      type: 'A188-18.18M1',
      bandwidthMgz: '0.16',
      stripLevelBandwidthDb: '-3',
      unevenness: 'NS',
      losses: '5.5',
      housing: 'DIP24',
      acceptance: '5'
    };

    const pavFilterTest3 = {
      centerFrequency: '20.000',
      type: 'A109-20M1',
      bandwidthMgz: '0.2',
      stripLevelBandwidthDb: '-2',
      unevenness: 'NS',
      losses: '7',
      housing: 'DIP18',
      acceptance: 'ОТК'
    };

    const pavFilterTest4 = {
      centerFrequency: '18.18',
      type: 'A188-18.18M1',
      bandwidthMgz: '0.16',
      stripLevelBandwidthDb: '-3',
      unevenness: 'NS',
      losses: '5.5',
      housing: 'DIP24',
      acceptance: '5'
    }

    const pavFilterTest5 = {
      centerFrequency: '21.517',
      type: 'A211-21.517M1',
      bandwidthMgz: '0.03',
      stripLevelBandwidthDb: '-3',
      unevenness: 'NS',
      losses: '6.5',
      housing: 'DIP24',
      acceptance: '5'
    }

    this.pavFilters = [];
    this.pavFilters.push(pavFilterTest1);
    this.pavFilters.push(pavFilterTest2);
    this.pavFilters.push(pavFilterTest3);
    this.pavFilters.push(pavFilterTest4);
    this.pavFilters.push(pavFilterTest5);
  }

}
