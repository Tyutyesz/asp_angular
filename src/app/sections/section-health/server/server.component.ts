import {Component, Input, OnInit} from '@angular/core';
import {Server} from '../../../shared/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  @Input() serverInput: Server;

  constructor() { }

  private color: string;
  private buttonText: string;

  ngOnInit() {
    this.setServerStatus(this.serverInput.isOnline);
  }

  setServerStatus(isOnline: boolean) {
    if (isOnline) {
      this.serverInput.isOnline = true;
      this.color = '#66bb6a';
      this.buttonText = 'Shut Down';
    } else {
      this.serverInput.isOnline = false;
      this.color = '#ff6b6b';
      this.buttonText = 'Start';
    }
  }

  toggleStatus(onlineStatus: boolean) {
    this.setServerStatus(!onlineStatus);
  }

}
