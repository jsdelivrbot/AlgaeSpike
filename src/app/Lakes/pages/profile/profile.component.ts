import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LAKES} from '../../models/lakeData';
import {Lake} from '../../models/lake';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  listOfLakes = LAKES;
  ngOnInit() {}
}
