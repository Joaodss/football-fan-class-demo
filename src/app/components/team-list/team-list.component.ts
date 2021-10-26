import { Component, OnInit } from '@angular/core';
import { Fan } from 'src/app/models/fan.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  fanName: string;
  fanAge: number;
  fanCountry: string;
  fanPictureUrl: string;
  selectedTeam: string;

  realMadridFanList: Array<Fan>;
  barcelonaFanList: Array<Fan>;

  constructor() {
    this.fanName = '';
    this.fanAge = 0;
    this.fanCountry = '';
    this.fanPictureUrl = '';
    this.selectedTeam = '';
    this.realMadridFanList = [];
    this.barcelonaFanList = [];
  }

  addNewFan(): void {
    const fan: Fan = new Fan(
      this.fanName,
      this.fanAge,
      this.fanCountry,
      this.fanPictureUrl.trim() !== '' ? this.fanPictureUrl : undefined
    );

    if (this.selectedTeam === 'Madrid') {
      this.realMadridFanList.push(fan);
    } else {
      this.barcelonaFanList.push(fan);
    }
  }

  removeFan(index: number, team: string): void {
    if (team === 'Madrid') {
      this.realMadridFanList.splice(index, 1);
    } else {
      this.barcelonaFanList.splice(index, 1);
    }
  }

  ngOnInit(): void {}
}
