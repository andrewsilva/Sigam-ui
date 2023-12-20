import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmboxComponent } from './confirmbox.component';

export default {
  title: 'SIGAM/ConfirmBox',
  component: ConfirmboxComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule, ConfirmDialogModule, ToastModule, BrowserAnimationsModule],
      declarations: [ConfirmboxComponent],
      providers: [
        {
          provide: ConfirmationService,
          useValue: {
            confirm: ({ accept }: { accept: () => void }) => accept(),
          },
        },
        {
          provide: MessageService,
          useValue: {
            add: ({ summary, detail }: { summary: string; detail: string }) =>
              console.log(`Action confirmed: ${summary} - ${detail}`),
          },
        },
      ],
    }),
  ],
} as Meta<ConfirmboxComponent>;

const Template: Story<ConfirmboxComponent> = () => ({
  props: {},
});

export const Default = Template.bind({});
