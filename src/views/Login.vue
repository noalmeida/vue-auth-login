<template>
  <div class="login">
    <div class="container-outher">
      <h1 class="paragraph">Entrar</h1>
      <span class="container-login">
        <input class="form-control" type="email" placeholder="Login"
      /></span>
      <span class="container-password"
        ><input class="form-control" type="password" placeholder="Senha"
      /></span>

      <br />
      <div class="b-login">
        <button type="button" class="btn btn-primary btn-lg" @click="login">
          Login
        </button>
      </div>
      <p>
        Você não possui conta?
        <router-link to="/registrar">Crie uma conta</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return {}
  },
  methods: {
    login(){
      this.$router.replace('home')
    }
  }
}
</script>

<style scoped>
.paragraph {
  font-size: 22px;
  padding-bottom: 2rem;
}
.container-outher {
  display: grid;
  justify-items: center;
  margin: 10% 30%;
}
.b-login {
  padding: 1rem;
}
.btn-primary {
  background-color: #3f3f3f;
  padding: 10px 50px;
}
.btn-primary:hover {
  background-color: #7b68ee;
  padding: 10px 50px;
}
.container-login {
  padding-bottom: 0.8rem;
}
</style>
