import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  selectedCategory;
  categories = [
    {
      categoryTitle: 'web development',
      categoryIcon: 'https://coaxsoft.com/images/svg/technology/web_development.svg',
      categoryItems: [
        {
          itemName: 'Ruby on Rails',
          itemImage: 'https://coaxsoft.com/images/svg/technology/web_development/ruby_on_rails.svg'
        },
        {
          itemName: 'Sinatra',
          itemImage: 'https://coaxsoft.com/images/svg/technology/web_development/sinatra.svg'
        },
        {
          itemName: 'React.js',
          itemImage: 'https://coaxsoft.com/images/svg/technology/web_development/react.svg'
        },
        {
          itemName: 'Python',
          itemImage: 'https://coaxsoft.com/images/svg/technology/web_development/python.svg'
        },
        {
          itemName: 'Django',
          itemImage: 'https://coaxsoft.com/images/svg/technology/web_development/django.svg'
        },
        {
          itemName: 'Angular',
          itemImage: 'https://coaxsoft.com/images/svg/technology/web_development/angular.svg'
        },
        {
          itemName: 'Meteor.js',
          itemImage: 'https://coaxsoft.com/images/svg/technology/web_development/meteor.svg'
        },
        {
          itemName: 'PostgreSQL',
          itemImage: 'https://coaxsoft.com/images/svg/technology/web_development/postgre_sql.svg'
        },
        {
          itemName: 'MongoDB',
          itemImage: 'https://coaxsoft.com/images/svg/technology/web_development/mongo_db.svg'
        },
        {
          itemName: 'AI',
          itemImage: 'https://coaxsoft.com/images/svg/technology/web_development/ai.svg'
        }
      ]
    },
    {
      categoryTitle: 'mobile development',
      categoryIcon: 'https://coaxsoft.com/images/svg/technology/mobile_development.svg',
      categoryItems: [
        {
          itemName: 'React Native',
          itemImage: 'https://coaxsoft.com/images/svg/technology/web_development/react.svg'
        }
      ]
    },
    {
      categoryTitle: 'product design',
      categoryIcon: 'https://coaxsoft.com/images/svg/technology/product_design.svg',
      categoryItems: [
        {
          itemName: 'Branding',
          itemImage: 'https://coaxsoft.com/images/svg/technology/product_design/branding.svg'
        },
        {
          itemName: 'Interaction Design',
          itemImage: 'https://coaxsoft.com/images/svg/technology/product_design/interaction_design.svg'
        },
        {
          itemName: 'Ui Design',
          itemImage: 'https://coaxsoft.com/images/svg/technology/product_design/ui_design.svg'
        }
      ]
    }
  ];

  changeMenu(event, index) {
    // get all category item element
    const items = document.querySelectorAll('.category-item');

    // setting the category items of the hovered element
    this.selectedCategory = this.categories[index].categoryItems;

    // removing the className from the rest of the elements
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('is-hovered');
    }
    // adding the className to the current hovered element
    event.target.classList.add('is-hovered');
  }

  constructor() {
    this.selectedCategory = this.categories[0].categoryItems;
  }
}
