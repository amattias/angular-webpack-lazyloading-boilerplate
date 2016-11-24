import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'test-details',
  templateUrl: './test.details.component.html'
})

export class TestDetailsComponent implements OnInit { 

    id: number;

    constructor(private route: ActivatedRoute){
                    
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.id = id;
        });
    }
    
}