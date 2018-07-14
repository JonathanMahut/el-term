import { AngularSplitModule } from 'angular-split';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ContextMenuModule } from 'ngx-contextmenu';
import { DndModule } from 'ngx-drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LibModule } from 'ellib';
import { MatButtonModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * A barrel of all the modules we use everywhere
 */

const MODULES = [
  AngularSplitModule,
  BrowserModule,
  BrowserAnimationsModule,
  CommonModule,
  ContextMenuModule,
  DndModule,
  FontAwesomeModule,
  LibModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatTooltipModule,
  NgxElectronModule,
  ReactiveFormsModule
];

@NgModule({

  imports: [
    ...MODULES
  ],

  exports: [
    ...MODULES
  ],

})

export class BarrelModule { }
