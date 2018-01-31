import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

import {BuoyData} from '../../models/BuoyData';
import {toPromise} from 'rxjs/operator/toPromise';

@Injectable()
export class BuoyDataService {

    private buoyEndpoint = 'api/lakeinfo';

    constructor() {
    }

    getAll(version: number, name: string): BuoyData[] {
        // const fullEndpoint = `${this.buoyEndpoint}/${name}?version=${version}`;

        // return this.http.get(fullEndpoint)
        //     .toPromise()
        //     .then((response) => response.json() as BuoyData[]);

        const response: BuoyData[] = [
                {
                    MDA: 'Safe',
                    pH: 7.00,
                    turbidity: 45,
                    salinity: 28
                },
                {
                    MDA: 'Warn',
                    pH: 10.00,
                    turbidity: 98,
                    salinity: 12
                },
                {
                    MDA: 'Deadly',
                    pH: 2.00,
                    turbidity: 13,
                    salinity: 79
                }
            ];

        return response;
    }
}
