<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-transparent pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <small>Login</small>
          </div>
          <div class="btn-wrapper text-center">
            <a href="#" class="btn btn-neutral btn-icon">
              <span class="btn-inner--icon">
                <img src="img/icons/common/google.svg" />
              </span>
              <span class="btn-inner--text">Logo</span>
            </a>
          </div>
        </div>
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <small>inicie sesión con las credenciales</small>
          </div>
          <form role="form">
            <base-input
              class="input-group-alternative mb-3"
              placeholder="Email"
              addon-left-icon="ni ni-email-83"
              v-model="email"
            ></base-input>

            <base-input
              class="input-group-alternative"
              placeholder="Password"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="password"
            ></base-input>
            <div class="text-center text-muted mb-4">
              <b-alert  class="text-danger" v-if='error' >Verfique sus credenciales</b-alert>
            </div>
            <base-checkbox class="custom-control-alternative">
              <span class="text-muted">Remember me</span>
            </base-checkbox>
            <div class="text-center">
              <base-button type="primary" @click="login" class="my-4">Ingresar</base-button>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <a href="#" class="text-light">
            <small>¿Se te olvidó tu contraseña?</small>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {

  name: "login",
  data () {
    return {
        email: "",
        password: "",
        error: false
    }
  },
  mounted () {
    
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password
      };
     console.log(payload);
     const resp=  axios.post('https://testback-prod.herokuapp.com/auth/login',payload)
     console.log(process.env.VUE_APP_ROOT_API)
     console.log(resp)
      //this.$store.dispatch('Functions/login', payload)
    }
  }
};
</script>
<style>
</style>
