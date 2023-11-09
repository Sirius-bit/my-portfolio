import { Component, Input } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-experience-me',
  templateUrl: './experience-me.component.html',
  styleUrls: ['./experience-me.component.scss']
})
export class ExperienceMeComponent {

  constructor(protected home: HomeService) { }

  @Input() me!: HTMLImageElement;



}
