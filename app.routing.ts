import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './routing_demo/home.component';
import { MessageComponent } from './routing_demo/message.component';
import { PhotosComponent } from './routing_demo/photos.component';
import { NotFoundComponent } from './routing_demo/notfound.component';

export const routing = RouterModule.forRoot([
    { path: '', component:HomeComponent},
    { path: 'messages', component:MessageComponent},
    { path: 'photos', component:PhotosComponent},
    { path: '**', component:NotFoundComponent}
]);

