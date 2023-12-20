import { Component, ViewChild } from '@angular/core';
import { MenuItem, SortEvent } from 'primeng/api';
import { ToastComponent } from '../../../ui-components/src/lib/components/toast/toast.component';

export interface TableColumn {
  header: string; // O nome a ser exibido no cabeçalho da coluna
  field: string;  // A chave correspondente no objeto de dados
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;

  // Método para disparar o toast
  showCustomToast(): void {
    this.toastComponent?.showToast();
  }

  date?: Date; // A propriedade que será vinculada ao ngModel do sigam-calendar

  // O método que será chamado quando a data mudar
  onDateChange(event: Date) {
    this.date = event; // Atualize a propriedade da data com o valor recebido do evento
    // Você pode executar mais lógica aqui, se necessário
  }

  citiesM = [
    {nome: 'New York', code: 'NY'},
    {nome: 'Rome', code: 'RM'},
    {nome: 'London', code: 'LDN'},
    // ... outras cidades
  ];

  // As opções selecionadas
  selectedCities: any[] = [];

  // Método para lidar com mudanças na seleção
  onCitiesChange(selectedCities: any[]) {
    this.selectedCities = selectedCities;
    // Aqui você pode implementar mais lógica, como fazer algo com as cidades selecionadas
  }

  columns: TableColumn[] = [
    { header: 'Code', field: 'code' },
    { header: 'Name', field: 'name' },
    { header: 'teste', field: 'name' },
    { header: 'andrew', field: 'name' },
    // ... outras colunas
  ];

  products = [
    { code: 'P1001', name: 'Product 1', },
    { code: 'P1002', name: 'Product 2', },
    { code: 'P1001', name: 'Product 1', },
    { code: 'P1002', name: 'Product 2', }
    // ... outros dado
  ];


  itemsMenu?: MenuItem[]; // Define os itens do menu
  activeItem: MenuItem; // Mantém o estado do item ativo

  constructor() {
    // Inicializa os itens do menu
    this.itemsMenu = [
      {label: 'Item 1', icon: 'pi pi-fw pi-home'},
      {label: 'Item 2', icon: 'pi pi-fw pi-calendar'},
      // ... outros itens do menu
    ];

    // Define o item ativo inicialmente, se necessário
    this.activeItem = this.itemsMenu[0];

  }

  handleActiveItemChange(activeItem: MenuItem) {
    this.activeItem = activeItem;
  }

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
