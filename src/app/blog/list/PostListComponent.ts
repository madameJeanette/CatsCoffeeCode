import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-post-list',
    templateUrl: 'postList.html'
})

export class PostListComponent implements OnInit {
    public postList = postList;
    constructor() { }

    ngOnInit() { }
}

const postList = [
    {
        title: 'Very cool title',
        subTitle: 'such amazing sub title',
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        content:" The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    },
    {
        title: 'Such wow',
        subTitle: 'much amaze',
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        content:" The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    },
    {
        title: 'Nicu',
        subTitle: 'desune',
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        content:" The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    },
    {
        title: 'Bork',
        subTitle: 'bork',
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        content:" The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    }
];