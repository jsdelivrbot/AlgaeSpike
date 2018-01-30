import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './Lakes/pages/dashboard/dashboard.component';
import {BuoyDataComponent} from './Lakes/pages/buoyData/buoyData.component';

import {ProfileComponent} from './Lakes/pages/profile/profile.component';

const routes: Routes = [
    {path: '', component: ProfileComponent},
    {path: '/api/upload_data', component: BuoyDataComponent},
    {path: 'dashboard', component: DashboardComponent}
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
