import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, ToastModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
  providers: [MessageService]
})
export class MessageComponent {
  messageService: MessageService = inject(MessageService);
}
