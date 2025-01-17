import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { Layer } from 'ol/layer';
import { Feature } from 'ol';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Style, RegularShape, Fill, Stroke } from 'ol/style';
import { Geometry, Point, LineString } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import { MapComponent } from '../map.component';
import { Extent, Coordinate } from '../models';
import { fromLonLatArray, mapifyCoords } from '../util';
import { AsyncSubject } from 'rxjs';


// ** Freeboard Vessel component **
@Component({
  selector: 'ol-map > fb-vessel',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VesselComponent implements OnInit, OnDestroy, OnChanges {

  protected layer: Layer;
  public source: VectorSource;
  protected features: Array<Feature>;

  /**
   * This event is triggered after the layer is initialized
   * Use this to have access to the layer and some helper functions
   */
  @Output() layerReady: AsyncSubject<Layer> = new AsyncSubject(); // AsyncSubject will only store the last value, and only publish it when the sequence is completed

  @Input() id: string;
  @Input() activeId: string;
  @Input() position: Coordinate;
  @Input() heading: number= 0;
  @Input() vesselStyles: {[key:string]: Style};
  @Input() vesselLines: {[key:string]: Array<Coordinate>};
  @Input() showWind: boolean= false;
  @Input() opacity: number;
  @Input() visible: boolean;
  @Input() extent: Extent;
  @Input() zIndex: number;
  @Input() minResolution: number;
  @Input() maxResolution: number;
  @Input() layerProperties: { [index: string]: any };

  vessel: Feature;
  twdLine: Feature;
  awaLine: Feature;
  headingLine: Feature;

  constructor(protected changeDetectorRef: ChangeDetectorRef,
              protected mapComponent: MapComponent) {
    this.changeDetectorRef.detach();
  }

  ngOnInit() {
    let fa= []
    this.parseVessel();
    if(this.vessel) { fa.push(this.vessel) }
    this.renderVesselLines();
    if(this.headingLine) { fa.push(this.headingLine) }
    if(this.twdLine) { fa.push(this.twdLine) }
    if(this.awaLine) { fa.push(this.awaLine) }

    this.source = new VectorSource({features: fa });
    this.layer = new VectorLayer(Object.assign(this, {...this.layerProperties}));

    const map = this.mapComponent.getMap();
    if(this.layer && map) {
      map.addLayer(this.layer);
      map.render();
      this.layerReady.next(this.layer);
      this.layerReady.complete();
    }

  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.layer) {
      const properties: { [index: string]: any } = {};

      for(const key in changes) {
        if(key=='id' || key=='activeId' || key=='position' || key=='heading') {
          if(this.source) { 
            this.parseVessel();
          }
        }
        else if( key=='vesselLines' || key=='showWind') { 
          if(this.source) { 
            this.renderVesselLines();
          }
        }
        else if( key=='vesselStyles') { 
          if(this.source) { 
            this.parseVessel();
          }
        }
        else if( key=='layerProperties') { 
          this.layer.setProperties(properties, false);
        }
        else {
          properties[key] = changes[key].currentValue;
        }
      }
      this.layer.setProperties(properties, false);
    }
  }

  ngOnDestroy() {
    const map = this.mapComponent.getMap();
    if (this.layer && map) {
      map.removeLayer(this.layer);
      map.render();
      this.layer = null;
    }
  }

  parseVessel() {
    if(!this.vessel) { // create feature
      this.vessel= new Feature( new Point(
        fromLonLat([
          this.position[0] ?? 0,
          this.position[1] ?? 0
        ])
      ) );
    }
    //update feature
    if(this.position && Array.isArray(this.position) && this.position.length>1) {
      let g:Geometry= this.vessel.getGeometry();
      (g as Point).setCoordinates( fromLonLat([
        this.position[0],
        this.position[1]
      ]) );
    }
    this.vessel.setId(this.id ?? 'self');
    let s= this.buildStyle();
    if(s) {
      let im= (s as Style).getImage();
      if(im) { im.setRotation(this.heading) };
      this.vessel.setStyle(s);
    }
  }

  // build target style
  buildStyle():Style {
    let cs= new Style({ // default style               
      image: new RegularShape({
        points: 3,
        radius: 15, 
        fill: new Fill({ color: 'red' }),
        stroke: new Stroke({
          color: 'black',
          width: 3
        }),
        rotateWithView: true,
        rotation: this.heading ?? 0
      })
    });

    if(this.vesselStyles) { 
      if(this.activeId && this.activeId!= this.id) {
        if(this.vesselStyles.inactive) {
          cs= this.vesselStyles.inactive;
        }
      } 
      else {
        if(this.vesselStyles.default) {
          cs= this.vesselStyles.default; 
        }
      }
    }
    else if(this.layerProperties && this.layerProperties.style) { 
      cs= this.layerProperties.style 
    }

    return cs
  }

  // remove feature from layer
  removeFeature(f: Feature) {
    if(this.source) {
      this.source.removeFeature(f);
    }
  }

  renderVesselLines() {
    if(!this.vesselLines) { return }
    if( 'heading' in this.vesselLines) {
      this.headingLine= this.updateLine(this.headingLine, this.vesselLines.heading);
      this.headingLine.setStyle( new Style({
        stroke: new Stroke({ color: 'rgba(221, 99, 0, 0.5)', width: 4 })
      }) );
    }
    else {
      this.removeFeature(this.headingLine);
    }
    if('twd' in this.vesselLines) {
      this.twdLine= this.updateLine(this.twdLine, this.vesselLines.twd);
      this.twdLine.setStyle( new Style({
        stroke: new Stroke({ color: `rgb(128, 128, 0, ${this.showWind ? 1 : 0})`, width: 2 })
      }) );
    }
    else {
      this.removeFeature(this.twdLine);
    }
    if('awa' in this.vesselLines) {
      this.awaLine= this.updateLine(this.awaLine, this.vesselLines.awa);
      this.awaLine.setStyle( new Style({
        stroke: new Stroke({ color: `rgb(16, 75, 16, ${this.showWind ? 1 : 0})`, width: 1 })
      }) );
    }
    else {
      this.removeFeature(this.awaLine);
    }
  }

  // ** update line geometry **
  updateLine(lf: Feature, coords: Array<Coordinate>) {
    if(!coords || !Array.isArray(coords)) { return }
    if(!lf) { // create feature
      lf= new Feature( new LineString(
        fromLonLatArray(mapifyCoords(coords))
      ) );
    }
    else { 
      let g:any= lf.getGeometry();
      g.setCoordinates( fromLonLatArray(mapifyCoords(coords)) );
    }
    return lf;
  }

}
