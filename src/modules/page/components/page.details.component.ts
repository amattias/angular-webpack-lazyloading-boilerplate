import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'page-details',
  templateUrl: './page.details.component.html'
})

export class PageDetailsComponent implements OnInit { 

    page: string;

    constructor(private route: ActivatedRoute){
                    
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let page = params['page'];
            this.page = page;
        });
    }
    
}