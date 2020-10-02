import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {BrowserModule} from '@angular/platform-browser';
import {OwlModule} from 'ngx-owl-carousel';


@NgModule({
    declarations: [
        AppComponent,
        AdminLayoutComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        RouterModule.forRoot(AppRoutes, {
            useHash: true,
            onSameUrlNavigation: 'reload',
            scrollPositionRestoration: 'enabled'
        }),
        SidebarModule,
        ToastrModule.forRoot(),
        FooterModule,
        FixedPluginModule,
        OwlModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
