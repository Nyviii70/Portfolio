import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

const contactForm = document.querySelector('contact-form');

let name = document.getElementById('name') as HTMLInputElement;
let email = document.getElementById('email') as HTMLInputElement;
let message = document.getElementById('message') as HTMLInputElement;


contactForm?.addEventListener('submit', (e)=>{
  e.preventDefault();

  let formData = {
    name: name?.value,
    email: email?.value,
    message: message?.value,
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText == 'success'){
      alert('Email sent');
    }else{
      alert("Quelque chose ne s'est pas passé comme prévu!")
    }
  }
  xhr.send(JSON.stringify(formData))
})