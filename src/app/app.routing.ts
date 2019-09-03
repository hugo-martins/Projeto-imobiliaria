import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client/client.component';
import { NgModule } from '@angular/core';

const routes: Routes =  [
    { path:'/', component: ClientComponent }
];

@NgModule({
    imports: [  
      RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }

