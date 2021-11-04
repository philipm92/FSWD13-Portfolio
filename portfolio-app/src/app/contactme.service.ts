import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactmeService {
  // _url = "https://mahlberg.codefactory.live:3000/send-mail";
  _url = "https://mahlberg.codefactory.live/assets/sendMail.php";
  constructor(private _http: HttpClient) { }

  SendMail(contact_form: any) {
    return this._http.post<any>(this._url, contact_form);
  }
}