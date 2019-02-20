import { Component } from '@angular/core';
import { Tab } from '../../interfaces/tab';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tabs: Tab[] = [
    {
      image: 'https://coaxsoft.com/images/svg/software_engineering/startup_ventures.svg',
      title: 'Telecom',
      description: 'Our team of designers, programmers, and engineers work alongside leaders in the telecoms sector. Whether\n' +
        'you’re looking to develop new systems or improve upon your current technologies, COAX develops industry\n' +
        'leading support tools for telecoms organisations that help establish your brand as a market leader\n' +
        'operating at the edge of advancement.'
    },
    {
      image: 'https://coaxsoft.com/images/svg/software_engineering/e_commerce.svg',
      title: 'E-COMMERCE',
      description: 'Our talented COAX team will launch your E-Commerce platform at the cutting edge of innovation. We use\n' +
        'slick UI/UX design, develop eye-catching features, and utilize efficient inventory management systems to grab\n' +
        'more customers, increase sales and profitability, and improve brand recognition. All with powerful back-end\n' +
        'systems in place.'
    },
    {
      image: 'https://coaxsoft.com/images/svg/software_engineering/healthcare.svg',
      title: 'HEALTHCARE',
      description: 'The Healthcare and MedTech sectors require a steady, experienced hand. Whether you need to establish\n' +
        'secure databases or develop cloud-based applications that are HIPAA compliant, COAX has you covered for all your\n' +
        'specialist sector requirements. So, you can focus on what you do best - diagnosing, treating, and\n' +
        'improving the quality of life of your customers.'
    },
    {
      image: 'https://coaxsoft.com/images/svg/software_engineering/startup_ventures.svg',
      title: 'MONEY TRANSFER',
      description: 'Transferring money, while convenient, comes with potential risks. Whether it’s web, mobile, or social\n' +
        'mediabased, COAX is an expert in money transfer data protection and security. Which means you can confidently\n' +
        'rely on your technology with the assurance that your customers will put their trust in you, instead of your\n' +
        'competitors.'
    }
  ];
}
