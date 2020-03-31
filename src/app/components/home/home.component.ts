import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public currentMenuIndex: number = 0 

  constructor() { }

  ngOnInit(): void {
  }

  // MARK: - Public

  public didClickMenu(index: number): void {

    if (index > 1) return 
    this.currentMenuIndex = index 
  }

  public getMenuStyle(index: number): {} {
    return {
      'font-weight': index === this.currentMenuIndex ? '600' : '200'
    }
  }

}
