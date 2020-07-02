import { Component, OnInit } from '@angular/core';
import {Server} from '../../shared/server';

const SAMPLE_SERVERS: Server[] = [
  {
    id: 1,
    name: 'server-1',
    isOnline: true,
  },
  {
    id: 2,
    name: 'server-2',
    isOnline: false,
  },
  {
    id: 3,
    name: 'server-3',
    isOnline: true,
  },
];

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.scss']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }
  public servers: Server[] = SAMPLE_SERVERS;
  ngOnInit() {
  }

}
