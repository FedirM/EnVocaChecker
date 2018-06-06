import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  dicData: any;
  showData: any[];
  currLetter: string = 'a';
  currObj: any;
  showCard: boolean = false;
  showTranslate: boolean = false;
  matchAnswer = '';
  translateData: string[];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dicData = this.dataService.getDicData();
    this.showData = this.dicData[this.currLetter];
  }

  letterOnClick(letter: string): void{
    this.currLetter = letter;
    this.showData = this.dicData[this.currLetter];
  }

  wordOnClick(obj: any): void{
    this.showCard = true;
    this.currObj = obj;
    this.matchAnswer = '';
    this.showTranslate = false;

    this.showTr(this.currObj.ru);
  }

  showTr(str: string): void {
    this.showTranslate = true;
    this.translateData = str.split(/\|+/);
  }

  matchRus($event, obj: any){
    if($event.target.value){
      if (obj.ru.indexOf($event.target.value) != -1) {
        this.matchAnswer = "You know this one =)";
      } else {
        this.matchAnswer = "You don't know this word!)))";
      }
    }else{
      this.matchAnswer = '';
    }
  }

  search($event) {
    let q = $event.target.value;
    let arr: any[] = this.dicData[q.toString().split('')[0]];

    //console.log(`Arr: ${arr}`);
    this.showData = [];
    for(let obj of arr){
      if(obj.en.indexOf(q) != -1){
        this.showData.push(obj);
      }
    }
  }
}

