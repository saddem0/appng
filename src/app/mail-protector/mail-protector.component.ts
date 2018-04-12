import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-protector',
  templateUrl: './mail-protector.component.html',
  styleUrls: ['./mail-protector.component.css']
})
export class MailProtectorComponent implements OnInit {
  mail = '';
  msg = '';
  constructor() { }

  ngOnInit() {
  }
  isvalide() {

    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( this.mail.search(re) >= 0) {
      this.msg = 'you e-mail is VALID';
    } else {
      this.msg = 'e-mail not valid!!!!!!!!';
    }
  }
  protect() {
    let s = this.mail[0];
    for (let i = 1; i <  this.mail.length - 3; i++) {
      if (this.mail[i + 1] === '@') {
        s += this.mail[i] + '@' + this.mail[i + 2];
      } else if (this.mail[i] === '.') {
        s += this.mail.slice(i);
      } else {
        s += '*';
      }
      console.log(i, s);
    }
    this.msg = s;
}
}
