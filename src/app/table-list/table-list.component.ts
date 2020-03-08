import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'app/app.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  private dataService: UtilityService;
  // data: any;
  constructor(private dataService2: UtilityService) {
    this.dataService = dataService2;
  }

  ngOnInit() {
  }

  onClickSubmit(data){
    alert(data.cost);
    console.log(data.cost);
    this.dataService.addCard(data.cost, data.name, data.title, data.type, data.description, data.cryptoAddress);
  }

  
}
