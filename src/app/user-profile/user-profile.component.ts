import { Component, OnInit, NgModule } from '@angular/core';
import{ GlobalConstants } from '../global-constants';
import { UtilityService } from 'app/app.component';
import { FilterPipe } from "./filter";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [FilterPipe]
})
export class UserProfileComponent implements OnInit {

  data: any;
  dataOrig: any;
  pipe: FilterPipe;
  constructor(private dataService: UtilityService, pipe: FilterPipe){
    this.data = dataService.getData();
    this.dataOrig = dataService.getData();
    this.pipe = pipe;
    
  }
  // data = GlobalConstants.data;
  

  ngOnInit() {
  }

  filter(val: string){
    console.log(val);
    this.data = this.pipe.transform(this.dataOrig, 'title', val);
  }
}
