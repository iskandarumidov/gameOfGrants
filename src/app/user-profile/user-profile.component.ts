import { Component, OnInit } from '@angular/core';
import{ GlobalConstants } from '../global-constants';
import { UtilityService } from 'app/app.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  data: any;
  constructor(private dataService: UtilityService){
    this.data = dataService.getData();
  }
  // data = GlobalConstants.data;
  

  ngOnInit() {
  }

}
