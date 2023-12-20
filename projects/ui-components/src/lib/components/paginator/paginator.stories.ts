import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { PaginatorModule } from 'primeng/paginator';
import { PaginatorComponent } from './paginator.component';

export default {
  title: 'SIGAM/Paginator',
  component: PaginatorComponent,
  decorators: [
    moduleMetadata({
      declarations: [PaginatorComponent],
      imports: [PaginatorModule],
    }),
  ],
} as Meta<PaginatorComponent>;

const Template: Story<PaginatorComponent> = (args: PaginatorComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  first: 0,
  rows: 10,
  totalRecords: 100,
  rowsPerPageOptions: [10, 20, 30, 50],
};
