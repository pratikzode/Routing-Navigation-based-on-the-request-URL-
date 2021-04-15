import { Component } from '@angular/core';

@Component({
    template: `<h1>{{photoTitle}}</h1> `

})
export class PhotosComponent {
    photoTitle: string = "This is Photos page ......!!!!!";
}