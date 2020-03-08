import { Component, Injectable } from '@angular/core';
import{ GlobalConstants } from './global-constants';


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
  
  // constructor() { 
  //     console.log(GlobalConstants.data[0]);
  // }
 
  // ngOnInit() {
  //     console.log(this.cost);
  // }
}


@Injectable()
export class UtilityService{
  data = GlobalConstants.data;
    getData(){
      return this.data;
    }
    addCard(cost: number, name: string, title: string, researcher: string, donor: string, isProposal: boolean, description: string){
      var newS =         {
        "cost": cost,
        "name": name,
        "title": title,
        "researcher": researcher,
        "donor": donor,
        "isProposal": isProposal,
        "description": description
      };
      this.data.push(newS);
    }
}
