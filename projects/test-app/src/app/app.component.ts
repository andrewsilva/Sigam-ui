import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem, SortEvent } from 'primeng/api';
import { SigamButtonModule } from '../../../ui-components/src/lib/components/button/button.module';
import { SigamCardModule } from '../../../ui-components/src/lib/components/card/card.module';
import { SigamCheckboxModule } from '../../../ui-components/src/lib/components/checkbox/checkbox.module';
import { SigamConfirmboxModule } from '../../../ui-components/src/lib/components/confirmbox/confirmbox.module';
import { SigamDropdownModule } from '../../../ui-components/src/lib/components/dropdown/dropdown.module';
import { SigamNavModule } from '../../../ui-components/src/lib/components/nav/nav.module';
import { SigamPaginatorModule } from '../../../ui-components/src/lib/components/paginator/paginator.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SigamButtonModule, SigamCardModule, SigamNavModule, SigamCheckboxModule, FormsModule, SigamDropdownModule, SigamPaginatorModule, SigamConfirmboxModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  first = 0;
  rows = 10;
  totalRecords = 120;

  onPageChange(event: any) {
    console.log('Página atual:', event.page);
    // Atualize a lógica de paginação aqui
  }

  cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
  ];

  selectedCity: any;

  onCityChange(newCity: any) {
    console.log('Selected city:', newCity);
    this.selectedCity = newCity;
  }

  pizzaIngredient: { [key: string]: boolean } = {
    Cheese: false,
    Mushroom: false,
    Pepper: false,
    Onion: false
  };

  onCheckboxChange(ingredient: string, isChecked: boolean) {
    this.pizzaIngredient[ingredient] = isChecked;
    console.log(`Ingredient ${ingredient} is now: ${isChecked}`);
  }

  data: any[] = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
    { id: 2, name: 'Hammer', category: 'Hardware', price: 25 },
    { id: 3, name: 'Blender', category: 'Home Appliances', price: 75 },
    { id: 4, name: 'T-shirt', category: 'Clothing', price: 20 },
    // ... more data objects
  ];

  loading: boolean = false; // Set true when fetching data

  handleSort(event: SortEvent) {
    // Implement your sort logic here, for example:

  }
  items: MenuItem[] = [
    {
      label: 'File',
      items: [{
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [
          {label: 'Project'},
          {label: 'Other'},
        ]
      },
      {label: 'Open'},
      {label: 'Quit'}
    ]},
    {
      label: 'Outra coisa',
      items: [{
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [
          {label: 'Project'},
          {label: 'Other'},
        ]
      },
      {label: 'Open'},
      {label: 'Quit'}
    ]}
    // ... other items
  ];
}
