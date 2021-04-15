import { Component } from '@angular/core';

@Component({
    template: `<img src='assets/images/ho.jpg' width='400' height='200'>
    <h1>{{homeTitle}}</h1>`

})
export class HomeComponent {
   homeTitle: string = "This is home page ......!!!!!";
}