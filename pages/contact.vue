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
            <li>E-mail: mail@shelter.it</li>
            <li>Tel: 053684864351</li>
          </ul>
        </div>
      </div>
    </main>
  </template>
  
  <style>

    .contact-container {
      display: flex;
      justify-content: space-between;
      width: 800px;
      padding: 20px;
      background-color: transparent;
    }
  
    .form-wrapper {
      flex: 2;
      border: 2px solid #333;
      border-radius: 5px;
      background-color: #5b7470;
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
  
    li {
      margin-bottom: 10px;
    }

    
  </style>