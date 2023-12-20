import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { MenubarModule } from 'primeng/menubar';
import { NavComponent } from './nav.component';

export default {
  title: 'SIGAM/Nav',
  component: NavComponent,
  decorators: [
    moduleMetadata({
      declarations: [NavComponent],
      imports: [MenubarModule],
    }),
  ],
} as Meta<NavComponent>;

const Template: Story<NavComponent> = (args: NavComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  model: [
    {
      label: 'File',
      items: [
        { label: 'New', icon: 'pi pi-fw pi-plus' },
        { label: 'Open', icon: 'pi pi-fw pi-download' }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: 'pi pi-fw pi-refresh' }
      ]
    }
  ],
};
