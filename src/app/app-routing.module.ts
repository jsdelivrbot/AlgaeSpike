import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './Lakes/pages/dashboard/dashboard.component';
import {BuoyDataComponent} from './Lakes/pages/buoyData/buoyData.component';

const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: '/api/upload_data', component: BuoyDataComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class AppRoutingModule {
}
