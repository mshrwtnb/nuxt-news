<template>
  <div 
    class="md-layout md-alignment-center-center" 
    style="height: 100vh;">
    <md-card class="md-layout-item md-size-50">
      <md-card-header>
        <div class="md-title">Register</div>
      </md-card-header>

      <!-- Register Form -->
      <form @submit.prevent="registerUser">
        <md-card-content>
          <md-field md-cleareable>
            <label for="email">Email</label>
            <md-input 
              id="mail"
              :disabled="loading"
              v-model="form.email" 
              type="email" 
              name="email" 
              autocomplete="email"/>
          </md-field>
          <md-field>
            <label for="password">Password</label>
            <md-input 
              id="password" 
              :disabled="loading"
              v-model="form.password" 
              type="password" 
              name="password" 
              autocomplete="password"/>
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button to="/login">Go to Login</md-button>
          <md-button 
            :disabled="loading" 
            class="md-primary md-raised"   
            type="submit">Submit</md-button>
        </md-card-actions>
      </form>

      <md-snackbar :md-active.sync="isAuthenticated">
        {{ form.email }} was successfully registered!
      </md-snackbar>
    </md-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      email: '',
      password: '',
    },
  }),

  computed: {
    loading() {
      return this.$store.getters.loading
    },

    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    },
  },

  watch: {
    isAuthenticated(value) {
      if (value) {
        setTimeout(() => this.$router.push('/'), 2000)
      }
    },
  },

  methods: {
    async registerUser() {
      await this.$store.dispatch('authenticateUser', {
        // Firebaseで必要なBody Payload
        email: this.form.email,
        password: this.form.password,
        returnSecureToken: true,
      })
    },
  },
}
</script>
