<template>
  <v-container class="d-flex justify-center">
      <Form v-slot="{ errors,meta }">
        <label for="useremail">Email</label>
        <br>
        <Field type="email" class="my-2 inputBorder" name="email" id="useremail"
               v-model="form.user.email" rules="required|email" placeholder="請輸入 Email"
               :class="{'border-red':errors.email , 'border-grey':!errors.email}"/>
        <br>
        <ErrorMessage name="email" class="text-red"></ErrorMessage>
        <br>

        <label for="username">收件人姓名</label>
        <br>
        <Field type="text" class="my-2 inputBorder" name="name" id="username"
               v-model="form.user.name" rules="required" placeholder="輸入姓名"
               :class="{'border-red':errors.name , 'border-grey':!errors.name}"/>
        <br>
        <ErrorMessage name="name" class="text-red"/>
        <br>

        <label for="usertel">收件人電話</label>
        <br>
        <Field type="tel" name="phone" class="my-2 inputBorder" id="usertel"
               v-model="form.user.tel" placeholder="請輸入電話" rules="required"
               :class="{'border-red':errors.phone , 'border-grey':!errors.phone}"/>
        <br>
        <ErrorMessage name="phone" class="text-red"/>
        <br>

        <label for="useraddress">收件人地址</label>
        <br>
        <Field type="text" class="my-2 inputBorder" name="address" id="useraddress"
               v-model="form.user.address" placeholder="請輸入地址" rules="required"
               :class="{'border-red':errors.address , 'border-grey':!errors.address}"/>
        <br>
        <ErrorMessage name="address" class="text-red"/>

        <br>
        <label for="comment">留言</label>
        <br>
        <textarea name="" id="comment" class="my-2 inputBorder" cols="30" rows="10"
                  v-model="form.message"></textarea>
        <div class="d-flex justify-end my-3">
          <v-btn color="green" :disabled="!meta.valid" @click="createOrder">send</v-btn>
        </div>
      </Form>
  </v-container>
</template>

<script>
import axios from "axios";
import router from "@/router";
import {Form, Field, ErrorMessage, defineRule} from 'vee-validate';
import {email, required} from "@vee-validate/rules";

defineRule('email', email);
defineRule('required', required);
export default {
  name: 'CONFIRMORDER',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    }
  },
  methods: {
    createOrder() {
      let vm = this;
      let order = vm.form;
      vm.$store.dispatch('Loading', true);
      axios.post(`https://vue-course-api.hexschool.io/api/hogankai/order`, {data: order})
        .then((res) => {
          console.log('訂單已建立', res);
          vm.$store.dispatch('Loading', false);
          router.push(`/checkout/${res.data.orderId}`)
          // vm.isLoading.order;
        })
    }
  }
}
</script>

<style scoped>
.inputBorder {
  border: 2px solid grey;
  border-radius: 8px;
  width: 100%;
  padding: 10px;
  outline: none;
}

.border-red {
  border-color: red;
}

.border-grey {
  border-color: grey;
}
</style>
