import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../space.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {
  arry = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
  spaceData;
  year;
  launchSuccess = false;
  landSuccess = false;
  launchYear;
  constructor(private spaceService: SpaceService) { }

  ngOnInit() {
    this.spaceService.getAllData().subscribe(res => {
      this.spaceData = res;
    });
  }

  onYearSelected(year) {
    this.launchYear = year;
    this.spaceService.fillterByYear(this.launchYear, this.landSuccess, this.launchSuccess).subscribe(result => {
      this.spaceData = result;
    });
  }

  isLandSuccess(data) {
    this.landSuccess = data;
    this.spaceService.launchAndLandSuccess(this.launchSuccess, this.landSuccess).subscribe(result => {
      this.spaceData = result;
    });
  }

  isLaunchSuccess(data) {
    this.launchSuccess = data;
    this.spaceService.launchSuccess(this.launchSuccess).subscribe(result => {
      this.spaceData = result;
    });
  }


}
