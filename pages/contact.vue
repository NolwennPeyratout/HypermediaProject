<template>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <main>
      <div id="contacts-pageTop">
            <h1 id="contacts-page-title"> Contact us </h1>
        </div>
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
    #contacts-pageTop{
        width: 100%;
        margin: 4% 0% 1% 5%;
    }

    #contacts-page-title
    {
        font-weight: bolder;
        color: #202622;
        text-align: start;
        font-size: 4.5vw;
    }

    .contact-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 90%;
      margin-bottom: 2%;
      background-color: transparent;
      margin-left: 0%;
    }
  
    .form-wrapper {
      flex: 2;
      border: 2px solid #333;
      border-radius: 20px;
      background-color: #5b7470;
      margin-right: 0;
    }
  
    form {
      padding-right: 20px;
    }
  
    .form-title {
      font-size: 2.5vw;
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
      font-size: 1.6vw;
      font-weight: bold;
      color: #b0bfc2;
      margin-bottom: 5px;
    }
  
    input,
    textarea {
      width: 100%;
      padding: 10px;
      font-size: 1.6vw;
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
      font-size: 1.6vw;
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
      font-size: 2.5vw;
      margin-bottom: 20px;
    }
  
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
  
    .contact-info li {
      display: list-item;
      margin-bottom: 1vw;
      font-size: 1.2vw;
    }

    .contact-info li:after{
        content: none;
    }


    @media only screen and (max-width: 700px) {
      #contacts-page-title
      {
        font-size: 5vw;
      }
      .form-title, .info-title {
        font-size: 3.5vw;
      }
      .contact-info li {
        margin-bottom: 1.6vw;
        font-size: 1.6vw;
      }
      label {
        font-size: 2.5vw;
      }
    
      input,
      textarea {
        font-size: 2.5vw;
      }
    
      .submit-button {
        font-size: 2.5vw;
      }
      #contacts-pageTop{
        margin-top: 7%;
      }
    }

    @media only screen and (max-width: 500px) {

      .contact-container {
        flex-direction: column-reverse;
      }
      .contact-info {
        flex: 1;
        padding-left: 0px;
        margin-bottom: 2%;
      }
      #contacts-page-title
      {
        font-size: 5.5vw;
      }
      .form-title, .info-title {
        font-size: 4vw;
      }
      .contact-info li {
        margin-bottom: 2.5vw;
        font-size: 2.5vw;
      }
      label {
        font-size: 3.2vw;
      }
    
      input,
      textarea {
        font-size: 3.2vw;
      }
    
      .submit-button {
        font-size: 3.2vw;
      }
      #contacts-pageTop{
        margin-top: 8%;
      }
    }
  </style>