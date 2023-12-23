import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  protected marquee: string[] = ['Questo', 'sito', 'è', 'stato', 'realizzato', 'al', '100%', 'da', 'me', '-', 'no', 'template']
  protected themeString: string = "dark - mode 🌑"

  menu = (e: any) => {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list?.classList.add('top-[80px]'), list?.classList.add('opacity-100')) : (e.name = "menu", list?.classList.remove('top-[80px]'), list?.classList.remove('opacity-100'))
  }

  scrollBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight + window.innerHeight, behavior: 'smooth' })
  }

  darkMode = () => {
    const body = document.body
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode)
      body.classList.add('dark')

    body.classList.toggle('dark')
    localStorage.setItem('darkMode', body.classList.contains('dark').toString());
    this.themeString = body.classList.contains('dark') ? 'light - mode ☀️' : "dark - mode 🌑"
  }
}
