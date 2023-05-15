import { Component } from '@angular/core';
import { MessageService } from '../Services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}
  
}