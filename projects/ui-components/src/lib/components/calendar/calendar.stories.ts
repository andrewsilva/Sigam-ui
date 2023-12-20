import { FormsModule } from '@angular/forms';
import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { CalendarModule } from 'primeng/calendar';
import { CalendarComponent } from './calendar.component';

export default {
  title: 'SIGAM/Calendar',
  component: CalendarComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, CalendarModule],
      declarations: [CalendarComponent],
    }),
  ],
} as Meta<CalendarComponent>;

const Template: Story<CalendarComponent> = (args: CalendarComponent) => ({
  component: CalendarComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  dateFormat: 'dd/mm/yy',
};

export const WithPresetDate = Template.bind({});
WithPresetDate.args = {
  ...Default.args,
  dateValue: new Date(),
};
