import { Component, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.create_animation();
  }

  create_animation() {
    const logoAnimation = anime.timeline({
      direction: "alternate",
      loop: true    
    });

    const timeline2 = anime.timeline({
      direction: "alternate",
      loop: true
    })
    timeline2.add({
      targets: ".stripes path",
      translateX: [-500, 0],
      opacity: {
        value: 1,
        duration: 100,
      },
      fill: "#F9C100",
      delay: (el: any, i: number) => 2000 + (i * 75),
      duration: 2600,
      easing: "easeOutExpo",
      offset: 0,
    });

    const animations = [
      {
      targets: ".line",
      translateX: (target: { classList: { contains: (arg0: string) => any; }; }) => {
        let x = 1200;
        let translate;
        if (target.classList.contains("hori"))
          translate = anime.random(0, 1) ? x : -x;
        if (
          target.classList.contains("diag-right") ||
          target.classList.contains("diag-left")
        )
          translate = x / 3;
        return [translate, 0];
      },
      translateY: (target: { classList: { contains: (arg0: string) => any; }; }) => {
        let y = 1200;
        let translate;
        if (target.classList.contains("vert"))
          translate = anime.random(0, 1) ? y : -y;
        if (target.classList.contains("diag-right")) translate = -y / 3;
        if (target.classList.contains("diag-left")) translate = y / 3;
        return [translate, 0];
      },
      scale: {
        value: [6, 1],
        duration: 500,
      },
  
      stroke: "#F9C100",
      opacity: {
        value: [0, 1],
        duration: 100,
      },
  
      delay: (t: any, i: number) => i * 25,
      duration: 500,
      easing: "easeOutQuart",
      offset: 0,
    },
    {
      targets: ".katakana path",
      d: (el: { getAttribute: (arg0: string) => any; }) => el.getAttribute("data-d"),
      opacity: {
        value: [0, 1],
        duration: 100,
      },
  
      fill: "#F9C100",
      delay: (el: any, i: number) => i * 120,
      duration: 1200,
      easing: "easeOutCirc",
      offset: 0,
    },
      
      {
        targets: ".text-fills path",
        opacity: [0, 1],
        fill: "#F9C100",
        easing: "easeOutExpo",
        duration: 200,
        delay: (t: any, i: any) => 0 + anime.random(0, 450),
        offset: 0,
      },
      
    ];
    
   animations.forEach(anim =>  logoAnimation.add(anim));
  }
}
