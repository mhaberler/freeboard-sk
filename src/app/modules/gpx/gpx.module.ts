/*****************************
 * GPX to Signal K components
 *****************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

// ** components **

import { GPXImportDialog } from './gpxload/import-dialog';
import { GPXExportDialog } from './gpxsave/export-dialog';


@NgModule({
    imports: [
        CommonModule, FormsModule, 
        MatDialogModule, MatIconModule, MatButtonModule, MatCardModule,
        MatExpansionModule, MatCheckboxModule,
        MatTooltipModule, MatToolbarModule,
        MatFormFieldModule, MatInputModule
      ],    
    declarations: [
        GPXImportDialog, GPXExportDialog
    ],
    exports: [
        GPXImportDialog, GPXExportDialog
    ],
    entryComponents: [
        GPXImportDialog, GPXExportDialog
    ], 
    providers: []  
})
export class GPXModule {}

export * from './gpxload/import-dialog';
export * from './gpxsave/export-dialog';
