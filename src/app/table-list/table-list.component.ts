import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'app/app.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  data: any;
  constructor(private dataService: UtilityService) {
    this.dataService = dataService.getData();
  }

  ngOnInit() {
  }

  onClickSubmit(data){
    alert(data.emailid);

  }

  
}
