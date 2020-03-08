import { Injectable } from '@angular/core';

import Web3 from 'web3';
import * as Utils from 'web3-utils';

declare global {
  interface Window { web3: any; ethereum: any }
}

window.web3 = window.web3 || {};

@Injectable()
export class Web3Service {

  web3: any;

  constructor() {
    this.web3 = window.web3;
    window.ethereum.enable().then((account) => {
      const defaultAccount = account[0];
      window.web3.eth.defaultAccount = defaultAccount;
    });
  }

  getWeb3(): Web3 {
    return this.web3;
  }

  makeTransaction(receiver: string, amount: number) {
    this.web3.eth.sendTransaction({
      from: this.web3.eth.defaultAccount,
      to: receiver,
      value: Utils.toWei(amount.toString(), 'ether'),
    }, () => { });
  }
}
