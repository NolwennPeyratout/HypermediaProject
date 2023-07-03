<template>
    <main>
      <div class="contact-container">
        <div class="form-wrapper">
          <form>
            <h2 class="form-title">Tell us your idea!</h2>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" placeholder="Name" />
            </div>
            <div class="form-group">
              <label for="surname">Surname</label>
              <input type="text" id="surname" placeholder="Surname" />
            </div>
            <div class="form-group">
              <label for="mail">E-mail</label>
              <input type="email" id="mail" placeholder="E-mail" />
            </div>
            <div class="form-group">
              <label for="company">Company</label>
              <input type="text" id="company" placeholder="Company" />
            </div>
            <div class="form-group" id="message">
              <label for="message">Message</label>
              <textarea id="message" placeholder="Write your message here"></textarea>
            </div>
            <button class="submit-button">Send Message</button>
          </form>
        </div>
        <div class="contact-info">
          <h2 class="info-title">Contact Information</h2>
          <ul>
            <li>Piazza Leonardo da Vinci, 22</li>
            <li>E-mail: hyper@media.it</li>
            <li>Tel: +39 347 256609</li>
            <li>We are open from Monday - Friday </li>
            <li>9:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </div>
    </main>

    
  </template>
  
  <style>
    .contact-container {
      display: flex;
      justify-content: space-between;
      width: 80%;
      padding: 20px;
      background-color: transparent;
      margin-left: 0px;
    }
  
    .form-wrapper {
      flex: 1.5;
      border: 2px solid #333;
      border-radius: 20px;
      background-color: #5b7470;
      margin-right: 50px;
    }
  
    form {
      padding-right: 20px;
    }
  
    .form-title {
      font-size: 24px;
      margin-bottom: 20px;
      margin-left: 30px;
      color: #b0bfc2;
    }
  
    .form-group {
      margin-bottom: 20px;
      margin-left: 30px;
      margin-right: 30px;
    }
  
    label {
      display: block;
      font-size: 16px;
      font-weight: bold;
      color: #b0bfc2;
      margin-bottom: 5px;
    }
  
    input,
    textarea {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      border-radius: 5px;
      border: 1px solid #ccc;
      border: none;
      border-bottom: 2px solid #b0bfc2;
      background-color: transparent;
    }
  
    textarea {
      resize: vertical;
      min-height: 100px;
    }
  
    .submit-button {
      background-color: #333;
      color: #fff;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;
      margin-left: 30px;
      margin-bottom: 30px;
    }
  
    .contact-info {
      flex: 1;
      padding-left: 20px;
    }
  
    .info-title {
      font-size: 24px;
      margin-bottom: 20px;
    }
  
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
  
    .contact-info li {
      display: list-item;
      margin-bottom: 10px;
    }

    .contact-info li:after{
        content: none;
    }

  </style>