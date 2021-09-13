<template>
  <div class="login">
    <div class="container-outher">
      <h1 class="paragraph">Crie uma nova conta</h1>
      <form class="form-signin">
        <span class="container-login-username">
         <input  class="form-control" type="name" placeholder="Name" v-model="username"
         /></span>
         <span class="container-login">
         <input  class="form-control" type="email" placeholder="Email" v-model="email"
         /></span>
         <span class="container-password"
         ><input  class="form-control" type="password" placeholder="Senha" v-model="senha"
       /></span>
        <div class="b-login">
          <!-- <button type="button" class="btn btn-primary btn-lg" @click="saveNewUser">Registrar</button> -->
          <input type="reset" value="Registrar" class="btn btn-primary btn-lg" @click="saveNewUser">

      </div>
      </form>
      <span>Ou Retorne ao <router-link to="/login">Login</router-link></span>
    </div>
  </div>
</template>

<script>

export default {
  name: "sign-in",
  data() {
    return {
      username: '',
      email: '',
      senha: ''
    };
  },
  methods: {
  async saveNewUser() {

    const User = Parse.Object.extend("User");
    const user = new User();

      user.set("username", this.username);
      user.set("email", this.email);
      user.set("password", this.senha);
     try {
         let result = await user.save()
         alert('Conta Cadastrada Com sucesso com id:  ' +  result.id);

      } catch(error) {
         alert('Failed to create new object, with error code: ' + error.message);
      }
    },
}}
</script>
<style scoped>
.paragraph {
  font-family: Poppins-Medium;
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
.form-control {
  margin: 10px;

}
</style>
