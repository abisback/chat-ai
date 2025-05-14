import { Component } from '@angular/core';
import { ChatService } from '../chat.service';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [NgIf, NgFor, NgClass,FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {


   userMessage = '';
  messages: { sender: string; content: string }[] = [];

  constructor(private chatService: ChatService) {}

  sendMessage(): void {
    if (!this.userMessage.trim()) return;

    const message = this.userMessage.trim();
    this.messages.push({ sender: 'Akash', content: message });

    this.chatService.sendMessage(message).subscribe((res) => {
      const reply = res.choices?.[0]?.message?.content || 'No response';
      this.messages.push({ sender: 'Bot', content: reply });
    });

    this.userMessage = '';
  }

}
