/*****************************
 * Experiments Module
 *****************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppUIModule } from 'src/app/lib/app-ui';

// ** components **
import { CourseSettingsModal } from './course-settings';

@NgModule({
    imports: [
        CommonModule, FormsModule, MatInputModule, MatSelectModule,
        MatBottomSheetModule, MatCardModule,
        MatIconModule, MatButtonModule, MatToolbarModule, MatCheckboxModule,
        MatTooltipModule, MatSlideToggleModule, MatDatepickerModule, 
        AppUIModule
      ],    
    declarations: [
        CourseSettingsModal
    ],
    exports: [
        CourseSettingsModal
    ],
    entryComponents: [ CourseSettingsModal ], 
    providers: []  
})
export class CourseModule {}

export * from './course-settings';

