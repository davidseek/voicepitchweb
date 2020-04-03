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

  public didClickLink(index: number): void {
    
    if (index === 0) {
      this.open('https://play.google.com/store/apps/details?id=de.lilithwittmann.voicepitchanalyzer&hl=en_US')
    }

    if (index === 1) {
      this.open('https://apps.apple.com/us/app/voice-pitch-analyzer/id1302785788')
    }

    if (index === 2) {
      this.open('https://github.com/carolanitz/VoicePitchAnalyzer')
    }
  }

  public getMenuStyle(index: number): {} {

    return {
      'font-weight': index === this.currentMenuIndex ? '600' : '200'
    }
  }

  public getLinkClass(index: number): {} {

    return {
      'android': index === 0,
      'apple': index === 1,
      'github': index === 2
    }
  }

  // MARK: - Private 

  private open(url: string): void {
    window.open(url, "_blank")
  }
}
