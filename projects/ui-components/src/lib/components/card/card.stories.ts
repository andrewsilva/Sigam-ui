import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { CardModule } from 'primeng/card';
import { CardComponent } from './card.component';

export default {
  title: 'SIGAM/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [CardModule],
      declarations: [CardComponent],
    }),
  ],
} as Meta<CardComponent>;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  subtitle: 'Card Subtitle',
  footer: 'Card Footer',
};

export const WithoutFooter = Template.bind({});
WithoutFooter.args = {
  ...Default.args,
  footer: '',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Only Title',
};
