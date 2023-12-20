import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from './button.component';

export default {
  title: 'SIGAM/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [BrowserAnimationsModule, ButtonModule], // Adicionando o ButtonModule do PrimeNG
    }),
  ],
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  type: 'button',
  disabled: false,
  loading: false,
  raised: true,
  rounded: false,
  text: false,
  plain: false,
  outlined: false,
  size: 'large',
  link: false,
  style: { backgroundColor: 'blue', color: 'white' },
  styleClass: 'custom-class',
  // Adicione outros props conforme necessário
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  label: 'Disabled Button',
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Primary.args,
  label: 'Loading Button',
  loading: true,
};

// Continue adicionando mais variações do seu botão
