import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownComponent } from './dropdown.component';

export default {
  title: 'SIGAM/Dropdown',
  component: DropdownComponent,
  decorators: [
    moduleMetadata({
      declarations: [DropdownComponent],
      imports: [FormsModule, DropdownModule, BrowserAnimationsModule],
    }),
  ],
} as Meta<DropdownComponent>;

const Template: Story<DropdownComponent> = (args: DropdownComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  options: [{name: 'Option 1', value: 1}, {name: 'Option 2', value: 2}],
  selectedOption: null,
  showClear: true,
  placeholder: 'Select an option',
};

export const WithPreselectedOption = Template.bind({});
WithPreselectedOption.args = {
  ...Default.args,
  selectedOption: {name: 'Option 2', value: 2},
};
