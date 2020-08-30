import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(private httpClient: HttpClient) { }

  public getAllData(): Observable<any> {
    const  url = 'https://api.spaceXdata.com/v3/launches?limit=100';
    return this.httpClient.get(url);
  }
  public fillterByYear(launchYear, landSuccess, launchSuccess) {
    const url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success='
    + launchSuccess + '&land_success=' + landSuccess + '&launch_year=' + launchYear;
    return this.httpClient.get(url);
  }
  public launchSuccess(launchSuccess): Observable<any> {
    const url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + launchSuccess;
    return this.httpClient.get(url);
  }

  public launchAndLandSuccess(launchSuccess, landSuccess): Observable<any> {
    const url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + launchSuccess + '&land_success=' + landSuccess;
    console.log(url);
    return this.httpClient.get(url);
  }

}
