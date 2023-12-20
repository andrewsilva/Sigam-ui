import { ButtonComponent } from './../button/button.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SigamButtonModule } from '../button/button.module';
import { ToastComponent } from './toast.component';

export default {
  title: 'SIGAM/Toast',
  component: ToastComponent, ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ToastComponent],
      imports: [ToastModule, SigamButtonModule, BrowserAnimationsModule ],
      providers: [MessageService]
    }),
  ],
} as Meta<ToastComponent>;

const Template: Story<ToastComponent> = (args: ToastComponent) => ({
  props: args,
  template: `
    <sigam-toast [position]="position" [message]="message" #toastComp></sigam-toast>
    <sigam-button label="Show Toast" (click)="toastComp.showToast()"></sigam-button>
  `
});


export const Default = Template.bind({});
Default.args = {
  position: 'top-center',
  message: { severity: 'success', summary: 'Success Message', detail: 'This is a success message' }
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  message: { severity: 'error', summary: 'Error Message', detail: 'This is an error message' }
};

