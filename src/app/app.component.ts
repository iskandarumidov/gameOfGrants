import { Component, Injectable } from '@angular/core';
import { GlobalConstants } from './global-constants';

import { Web3Service } from './contracts.service';
import Web3 from 'web3';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public data: {cost: string};

  // public data:() => any = data;
  // constructor(){
  //   this.data = data;
  // }




  // data = GlobalConstants.siteTitle;

  // constructor(private service: Web3Service) {
  //   service.makeTransaction('0xf6043Aa21f1A960Ad2C6a420147CCA054C3a8506', 5);
  // }

  // ngOnInit() {
  //     console.log(this.cost);
  // }
}


@Injectable()
export class UtilityService {
  data = GlobalConstants.data;
  getData() {
    return this.data;
  }
  addCard(cost: number, name: string, title: string, researcher: string, donor: string, type: string, description: string) {
    var newS = {
      "cost": cost,
      "name": name,
      "title": title,
      "researcher": researcher,
      "donor": donor,
      "type": type,
      "description": description
    };
    this.data.push(newS);
  }
}
