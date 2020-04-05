import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  private isMobileMenuVisible: boolean = false
  public currentMenuIndex: number = 0

  constructor(private route: ActivatedRoute) {

    if (this.route !== undefined && this.route.firstChild !== null) {

      this.route.firstChild.params.subscribe(params => {

        const route = params['route']
  
        if (route !== undefined && route === 'privacy') {
          this.currentMenuIndex = 1
        }
  
        if (route !== undefined && route === 'contact') {
          this.currentMenuIndex = 2
        }
      })
    }
  }

  // MARK: - Public

  public getMobileMenuStyle(): {} {
    return {
      'opacity': this.isMobileMenuVisible ? 1 : 0
    }
  }

  public didClickMenu(index: number): void {

    if (index === 3) {
      this.isMobileMenuVisible = !this.isMobileMenuVisible
      return
    }

    this.currentMenuIndex = index
    this.isMobileMenuVisible = !this.isMobileMenuVisible
  }

  public getMenuStyle(index: number): {} {

    return {
      'font-weight': index === this.currentMenuIndex ? '600' : '200'
    }
  }
}
