import { Component } from '@angular/core';
declare var anime: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
ngOnInit(){
  let welcome = anime({
    targets: '.lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2500,
    delay: function(el:any, i:any) { return i * 250 },
    direction: 'alternate',
    autoplay: false,
    loop: true
  })
  welcome.play()
}
}
