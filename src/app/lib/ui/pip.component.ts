import {Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';


interface PiPVideoElement extends HTMLVideoElement {
    requestPictureInPicture():any
}

//** Picture in Picture video component **
@Component({
    selector:	    'pip-video',
    template: 	    `
        <div style="border: gray 1px solid;border-radius:5px;display:none;">
            <video #vid [src]="vidUrl" [muted]="muted"></video>
        </div>
        <div class="pip-video">
            <button mat-icon-button [style.display]="src ? 'block' : 'none'"
                [matTooltip]="pipMode ? 'Close Video' : 'Show Video'"
                [disabled]="pipMode" (click)="initPiP()">
                <mat-icon>{{pipMode ? 'videocam_off' : 'videocam'}}</mat-icon>
            </button>   
            <button mat-icon-button [style.display]="pipMode ? 'block' : 'none'"
                matTooltip="Mute Audio"
                (click)="toggleMute()">
                <mat-icon>{{muted ? 'volume_off' : 'volume_mute'}}</mat-icon>
            </button>                
        </div>
    `,
    styles: 	    [`
        .pip-video { display:flex; max-width:85px; }
    `]
})
export class PiPVideoComponent implements OnInit {
    
    private pipVideo: PiPVideoElement;
    private pipWindow: any;
    pipMode:boolean=false;
    vidUrl:string;
    @Input() src:string;
    @Input() muted:boolean=true;
    @Output() resize:EventEmitter<any>= new EventEmitter();
    @Output() change:EventEmitter<any>= new EventEmitter();
    @ViewChild('vid') vid: ElementRef;

    constructor() {}

    ngOnInit() {     
        if (!('pictureInPictureEnabled' in document)) {
            console.log('The Picture-in-Picture Web API is not available.');
            this.pipMode=true; // disable button by mimicing pipMode
        }       
        
        this.pipVideo= this.vid.nativeElement;

        this.pipVideo.addEventListener('enterpictureinpicture', (event:any)=> {
            this.pipMode= true;
            this.pipWindow= event.pictureInPictureWindow;
            this.pipWindow.addEventListener('resize', this.onPipWindowResize.bind(this) );
            this.change.emit(this.pipMode);
        });  

        this.pipVideo.addEventListener('leavepictureinpicture', (event:any)=> {
            this.pipMode= false;
            //this.muted= true;
            this.pipVideo.pause();
            this.pipWindow.removeEventListener('resize', this.onPipWindowResize );
            this.change.emit(this.pipMode);
        });  
    }

    ngOnChanges(changes) { 
        if(changes.src && changes.src.currentValue) { this.vidUrl= this.src }
    }

    // ** pipWindow resize event handler **
    onPipWindowResize(event:any) { this.resize.emit([event.srcElement.width, event.srcElement.height]) }
    
    toggleMute() { this.muted= !this.muted }

    // ** initialise picture in picture mode
    async initPiP() {
        try {
            await this.pipVideo.requestPictureInPicture(); 
            this.pipMode= true;     
        }
        catch(e) {
            this.pipMode= false;
        }       
    }
    
    ngOnDestroy() {} 

        
}
