import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {



   private apiUrl = 'https://inference-api.nousresearch.com/v1/chat/completions';
  private token = 'sk-tOdQ2XtOobctbYt-pi_rPw';

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    });

    const payload = {
      model: 'Hermes-3-Llama-3.1-70B',
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 100,
    };

    return this.http.post(this.apiUrl, payload, { headers });
  }
}
