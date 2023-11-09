import { Component, HostListener, Input } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {

  constructor(protected home: HomeService) { }

  @Input() check!: HTMLImageElement

  private condition: any = "this.contains(check) ? 'è stato usato per questo sito' : null"

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollTop = window.scrollY
    const desktopThreshold = 650
    const mobileThreshold = 2100
    let threshold: number

    if (window.innerWidth <= 768) {
      if (scrollTop > mobileThreshold) {
        threshold = 6
        this.scrollCondition(threshold, scrollTop, mobileThreshold)
      } else {
        this.clearCondition()
      }
    } else {
      if (scrollTop > desktopThreshold) {
        threshold = 10
        this.scrollCondition(threshold, scrollTop, desktopThreshold)
      } else {
        this.clearCondition()
      }
    }
  }

  scrollCondition = (threshold: number, scrollTop: number, scrollThreshold: number) => {
    this.scrollWindow(scrollTop, threshold, scrollThreshold)
  }

  scrollWindow = (scrollTop: number, threshold: number, scrollThreshold: number) => {
    let charsToAdd = Math.floor((scrollTop - scrollThreshold) / threshold)
    let textToAdd = ''

    if (charsToAdd > this.condition.length)
      charsToAdd = this.condition.length


    textToAdd = this.condition.substring(0, charsToAdd)

    textToAdd.length === this.condition.length ? document.getElementById("cond")?.classList.add("text-condition") : document.getElementById("cond")?.classList.remove("text-condition")

    this.writeCondition(textToAdd)
  }

  writeCondition(textToAdd: string) {
    const p = document.getElementById("cond")
    if (!p) return
    p.innerText = textToAdd
  }

  clearCondition() {
    const p = document.getElementById("cond")
    if (p) {
      p.innerText = ''
    }
  }

}
