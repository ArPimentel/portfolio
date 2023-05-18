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

  mes_projets = [
    {
      titre: "Animation",
      lien: "https://github.com/...",
      src: "/assets/images/captureX.png",
      alt: "Capture ecran projet animation"
    },
    {
    },
    {
    }
  ];
}
