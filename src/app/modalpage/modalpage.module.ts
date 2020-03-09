import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalpagePageRoutingModule } from './modalpage-routing.module';

import { ModalpagePage } from './modalpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalpagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModalpagePage]
})
export class ModalpagePageModule {}
