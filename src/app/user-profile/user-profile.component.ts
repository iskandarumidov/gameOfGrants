import { Component, OnInit, NgModule } from '@angular/core';
import{ GlobalConstants } from '../global-constants';
import { UtilityService } from 'app/app.component';
import { FilterPipe, FilterPipeProp } from "./filter";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [FilterPipe, FilterPipeProp]
})

export class UserProfileComponent implements OnInit {
  cardTypes: any[] = [
    {value: 'proposal', viewValue: 'proposal'},
    {value: 'rfp', viewValue: 'rfp'}
    // {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  data: any;
  dataOrig: any;
  pipe: FilterPipe;
  pipeProp: FilterPipeProp;
  constructor(private dataService: UtilityService, pipe: FilterPipe, pipeProp: FilterPipeProp){
    this.data = dataService.getData();
    this.dataOrig = dataService.getData();
    this.pipe = pipe;
    this.pipeProp = pipeProp;
    
  }
  // data = GlobalConstants.data;
  

  ngOnInit() {
  }

  filter(val: string){
    console.log(val);
    this.data = this.pipe.transform(this.dataOrig, 'title', val);
  }

  filterProp(val: string){
    console.log(val);
    this.data = this.pipeProp.transform(this.dataOrig, 'type', val);
  }
}
