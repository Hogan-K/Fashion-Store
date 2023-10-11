<template>
  <v-container>
  <v-card class="mx-auto rounded-xl mt-4" max-width="500">
      <v-card-title class="text-white bg-a67f78 py-4">
        <v-icon color="white">mdi-account</v-icon>
        登入
      </v-card-title>

    <v-card-item class="bg-brown-lighten-5">
      <v-text-field class="text-8F8681 mt-5" label="Name" variant="outlined" v-model="user.username"></v-text-field>
      <v-text-field class="text-8F8681" type="password" variant="outlined" label="Password" v-model="user.password"></v-text-field>
      <v-checkbox class="text-8F8681" label="remember me" v-model="remember"></v-checkbox>
    </v-card-item>

    <v-divider></v-divider>

    <v-card-actions class="bg-brown-lighten-5">
      <v-spacer></v-spacer>

      <v-btn block class="text-8F8681" @click="signin">
        Sign in
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "LOGIN",
  data() {
    return {
      user: {
        username: 'asdfgh48663@yahoo.com.tw',
        password: 'sss123',
      },
      remember: false,
    }
  },
  methods: {
    signin() {
      const vm = this;
      vm.$store.dispatch('Loading',true);
      axios.post(`https://vue-course-api.hexschool.io/admin/signin`, vm.user)
        .then((res) => {
          vm.$store.dispatch('Loading',false);
          console.log(res)
          if (res.data.success) {
            if (vm.remember) {
              let user = vm.user.username;
              let password = vm.user.password;
              localStorage.setItem('username', user);
              localStorage.setItem('password', password);
            } else {
              localStorage.clear();
            }
            sessionStorage.setItem('login-status','LogIn');
            const token = res.data.token;
            const expired = res.data.expired;
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
            router.push('/customer_orders');
          }
        })
    },
  },
  created() {
    if (localStorage.getItem('username')) {
      this.remember = true;
      this.user.username = localStorage.getItem('username');
      this.user.password = localStorage.getItem('password');
    }
  }
}
</script>

<style scoped>
.bg-a67f78 {
  background: #a67f78;
}

.text-8F8681 {
  color: #8F8681;
}
</style>
