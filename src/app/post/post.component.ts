import { 
    Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, SimpleChanges,
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements 
    OnInit, OnChanges, DoCheck, 
    AfterContentInit, AfterContentChecked, 
    AfterViewInit, AfterViewChecked, OnDestroy {

    @Input('img')
    postImage = "";

    @Output()
    imageSelected = new EventEmitter<string>()

    constructor() {
        console.log("constructor() called", this.postImage);
    }

    ngOnInit() {
        console.log('ngOnInit() called', this.postImage);
    }

    ngDoCheck() {
        console.log("ngDoCheck() called");
    }
    
    ngOnChanges() {
        console.log("ngOnChanges() called");
    }

    ngAfterContentInit() {
        console.log("ngAfterContentInit() called");
    }

    ngAfterContentChecked() {
        console.log("ngAfterContentChecked() called");
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit() called");
    }

    ngAfterViewChecked() {
        console.log("ngAfterViewChecked() called");
    }

    ngOnDestroy() {
        console.log("onDestroy() called");
    }
}
