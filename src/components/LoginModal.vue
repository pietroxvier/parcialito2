<template>
  <div v-if="showModal" class="login-modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" required>

        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required>

        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Simulate a login process
      // You should replace this with your actual authentication logic
      console.log('Logging in with username:', this.username);
      console.log('Password:', this.password);

      // Emit login success event
      this.$emit('login-success');

      // Close the modal
      this.closeModal();
    },
    closeModal() {
      // Emit close event to inform the parent component
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
/* Your modal-specific styles go here */
.login-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
    position: relative; /* Add position relative to the modal content */
  background-color: #fff;
  width: 80%; /* Adjust the width as needed (80% of the screen width) */
  max-width: 500px; /* Set a maximum width for the modal content */
  margin: 190px auto;
  padding-top: 40px;
    padding-right: 80px;
  padding-left: 60px;
    padding-bottom: 60px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transform: scale(0.95);
    display: flex;
  flex-direction: column;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
}
</style>