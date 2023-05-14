import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() textButton!: string;
}
