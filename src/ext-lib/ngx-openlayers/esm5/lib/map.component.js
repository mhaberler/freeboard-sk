/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Output, EventEmitter, } from '@angular/core';
import Map from 'ol/Map';
var MapComponent = /** @class */ (function () {
    function MapComponent(host) {
        this.host = host;
        this.componentType = 'map';
        this.width = '100%';
        this.height = '100%';
        // we pass empty arrays to not get default controls/interactions because we have our own directives
        this.controls = [];
        this.interactions = [];
        this.onClick = new EventEmitter();
        this.onDblClick = new EventEmitter();
        this.onMoveEnd = new EventEmitter();
        this.onPointerDrag = new EventEmitter();
        this.onPointerMove = new EventEmitter();
        this.onPostCompose = new EventEmitter();
        this.onPostRender = new EventEmitter();
        this.onPreCompose = new EventEmitter();
        this.onPropertyChange = new EventEmitter();
        this.onSingleClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MapComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log('creating ol.Map instance with:', this);
        this.instance = new Map(this);
        this.instance.setTarget(this.host.nativeElement.firstElementChild);
        this.instance.on('click', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onClick.emit(event); }));
        this.instance.on('dblclick', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onDblClick.emit(event); }));
        this.instance.on('moveend', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onMoveEnd.emit(event); }));
        this.instance.on('pointerdrag', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPointerDrag.emit(event); }));
        this.instance.on('pointermove', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPointerMove.emit(event); }));
        this.instance.on('postcompose', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPostCompose.emit(event); }));
        this.instance.on('postrender', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPostRender.emit(event); }));
        this.instance.on('precompose', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPreCompose.emit(event); }));
        this.instance.on('propertychange', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPropertyChange.emit(event); }));
        this.instance.on('singleclick', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onSingleClick.emit(event); }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MapComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-map, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    /**
     * @return {?}
     */
    MapComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.instance.updateSize();
    };
    MapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-map',
                    template: "\n    <div [style.width]=\"width\" [style.height]=\"height\" tabindex=\"-1\"></div>\n    <ng-content></ng-content>\n  "
                }] }
    ];
    /** @nocollapse */
    MapComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MapComponent.propDecorators = {
        width: [{ type: Input }],
        height: [{ type: Input }],
        pixelRatio: [{ type: Input }],
        keyboardEventTarget: [{ type: Input }],
        loadTilesWhileAnimating: [{ type: Input }],
        loadTilesWhileInteracting: [{ type: Input }],
        logo: [{ type: Input }],
        renderer: [{ type: Input }],
        onClick: [{ type: Output }],
        onDblClick: [{ type: Output }],
        onMoveEnd: [{ type: Output }],
        onPointerDrag: [{ type: Output }],
        onPointerMove: [{ type: Output }],
        onPostCompose: [{ type: Output }],
        onPostRender: [{ type: Output }],
        onPreCompose: [{ type: Output }],
        onPropertyChange: [{ type: Output }],
        onSingleClick: [{ type: Output }]
    };
    return MapComponent;
}());
export { MapComponent };
if (false) {
    /** @type {?} */
    MapComponent.prototype.instance;
    /** @type {?} */
    MapComponent.prototype.componentType;
    /** @type {?} */
    MapComponent.prototype.width;
    /** @type {?} */
    MapComponent.prototype.height;
    /** @type {?} */
    MapComponent.prototype.pixelRatio;
    /** @type {?} */
    MapComponent.prototype.keyboardEventTarget;
    /** @type {?} */
    MapComponent.prototype.loadTilesWhileAnimating;
    /** @type {?} */
    MapComponent.prototype.loadTilesWhileInteracting;
    /** @type {?} */
    MapComponent.prototype.logo;
    /** @type {?} */
    MapComponent.prototype.renderer;
    /** @type {?} */
    MapComponent.prototype.onClick;
    /** @type {?} */
    MapComponent.prototype.onDblClick;
    /** @type {?} */
    MapComponent.prototype.onMoveEnd;
    /** @type {?} */
    MapComponent.prototype.onPointerDrag;
    /** @type {?} */
    MapComponent.prototype.onPointerMove;
    /** @type {?} */
    MapComponent.prototype.onPostCompose;
    /** @type {?} */
    MapComponent.prototype.onPostRender;
    /** @type {?} */
    MapComponent.prototype.onPreCompose;
    /** @type {?} */
    MapComponent.prototype.onPropertyChange;
    /** @type {?} */
    MapComponent.prototype.onSingleClick;
    /** @type {?} */
    MapComponent.prototype.controls;
    /** @type {?} */
    MapComponent.prototype.interactions;
    /**
     * @type {?}
     * @private
     */
    MapComponent.prototype.host;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL21hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxHQUliLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sR0FBRyxNQUFNLFFBQVEsQ0FBQztBQVF6QjtJQXFERSxzQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQTVDN0Isa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHN0IsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUVmLFdBQU0sR0FBRyxNQUFNLENBQUM7O1FBb0NoQixhQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQWtCLEVBQUUsQ0FBQztRQUcvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDekQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUN6RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFD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LG9GQUFvRjtRQUNwRixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELHNDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Z0JBbEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLHdIQUdUO2lCQUNGOzs7O2dCQXRCQyxVQUFVOzs7d0JBMkJULEtBQUs7eUJBRUwsS0FBSzs2QkFFTCxLQUFLO3NDQUVMLEtBQUs7MENBRUwsS0FBSzs0Q0FFTCxLQUFLO3VCQUVMLEtBQUs7MkJBRUwsS0FBSzswQkFHTCxNQUFNOzZCQUVOLE1BQU07NEJBRU4sTUFBTTtnQ0FFTixNQUFNO2dDQUVOLE1BQU07Z0NBRU4sTUFBTTsrQkFFTixNQUFNOytCQUVOLE1BQU07bUNBRU4sTUFBTTtnQ0FFTixNQUFNOztJQXFEVCxtQkFBQztDQUFBLEFBbkdELElBbUdDO1NBNUZZLFlBQVk7OztJQUN2QixnQ0FBcUI7O0lBQ3JCLHFDQUE2Qjs7SUFFN0IsNkJBQ2U7O0lBQ2YsOEJBQ2dCOztJQUNoQixrQ0FDbUI7O0lBQ25CLDJDQUNzQzs7SUFDdEMsK0NBQ2lDOztJQUNqQyxpREFDbUM7O0lBQ25DLDRCQUN1Qjs7SUFDdkIsZ0NBQzZCOztJQUU3QiwrQkFDdUM7O0lBQ3ZDLGtDQUMwQzs7SUFDMUMsaUNBQ2tDOztJQUNsQyxxQ0FDNkM7O0lBQzdDLHFDQUM2Qzs7SUFDN0MscUNBQ3lDOztJQUN6QyxvQ0FDcUM7O0lBQ3JDLG9DQUN3Qzs7SUFDeEMsd0NBQzRDOztJQUM1QyxxQ0FDNkM7O0lBRzdDLGdDQUF5Qjs7SUFDekIsb0NBQWlDOzs7OztJQUVyQiw0QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBBZnRlclZpZXdJbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IE1hcCBmcm9tICdvbC9NYXAnO1xuaW1wb3J0IE1hcEJyb3dzZXJFdmVudCBmcm9tICdvbC9NYXBCcm93c2VyRXZlbnQnO1xuaW1wb3J0IE1hcEV2ZW50IGZyb20gJ29sL01hcEV2ZW50JztcbmltcG9ydCBPYmplY3RFdmVudCBmcm9tICdvbC9PYmplY3QnO1xuaW1wb3J0IFJlbmRlckV2ZW50IGZyb20gJ29sL3JlbmRlci9FdmVudCc7XG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnb2wvY29udHJvbCc7XG5pbXBvcnQgeyBJbnRlcmFjdGlvbiB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLW1hcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbc3R5bGUud2lkdGhdPVwid2lkdGhcIiBbc3R5bGUuaGVpZ2h0XT1cImhlaWdodFwiIHRhYmluZGV4PVwiLTFcIj48L2Rpdj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgcHVibGljIGluc3RhbmNlOiBNYXA7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ21hcCc7XG5cbiAgQElucHV0KClcbiAgd2lkdGggPSAnMTAwJSc7XG4gIEBJbnB1dCgpXG4gIGhlaWdodCA9ICcxMDAlJztcbiAgQElucHV0KClcbiAgcGl4ZWxSYXRpbzogbnVtYmVyO1xuICBASW5wdXQoKVxuICBrZXlib2FyZEV2ZW50VGFyZ2V0OiBFbGVtZW50IHwgc3RyaW5nO1xuICBASW5wdXQoKVxuICBsb2FkVGlsZXNXaGlsZUFuaW1hdGluZzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbG9hZFRpbGVzV2hpbGVJbnRlcmFjdGluZzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbG9nbzogc3RyaW5nIHwgYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcmVuZGVyZXI6ICdjYW52YXMnIHwgJ3dlYmdsJztcblxuICBAT3V0cHV0KClcbiAgb25DbGljazogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XG4gIEBPdXRwdXQoKVxuICBvbkRibENsaWNrOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIG9uTW92ZUVuZDogRXZlbnRFbWl0dGVyPE1hcEV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIG9uUG9pbnRlckRyYWc6IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgb25Qb2ludGVyTW92ZTogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XG4gIEBPdXRwdXQoKVxuICBvblBvc3RDb21wb3NlOiBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgb25Qb3N0UmVuZGVyOiBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgb25QcmVDb21wb3NlOiBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgb25Qcm9wZXJ0eUNoYW5nZTogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIG9uU2luZ2xlQ2xpY2s6IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+O1xuXG4gIC8vIHdlIHBhc3MgZW1wdHkgYXJyYXlzIHRvIG5vdCBnZXQgZGVmYXVsdCBjb250cm9scy9pbnRlcmFjdGlvbnMgYmVjYXVzZSB3ZSBoYXZlIG91ciBvd24gZGlyZWN0aXZlc1xuICBjb250cm9sczogQ29udHJvbFtdID0gW107XG4gIGludGVyYWN0aW9uczogSW50ZXJhY3Rpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaG9zdDogRWxlbWVudFJlZikge1xuICAgIHRoaXMub25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PigpO1xuICAgIHRoaXMub25EYmxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PigpO1xuICAgIHRoaXMub25Nb3ZlRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBFdmVudD4oKTtcbiAgICB0aGlzLm9uUG9pbnRlckRyYWcgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD4oKTtcbiAgICB0aGlzLm9uUG9pbnRlck1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD4oKTtcbiAgICB0aGlzLm9uUG9zdENvbXBvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJlbmRlckV2ZW50PigpO1xuICAgIHRoaXMub25Qb3N0UmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBFdmVudD4oKTtcbiAgICB0aGlzLm9uUHJlQ29tcG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+KCk7XG4gICAgdGhpcy5vblByb3BlcnR5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcbiAgICB0aGlzLm9uU2luZ2xlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD4oKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5NYXAgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1hcCh0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLnNldFRhcmdldCh0aGlzLmhvc3QubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2xpY2snLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudCkgPT4gdGhpcy5vbkNsaWNrLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdkYmxjbGljaycsIChldmVudDogTWFwQnJvd3NlckV2ZW50KSA9PiB0aGlzLm9uRGJsQ2xpY2suZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ21vdmVlbmQnLCAoZXZlbnQ6IE1hcEV2ZW50KSA9PiB0aGlzLm9uTW92ZUVuZC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncG9pbnRlcmRyYWcnLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudCkgPT4gdGhpcy5vblBvaW50ZXJEcmFnLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb2ludGVybW92ZScsIChldmVudDogTWFwQnJvd3NlckV2ZW50KSA9PiB0aGlzLm9uUG9pbnRlck1vdmUuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Bvc3Rjb21wb3NlJywgKGV2ZW50OiBSZW5kZXJFdmVudCkgPT4gdGhpcy5vblBvc3RDb21wb3NlLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0cmVuZGVyJywgKGV2ZW50OiBNYXBFdmVudCkgPT4gdGhpcy5vblBvc3RSZW5kZXIuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3ByZWNvbXBvc2UnLCAoZXZlbnQ6IFJlbmRlckV2ZW50KSA9PiB0aGlzLm9uUHJlQ29tcG9zZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLm9uUHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NpbmdsZWNsaWNrJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMub25TaW5nbGVDbGljay5lbWl0KGV2ZW50KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLW1hcCwgc2V0dGluZyBuZXcgcHJvcGVydGllczogJywgcHJvcGVydGllcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGZhbHNlKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZVNpemUoKTtcbiAgfVxufVxuIl19