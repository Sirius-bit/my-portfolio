import { Component, HostListener } from '@angular/core'
import { environment } from 'src/app/enviroments/environment'
import { HomeService } from 'src/app/services/home.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent {

  constructor(protected home: HomeService) {
    this.me = new Image()
    this.me.src = environment.urlMe
    this.check = new Image()
    this.check.src = environment.urlCheck
  }
  protected check: HTMLImageElement
  public me: HTMLImageElement
  private condition: any = "this.includes(check) ? 'è stato usato per questo sito' : null"

  // FUNZIONE CHE GESTISCE LA SCRITTURA DI CONDITION
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

