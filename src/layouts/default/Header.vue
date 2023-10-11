<template>
  <v-app>
    <v-app-bar color="#a67f78">
      <v-app-bar-nav-icon @click="openSidebar = !openSidebar"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <RouterLink to="/customer_orders" class="text-decoration-none text-white">
          HoganStore
        </RouterLink>
      </v-app-bar-title>
      <div class="mx-2">
        <v-btn icon v-if="signInStatus == 'noLogIn'">
          <RouterLink to="/login">
            <v-icon size="30" color="white">mdi-account-outline</v-icon>
            <v-tooltip activator="parent">登入</v-tooltip>
          </RouterLink>
        </v-btn>
        <v-btn icon v-if="this.signInStatus == 'LogIn'" @click="signOut">
          <v-icon size="30" color="grey-darken-4">mdi-account-outline</v-icon>
          <v-tooltip activator="parent">登出</v-tooltip>
        </v-btn>
        <RouterLink to="/carts">
          <v-btn icon>
            <v-badge color="red" :content="carts.carts.length">
              <v-icon size="30" color="grey-darken-4">mdi-cart</v-icon>
            </v-badge>
            <v-tooltip activator="parent">購物車</v-tooltip>
          </v-btn>
        </RouterLink>
      </div>
    </v-app-bar>

    <v-navigation-drawer temporary v-model="openSidebar" class="bg-brown-lighten-5 w-25">
      <Sidebar/>
    </v-navigation-drawer>

    <v-main class="bg-brown-lighten-5">
      <RouterView/>
    </v-main>

    <v-divider class="border-opacity-25"></v-divider>

    <FOOTER/>

  </v-app>
</template>
<script>
import Sidebar from '@/layouts/default/Sidebar.vue';
import FOOTER from "@/layouts/default/Footer.vue";
import axios from "axios";
import router from "@/router";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'HEADER',
  components: {
    Sidebar,
    FOOTER,
  },
  data() {
    return {
      openSidebar: false,
      signInStatus: 'noLogIn',
    }
  },
  methods: {
    signOut() {
      axios.post(`https://vue-course-api.hexschool.io/logout`).then((res) => {
        if (res.data.success) {
          let vm = this;
          vm.signInStatus = 'noLogIn';
          sessionStorage.setItem('login-status', 'noLogIn');
          let msg = {
            status: true,
            color: 'success',
            type: 'success',
            title: '',
            text: '已登出',
          }
          vm.$store.dispatch('setAlert',msg);
          router.push('/customer-orders');
        }
      })
    },
    signIn_status() {
      let vm = this;
      let msg = sessionStorage.getItem('login-status');
      if (msg == null) {
        vm.signInStatus = 'noLogIn';
      } else if (msg == 'noLogIn') {
        vm.signInStatus = 'noLogIn';
      } else if (msg == 'LogIn') {
        vm.signInStatus = 'LogIn';
      }
    }
  },
  computed: {
    ...mapActions(['getCarts']),
    ...mapGetters(['carts']),
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
    if (token !== "") {
      axios.defaults.headers.common["Authorization"] = token;
    }
    this.signIn_status();
    this.getCarts;
  }
}
</script>

