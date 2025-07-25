import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topic-input',
  templateUrl: './topic-input.component.html',
  styleUrls: ['./topic-input.component.css']
})
export class TopicInputComponent {
  @Input() topic: string = '';
  inputText: string = '';

  sendText() {
    // Hier kannst du später einen echten API-Call machen
    alert(`Beitrag zu "${this.topic}" gesendet: ${this.inputText}`);
    this.inputText = '';
  }
}
