
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { AppInfo } from 'src/app/app.info';
import { Convert } from 'src/app/lib/convert';


/*********** Resource Popover ***************
title: string -  title text,
resource: resource data
type: string - resource type
id: string - resource id
*************************************************/
@Component({
    selector: 'resource-popover',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <ap-popover
            [title]="title" 
            [canClose]="canClose"
            (closed)="handleClose()">
            
            <div *ngFor="let p of properties" style="display:flex;">
                <div style="font-weight:bold;">{{p[0]}}:</div>
                <div *ngIf="p[0]!='Latitude' && p[0]!='Longitude'"
                        style="flex: 1 1 auto;text-align:right;
                            white-space:nowrap;
                            overflow-x:hidden;
                            text-overflow:ellipsis;">
                    {{p[1]}}
                </div>
                <div *ngIf="p[0]=='Latitude'"
                    style="flex: 1 1 auto;text-align:right;"
                    [innerText]="p[1] | coords : app.config.selections.positionFormat : true">
                </div>
                <div *ngIf="p[0]=='Longitude'"
                    style="flex: 1 1 auto;text-align:right;"
                    [innerText]="p[1] | coords : app.config.selections.positionFormat">
                </div>
              
            </div>

            <div style="display:flex;flex-wrap: wrap;">

                <div class="popover-action-button" *ngIf="ctrl.showModifyButton">
                    <button mat-button color="primary"
                        (click)="emitModify()"
                        matTooltip="Modify / Move">
                            <mat-icon>touch_app</mat-icon>
                            MOVE
                    </button> 
                </div>
                <div class="popover-action-button" *ngIf="ctrl.showAddNoteButton">
                    <button mat-button color="primary"
                        (click)="emitAddNote()"
                        matTooltip="Add Note">
                            <mat-icon>local_offer</mat-icon>
                            ADD
                    </button>                                                 
                </div>
                <div class="popover-action-button" *ngIf="ctrl.showDeleteButton">
                    <button mat-button color="warn"
                        (click)="emitDelete()"
                        matTooltip="Delete">
                            <mat-icon>delete</mat-icon>
                            DELETE
                    </button>
                </div>               
                <div class="popover-action-button" *ngIf="ctrl.canActivate && !ctrl.isActive">
                    <button mat-button color="primary"
                        (click)="emitActive(true)"
                        [matTooltip]="(type=='waypoint') ? 'Navigate to Waypoint' : 'Make this the Active Route'">
                            <mat-icon>near_me</mat-icon>
                            {{ctrl.activeText}}
                    </button>                                           
                </div>
                <div class="popover-action-button" *ngIf="ctrl.isActive">                                            
                    <button mat-button  
                        (click)="emitActive(false)"
                        color="primary"
                        matTooltip="Clear Destination">
                        <mat-icon>clear_all</mat-icon>
                        CLEAR
                    </button>
                </div>
                <div class="popover-action-button" *ngIf="ctrl.showRelatedButton">
                    <button mat-button
                        (click)="emitRelated()"
                        matTooltip="Notes in Group">
                        <mat-icon>style</mat-icon>
                        GROUP
                    </button>  
                </div>
                <div class="popover-action-button" *ngIf="ctrl.showNotesButton">
                    <button mat-button
                        (click)="emitNotes()"
                        matTooltip="Show Notes">
                            <mat-icon>local_offer</mat-icon>
                            NOTES
                    </button>                                                 
                </div>                                                   
                <div class="popover-action-button" *ngIf="ctrl.showInfoButton">
                    <button mat-button [color]="type === 'route' || type === 'waypoint' ? 'primary' : ''"
                        (click)="emitInfo()"
                        matTooltip="Show Properties">
                        <mat-icon>{{type === 'route' || type === 'waypoint' ? 'edit' : 'info_outline'}}</mat-icon>
                        {{type === 'route' || type === 'waypoint' ? 'EDIT' : 'INFO'}}
                    </button>  
                </div>
                <div class="popover-action-button" *ngIf="ctrl.showPointsButton">
                    <button mat-button
                        (click)="emitPoints()"
                        matTooltip="Route Waypoints">
                            <mat-icon>flag</mat-icon>
                            POINTS
                    </button>
                </div>                                                                   
            </div>                                         
        </ap-popover>  
	`,
    styleUrls: [`./popover.component.scss`]
})
export class ResourcePopoverComponent {
    @Input() title: string;
    @Input() type: string;
    @Input() resource: any;
    @Input() active: boolean;
    @Input() featureCount: number= 0;
    @Input() units: string= 'm';
    @Input() canClose: boolean;
    @Output() modify: EventEmitter<any>= new EventEmitter();
    @Output() delete: EventEmitter<any>= new EventEmitter();
    @Output() addNote: EventEmitter<any>= new EventEmitter();
    @Output() activated: EventEmitter<any>= new EventEmitter();
    @Output() deactivated: EventEmitter<any>= new EventEmitter();
    @Output() related: EventEmitter<any>= new EventEmitter();
    @Output() info: EventEmitter<string>= new EventEmitter();
    @Output() closed: EventEmitter<any>= new EventEmitter();
    @Output() points: EventEmitter<any>= new EventEmitter();
    @Output() notes: EventEmitter<any>= new EventEmitter();
    
    properties: Array<any>  // ** resource properties
    ctrl:any = {
        showInfoButton: false,
        showModifyButton: false,
        showDeleteButton: false,
        showAddNoteButton: false,
        showRelatedButton: false,
        showPointsButton: false,
        showNotesButton: false,
        canActivate: false,
        isActive: false,
        activeText: 'ACTIVE'
    }

    constructor(public app:AppInfo) {}

    ngOnChanges() { 
        this.parse();
        this.ctrl.showModifyButton= (this.featureCount > 0) ? true : false;
    }

    parse() {
        if(this.type=='waypoint') { this.parseWaypoint() }
        if(this.type=='route') { this.parseRoute() }
        if(this.type=='note') { this.parseNote() }
        if(this.type=='region') { this.parseRegion() }
    }

    parseWaypoint() {
        this.ctrl.isActive= (this.active && this.active==this.resource[0]) ? true : false;
        this.ctrl.activeText= 'GO TO';
        this.ctrl.canActivate= true;
        this.ctrl.showInfoButton= true;
        this.ctrl.showModifyButton= true; 
        this.ctrl.showDeleteButton= true;
        this.ctrl.showNotesButton= true;
        this.ctrl.showAddNoteButton= false;
        this.ctrl.showPointsButton= false;
        this.ctrl.showRelatedButton= false;
        this.properties= [];
        if(this.resource[1].feature.properties.name) {
            this.properties.push( ['Name', this.resource[1].feature.properties.name] );
        }
        if(this.resource[1].feature.properties.cmt) {
            this.properties.push( ['Desc.', this.resource[1].feature.properties.cmt] );
        }
        this.properties.push(['Latitude', this.resource[1]['position']['latitude'] ]); 
        this.properties.push(['Longitude', this.resource[1]['position']['longitude'] ]);                 
    }

    parseRoute() {
        this.ctrl.isActive= (this.active && this.active==this.resource[0]) ? true : false;
        this.ctrl.activeText= 'ACTIVATE';
        this.ctrl.canActivate= true;
        this.ctrl.showInfoButton= true;
        this.ctrl.showModifyButton= true; 
        this.ctrl.showPointsButton= true;
        this.ctrl.showNotesButton= true;
        this.ctrl.showAddNoteButton= false;
        this.ctrl.showRelatedButton= false;
        this.ctrl.showDeleteButton= (this.ctrl.isActive) ? false : true;
        this.properties= [];   
        this.properties.push(['Name', this.resource[1].name]);
        let d= (this.units=='m') ?
            [ (this.resource[1].distance/1000).toFixed(1), 'km' ] :
            [Convert.kmToNauticalMiles( this.resource[1].distance/1000 ).toFixed(1), 'NM'];
        this.properties.push(['Distance', `${d[0]} ${d[1]}`]);
        this.properties.push(['Desc.', this.resource[1].description]);           
    }

    parseNote() {
        this.ctrl.isActive= false;
        this.ctrl.activeText= '';
        this.ctrl.canActivate= false;
        this.ctrl.showInfoButton= true;
        this.ctrl.showModifyButton= true; 
        this.ctrl.showDeleteButton= true;
        this.ctrl.showAddNoteButton= false;
        this.ctrl.showNotesButton= false;
        this.ctrl.showPointsButton= false;
        this.ctrl.showRelatedButton= (this.resource[1].group && this.app.config.resources.notes.groupNameEdit) ? true : false;
        this.properties= [];
        this.properties.push(['Title', this.resource[1].title]);
    }

    parseRegion() {
        this.ctrl.isActive= false;
        this.ctrl.activeText= '';
        this.ctrl.canActivate= false;
        this.ctrl.showInfoButton= false;
        this.ctrl.showModifyButton= this.resource[1].feature.geometry.type=='MultiPolygon' ? false : true; 
        this.ctrl.showDeleteButton= true;
        this.ctrl.showAddNoteButton= false;
        this.ctrl.showNotesButton= true;
        this.ctrl.showPointsButton= false;
        this.ctrl.showRelatedButton= false;
        this.properties= [];      
    }


    // *** BUTTON actions *******

    emitModify() { this.modify.emit() }

    emitAddNote() { this.addNote.emit() }

    emitDelete() { this.delete.emit() }

    emitActive(activate:boolean) { 
        if(activate) { this.activated.emit() }
        else { this.deactivated.emit() }
    }

    emitPoints() { this.points.emit() }

    emitNotes() { this.notes.emit() }
    
    emitInfo() { this.info.emit() }

    emitRelated() { this.related.emit(this.resource[1].group) }

    handleClose() { this.closed.emit() }
}