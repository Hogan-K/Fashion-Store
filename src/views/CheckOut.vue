<template>
  <v-container>
    <v-form v-if="!isPay" class="w-75 mx-auto">
      <v-table class="bg-brown-lighten-5">
        <thead>
        <tr>
          <th></th>
          <th class="">品名</th>
          <th class="">數量</th>
          <th class="">單價</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in order.products" :key="item.id">
          <td>
            <v-img class="my-3" :src="item.product.imageUrl" min-width="50" />
          </td>
          <td class="text-8F8681">{{ item.product.title }}</td>
          <td class="text-8F8681">{{ item.qty }}/{{ item.product.unit }}</td>
          <td class="text-8F8681 ">{{ $filter.currency(item.final_total) }}</td>
        </tr>
        </tbody>
        <tfoot>
        <tr class="fw-bold">
          <td colspan="2"></td>
          <td class="rgb2B2 bgF5F">總計</td>
          <td class="bgF5F rgb8F8">{{ $filter.currency(order.total) }}</td>
        </tr>
        </tfoot>
      </v-table>

      <v-table class="bg-brown-lighten-5">
        <tbody>
        <tr>
          <th class="rgb2B2 bgF5F">Email :</th>
          <td class="text-8F8681">{{ order.user.email }}</td>
        </tr>
        <tr>
          <th class="rgb2B2 bgF5F">姓名 :</th>
          <td class="text-8F8681">{{ order.user.name }}</td>
        </tr>
        <tr>
          <th class="rgb2B2 bgF5F">收件人電話 :</th>
          <td class="text-8F8681">{{ order.user.tel }}</td>
        </tr>
        <tr>
          <th class="rgb2B2 bgF5F">收件人地址 :</th>
          <td class="text-8F8681">{{ order.user.address }}</td>
        </tr>
        <tr>
          <th class="rgb2B2 bgF5F">付款狀態</th>
          <td class="bgF5F">
            <span class="text-red">尚未付款</span>
          </td>
        </tr>
        </tbody>
      </v-table>
      <div class="text-right" v-if="order.is_paid === false">
        <v-btn color="green" @click="payOrder">確認付款</v-btn>
      </div>
    </v-form>
    <div class="d-flex justify-center align-center" style="min-height: 600px" v-if="isPay">
      <div class="text-center">
        <v-icon size="150" color="green">mdi-check-circle-outline</v-icon>
        <p class="text-green text-h5">付款成功</p>
        <v-btn class="mt-6" color="green">
          <RouterLink to="/customer_orders" class="text-decoration-none text-white">繼續購物</RouterLink>
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import {useRoute} from "vue-router";

export default {
  name: 'CHECKOUT',
  data() {
    return {
      orderId: '',
      order: {
        user: {},
      },
      isPay: false,
    }
  },
  methods: {
    getOrder() {
      let vm = this;
      vm.$store.dispatch('Loading', true);
      axios.get(`https://vue-course-api.hexschool.io/api/hogankai/order/${vm.orderId}`)
        .then((res) => {
          vm.order = res.data.order;
          vm.isPay = res.data.order.is_paid;
          console.log(res.data.order);
          vm.$store.dispatch('Loading', false);
        })
    },
    payOrder() {
      let vm = this;
      vm.isPay = true;
      vm.$store.dispatch('Loading', true);
      axios.post(`https://vue-course-api.hexschool.io/api/hogankai/pay/${vm.orderId}`)
        .then((res) => {
          vm.isLoading = true;
          console.log(res)
          if (res.data.success) {
            vm.getOrder();
            vm.$store.dispatch('Loading', false);
          }
        })
    }
  },
  created() {
    let vm = this;
    vm.orderId = useRoute().params.orderId;
    this.getOrder();
  }
}
</script>

<style scoped>
.text-8F8681 {
  color: #8F8681;
}
</style>
