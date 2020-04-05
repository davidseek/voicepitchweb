import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  // MARK: - Public 

  public didClickContactButton(): void {
    this.open('mailto:contact@voicepitchanalyzer.app')
  }

  // MARK: - Private 

  private open(url: string): void {
    window.open(url, "_blank")
  }
}
