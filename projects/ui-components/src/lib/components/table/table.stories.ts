import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { TableModule } from 'primeng/table';
import { TableComponent } from './table.component';

export default {
  title: 'SIGAM/Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      declarations: [TableComponent],
      imports: [TableModule],
    }),
  ],
} as Meta<TableComponent>;

const Template: Story<TableComponent> = (args: TableComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  columns: [
    { header: 'Name', field: 'name' },
    { header: 'Age', field: 'age' }
  ],
  data: [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Doe', age: 25 }
  ],
};
