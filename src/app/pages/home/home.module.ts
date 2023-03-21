import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {LogoutComponent} from "../../components/logout/logout.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule
    ],
    exports: [
        LogoutComponent
    ],
    declarations: [HomePage, LogoutComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
