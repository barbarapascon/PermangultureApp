import { Component, ViewChild } from '@angular/core';
import {Animation, AnimationController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('blocks') blocks:any;
public options:Array<any>=[
  { icon: 'leaf-outline',text: 'Plantas'},
  { icon: 'bug-outline',text: 'Problemas'},
  { icon: 'map-outline',text: 'Hortas comunitarias'},
  { icon: 'list-outline',text: 'Tarefas de hoje'},
  { icon: 'flower-outline',text: 'Assistente online'}
];
public slidesOptions: any ={slidesPerView:3, freeMode:true}

public items:Array<any>=[
  { icon: 'help-circle-outline',text: 'Me ajude'},
  { icon: 'person-outline',text: 'Perfil'},
  { icon: 'cash-outline',text: 'Configurar conta'},
  { icon: 'card-outline',text: 'Configurar plantas'},
    { icon: 'phone-portrait-outline', text: 'Configuracao do app' }
  ];
  public initialStep: number = 0;
  private maxTranslate: number;
  private animation: Animation;

  constructor(
    private animationCtrl: AnimationController,
    private platform: Platform
    ) {
    this.maxTranslate = this.platform.height() - 200;
  }
ngAfterViewInit(){
  this.createAnimation();
}
toogleBlocks(){
  this.initialStep=this.initialStep === 0 ? this.maxTranslate : 0;
  this.animation.direction(this.initialStep === 0 ? 'reverse': 'normal').play();
  
  this.animation.play();
  console.log(this.animation);
}
createAnimation(){
  this.animation = this.animationCtrl.create()
  .addElement(this.blocks.nativeElements)
  .duration(300)
  .fromTo('transform', 'translate(0)',`translateY(${this.maxTranslate}px)`);
console.log(this.animation);
}
}
