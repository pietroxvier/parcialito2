

<template>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parcialito</title>
  </head>
  <body>
    <header>
      <div class="logo">
        <h1>PARCIALITO</h1>
      </div>
      <div class="buttons">
        <a href="#" class="button cadastrar">CADASTRAR</a>
        <a href="#" class="button">ENTRAR</a>
      </div>
    </header>

    <!-- Modal for registration form -->
    <div class="modal" id="modal">
      <div class="modal-content">
        <span class="close" id="close">&times;</span>
        <h2>Crie sua conta</h2>

        <form id="registration-form" @submit.prevent="registerUser">
  <label for="username">Nome:</label>
  <input v-model="username" type="text" id="username" name="username" required>

  <label for="email">E-mail:</label>
  <input v-model="email" type="email" id="email" name="email" required>

  <label for="password">Senha:</label>
  <input v-model="password" type="password" id="password" name="password" required>
  <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

  <button type="submit">Cadastrar</button>
</form>

      </div>
    </div>

    <section class="hero">
      <div class="hero-content">
        <div class="content-container">
          <h1>Bem vindo</h1>
          <p>Uma forma divertida de estudar e aprender.</p>
          <a href="#" class="button">COMEÇAR AGORA</a>
          <a href="progressbar.html" class="button2">JÁ TENHO UMA CONTA</a>
        </div>
      </div>
    </section>

    <section id="learn-section">
      <div class="image-container">
        <img src="enfermeira-fofa.svg" alt="Doctor Mascot" width="125" height="250">
      </div>
      <div class="container">
        <div class="content">
          <h1>aprenda de forma mais rápida e fácil</h1>
          <p>Nosso site é projetado para oferecer uma experiência de estudo focada e personalizada. Com questões criteriosamente selecionadas, você estuda exatamente o que importa, economizando tempo e aumentando sua eficiência no aprendizado.</p>
        </div>
      </div>
    </section>
    <hr>

    <section id="practice-section">
      <div class="image-container2">
        <img src="enfermeira-fofa4.svg" alt="Enfermeira Fofa" width="300" height="250">
      </div>
      <div class="container">
        <h1>acompanhe seu progresso</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac imperdiet dui. Etiam suscipit mollis hendrerit.
          Morbi tincidunt viverra euismod. Nullam in metus id est pharetra condimentum. Proin semper mi.</p>
      </div>
    </section>
    <hr>

    <section id="achievements-section">
      <div class="container">
        <h2>Our Achievements</h2>
        <div class="achievement">
          <img src="user1.jpg" alt="User 1">
          <h3>Top Scorer</h3>
          <p>John Doe scored the highest in our recent quiz, demonstrating exceptional medical knowledge!</p>
          <div class="progress-bar">
            <div class="progress" style="width: 90%;">90%</div>
          </div>
          <a href="#" class="button">View Profile</a>
        </div>

        <div class="achievement">
          <img src="user2.jpg" alt="User 2">
          <h3>100% Completion</h3>
          <p>Jane Smith completed all the quizzes in our comprehensive medical quiz curriculum!</p>
          <div class="progress-bar">
            <div class="progress" style="width: 100%;">100%</div>
          </div>
          <a href="#" class="button">View Profile</a>
        </div>
      </div>
    </section>

    <footer>
      <a href="#" class="button">Comece a aprender</a>
      <p>&copy; 2023 Parcialito. Todos los derechos reservados.</p>
    </footer>
  </body>
</template>

/* eslint-disable */
<script>

  // Move the content of your external scripts here
  // eslint-disable-next-line
  import script from './script.js';
  // eslint-disable-next-line
  import modal from './modal.js';

  import { registerUser } from './registration.js';



  export default {
    mounted() {
      // Call the functions or code from your external scripts here
      script();
      modal();
      
      // Example of using the registerUser method
      this.registerUser();
    },

    methods: {
      closeModal() {
        // Implement your close modal logic here
        this.errorMessage = ''; // Clear error message when closing the modal
      },
      
      registerUser() {
        // Implement your registerUser logic here
        // For example:
        const user = {  
          username: this.username,
          email: this.email,
          password: this.password,
        };
        
      // Clear previous error message
      this.errorMessage = '';
        registerUser(user.username, user.email, user.password)
          .then(data => {
            console.log('User registered:', data);
            // Handle the response as needed
            // Implement any additional logic here
          })
          .catch(error => {
            console.error('Registration failed:', error);
            this.errorMessage = "Registration failed. Please check your information and try again.";
            // Handle the error as needed
          });
      },
    },
  };
</script>

<style>
/* Your component-specific styles go here */

/* Import the external stylesheet */
@import url('./style.css');
</style>