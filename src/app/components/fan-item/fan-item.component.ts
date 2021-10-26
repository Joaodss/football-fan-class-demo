import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fan } from 'src/app/models/fan.model';

@Component({
  selector: 'app-fan-item',
  templateUrl: './fan-item.component.html',
  styleUrls: ['./fan-item.component.css'],
})
export class FanItemComponent implements OnInit {
  @Input() index!: number;
  @Input() fan!: Fan;
  @Output() fanRemoved = new EventEmitter<number>();

  constructor() {}

  removeFan(index: number): void {
    this.fanRemoved.emit(index);
  }

  ngOnInit(): void {}
}
