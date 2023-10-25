import { Injectable } from '@angular/core';
import { Experiences, languageProgramming, optionalModule, timeLineImg } from '../interfaces/homepage';
import { environment } from '../enviroments/environment';

@Injectable({
  providedIn: `root`
})
export class HomeService {


  experiences: Experiences[] = [
    {
      title: `diplomato presso IIS Galilei-Sani`,
      text: `in chimica, materiali e biotecnologie`,
      date: `anno scolastico 2018 ~ 2019`
    },
    {
      title: `fondazione biocampus`,
      text: `frequentato per tecnico per il controllo delle produzioni agroalimentari e chimiche`,
      date: `ottobre - 2019 ~ aprile 2020 (non concluso)`
    },
    {
      title: `Recordati S.p.a`,
      text: `Operatore Impianto Pilota Rare Diseases`,
      date: `11 novembre 2020 ~ 29 luglio 2022`
    },
    {
      title: `Aenova-Group`,
      text: `Operatore penicilline solidi orali`,
      date: `26 agosto ~ 31 dicembre`
    },
    {
      title: `Full Stack Developer`,
      text: `Inizia il mio fantastico percorso da sviluppatore!`,
      date: `23 gennaio 2023 ~ in corso`
    }
  ]

  front_end: languageProgramming[] =
    [
      {
        title: `HTML5`,
        url: `${environment.urlImgLanguageProgramming}html-5.png`
      },
      {
        title: `CSS3`,
        url: `${environment.urlImgLanguageProgramming}css.png`
      },
      {
        title: `Responsive`,
        url: `${environment.urlImgLanguageProgramming}responsive.png`
      },
      {
        title: `Sass`,
        url: `${environment.urlImgLanguageProgramming}sass.png`
      },
      {
        title: `Javascript`,
        url: `${environment.urlImgLanguageProgramming}javascript.png`
      },
      {
        title: `TypeScript`,
        url: `${environment.urlImgLanguageProgramming}typescript.png`
      },
      {
        title: `Angular`,
        url: `${environment.urlImgLanguageProgramming}angular.png`
      }
    ]

  back_end: languageProgramming[] = [
    {
      title: `MySQL`,
      url: `${environment.urlImgLanguageProgramming}mysql.png`
    },
    {
      title: `Java / JavaEE`,
      url: `${environment.urlImgLanguageProgramming}java.png`
    },
    {
      title: `Spring`,
      url: `${environment.urlImgLanguageProgramming}spring.png`
    },
  ]

  optionalModule: optionalModule[] = [
    {
      title: `Bootstrap`,
      url: `${environment.urlImgLanguageProgramming}bootstrap.png`
    },
    {
      title: `Tailwind`,
      url: `${environment.urlImgLanguageProgramming}tailwind.png`
    },
    {
      title: `JQuery`,
      url: `${environment.urlImgLanguageProgramming}jquery.png`
    }
  ]

  VCS: string = `${environment.urlImgLanguageProgramming}git.png`

  timeLineImg: timeLineImg[] = [
    {
      url: `${environment.urlBackgroundStory}book.png`
    },
    {
      url: `${environment.urlBackgroundStory}chemistry.png`
    },
    {
      url: `${environment.urlBackgroundStory}industry.png`
    },
    {
      url: `${environment.urlBackgroundStory}chemistry-2.png`
    },
    {
      url: `${environment.urlBackgroundStory}programming.png`
    }
  ]

}
