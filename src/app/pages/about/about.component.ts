import {Component} from '@angular/core';

import { Tab} from '../../interfaces/tab';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  tabs: Tab[] = [
    {
      image: 'https://coaxsoft.com/images/svg/pricing_models/time_&_material.svg',
      title: 'TIME & MATERIAL',
      description: 'The Time & Material pricing model is good for complex projects that last particular time and can be\n' +
        'extended by the client. Through this model, customers pay an hourly rate that is signed in the contract.\n' +
        'Clients can revise the size of the team and the project duration to meet their needs and make the\n' +
        'project successful.',
      customHtml: '<a class=\"button is-link is-medium is-rounded has-text-weight-semibold is-uppercase\">Get Estimation Now</a>'
    },
    {
      image: 'https://coaxsoft.com/images/svg/pricing_models/fixed_price.svg',
      title: 'FIXED PRICE',
      description: 'The Fixed Price model suggests working fixed hours and getting paid fixed price for the work done. COAX\n' +
        'guarantees that development will be done on time and within the budget cost agreed with the customer.',
      customHtml: '<a class=\"button is-link is-medium is-rounded has-text-weight-semibold is-uppercase\">Get Estimation Now</a>'
    },
    {
      image: 'https://coaxsoft.com/images/svg/pricing_models/milestone_billing.svg',
      title: 'MILESTONE BILLING',
      description: 'The Milestone Billing model is built on monthly payments or other time schedules agreed with the\n' +
        'customer. This form of paying is good for big projects that are long lasting.',
      customHtml: '<a class=\"button is-link is-medium is-rounded has-text-weight-semibold is-uppercase\">Get Estimation Now</a>'
    },
    {
      image: 'https://coaxsoft.com/images/svg/pricing_models/dedicated_team.svg',
      title: 'DEDICATED TEAM',
      description: 'The Dedicated Team model works as an extension to the client’s own infrastructure and equipment. COAX\n' +
        'team members can work based on your development center. Such model is perfect for implementing new\n' +
        'frameworks on the client’s base and training specialists for the customer’s needs.',
      customHtml: '<a class=\"button is-link is-medium is-rounded has-text-weight-semibold is-uppercase\">Get Estimation Now</a>'
    }
  ];
}
