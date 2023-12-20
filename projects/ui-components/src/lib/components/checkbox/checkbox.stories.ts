import { FormsModule } from '@angular/forms';
import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { CheckboxModule } from 'primeng/checkbox';
import { CheckboxComponent } from './checkbox.component';

export default {
  title: 'SIGAM/Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      declarations: [CheckboxComponent],
      imports: [FormsModule, CheckboxModule],
    }),
  ],
} as Meta<CheckboxComponent>;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: args,
});

export const Unchecked = Template.bind({});
Unchecked.args = {
  label: 'Subscribe to newsletter',
  value: 'newsletter',
  inputId: 'checkbox1',
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  ...Unchecked.args,
  checked: true,
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  value: 'agreement',
  inputId: 'checkbox2',
};
