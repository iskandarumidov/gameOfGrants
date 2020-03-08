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
}


@Injectable()
export class UtilityService {
  data = GlobalConstants.data;
  getData() {
    return this.data;
  }
  addCard(cost: number, name: string, title: string, type: string, description: string, cryptoAddress: string) {
    var newS = {
      "cost": cost,
      "name": name,
      "title": title,
      "type": type,
      "description": description,
      "cryptoAddress": cryptoAddress
    };
    this.data.push(newS);
  }
}
