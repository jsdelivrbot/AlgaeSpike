import {Component, OnInit} from '@angular/core';
import {BuoyData} from '../../models/BuoyData';
import {BuoyDataService} from '../../services/buoyData/buoyData.service';
import {ActivatedRoute, Router} from '@angular/router';
import { version } from '../sharedInfo/versionNumber';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    protected buoyData: BuoyData[];
    public lakeName: string;

    public lakePicture: any;

    constructor(
        private buoyDataService: BuoyDataService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.lakeName = params['name'];



            this.buoyData = this.buoyDataService.getAll(version, this.lakeName);
                // .then((result) => this.buoyData = result);
        });
    }

    getBuoyData() {
        if (this.buoyData === null || this.buoyData === undefined) {
            return [];
        }

        return this.buoyData;
    }
}
