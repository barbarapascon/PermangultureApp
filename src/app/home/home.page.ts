import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public options:Array<any>=[
  { icon: 'person-add-outline',text: 'Plantas'},
  { icon: 'phone-portrait-outline',text: 'Problemas'},
  { icon: 'whallet-outline',text: 'Hortas comunitarias'},
  { icon: 'help-circle-outline',text: 'Tarefas de hoje'},
  { icon: 'barcode-outline',text: 'Assistente online'}
];
public slidesOptions: any ={slidesPerView:3, freeMode:true}
  constructor() {}

}
