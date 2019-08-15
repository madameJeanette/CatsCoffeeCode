import { NgModule } from '@angular/core';
import {PostListComponent} from './PostListComponent' ;
import {MatButtonModule, MatCardModule} from '@angular/material'; 

@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule
    ],
    exports: [
        PostListComponent
    ],
    declarations: [
        PostListComponent
    ],
    providers: [],
})
export class PostListModule { }
