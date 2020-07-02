import { Component, OnInit } from '@angular/core';
import {Order} from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.scss']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  public orders: Order[] = [
    {
      id: 1,
      customer: {id: 11, name: 'User 1', state: 'CO', email: 'teszt@teszt1.com'},
      total: 230,
      placed: new Date(2019, 11, 1),
      fulfilled: new Date(2019, 11, 2),
      status: 'Complete'
    },
    {
      id: 2,
      customer: {id: 22, name: 'User 2', state: 'CO', email: 'teszt@teszt2.com'},
      total: 230,
      placed: new Date(2019, 11, 1),
      fulfilled: new Date(2019, 11, 2),
      status: 'Complete'
    },
    {
      id: 3,
      customer: {id: 33, name: 'User 3', state: 'CO', email: 'teszt@teszt3.com'},
      total: 230,
      placed: new Date(2019, 11, 1),
      fulfilled: new Date(2019, 11, 2),
      status: 'Complete'
    },
    {
      id: 4,
      customer: {id: 44, name: 'User 4', state: 'CO', email: 'teszt@teszt4.com'},
      total: 230,
      placed: new Date(2019, 11, 1),
      fulfilled: new Date(2019, 11, 2),
      status: 'Complete'
    },
    {
      id: 5,
      customer: {id: 55, name: 'User 5', state: 'CO', email: 'teszt@teszt5.com'},
      total: 230,
      placed: new Date(2019, 11, 1),
      fulfilled: new Date(2019, 11, 2),
      status: 'Complete'
    }
  ];

  ngOnInit() {
  }

}
