import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {

    /** Fix for mobile browser height */
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  // MARK: - Public 

  public getLinkClass(index: number): {} {

    return {
      'android': index === 0,
      'apple': index === 1,
      'github': index === 2
    }
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

  // MARK: - Private 

  private open(url: string): void {
    window.open(url, "_blank")
  }
}
