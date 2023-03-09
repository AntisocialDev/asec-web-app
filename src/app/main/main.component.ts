import { Component,Output,OnChanges, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnChanges{
  menuOpen?: boolean = false;
  

  constructor(){}
  getMenuStatus(evt: boolean){
    this.menuOpen = evt;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  onMenuChange(e: any){
    this.menuOpen = e;
  }
}
