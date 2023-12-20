import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { MultiSelectModule } from 'primeng/multiselect';
import { MultiselectComponent } from './multiselect.component';

export default {
  title: 'SIGAM/MultiSelect',
  component: MultiselectComponent,
  decorators: [
    moduleMetadata({
      declarations: [MultiselectComponent],
      imports: [FormsModule, MultiSelectModule, BrowserAnimationsModule],
    }),
  ],
} as Meta<MultiselectComponent>;

const Template: Story<MultiselectComponent> = (args: MultiselectComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  options: [
    {label: 'Option 1', value: 'opt1'},
    {label: 'Option 2', value: 'opt2'},
    {label: 'Option 3', value: 'opt3'}
  ],
  optionLabel: 'label',
  selectedValues: [],
};
