import { Component, Input } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {

  constructor(protected home: HomeService) { }

  @Input() check!: HTMLImageElement

}
