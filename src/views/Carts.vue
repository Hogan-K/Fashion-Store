<template>
  <div v-if="carts.total !== 0">
    <v-table class="table mt-4 bg-brown-lighten-5">
      <thead>
      <tr>
        <th></th>
        <th width="10" class="d-none d-sm-table-cell"></th>
        <th class="d-none d-sm-table-cell  text-subtitle-1 font-weight-bold">品名</th>
        <th class="text-subtitle-1 font-weight-bold">數量</th>
        <th class="text-subtitle-1 font-weight-bold">單價</th>
        <th class="text-subtitle-1 font-weight-bold"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item) in carts.carts" :key="item.id">
        <td>
          <v-img class="py-4" :src="item.product.imageUrl" width="90"></v-img>
        </td>
        <td class="d-none d-sm-table-cell">
          <v-icon v-if="item.product.origin_price !== item.product.price" class="mb-7" color="green">mdi-tag</v-icon>
        </td>
        <td class="d-none d-sm-table-cell  text-8F8681">
          {{ item.product.title }}
        </td>
        <td class="text-8F8681">
          <input type="number" min="1" class="text-center border rounded-lg w-25"
                 v-model="item.qty" @change="editProductQTY(item)">
          / {{ item.product.unit }}
        </td>
        <td class="text-8F8681">{{ $filter.currency(item.final_total) }}</td>
        <td>
          <v-btn prepend-icon="mdi-delete" variant="plain" @click="DelCart(item.id)"></v-btn>
        </td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="2" class="d-none d-sm-table-cell"></td>
        <td colspan="2" class="text-center">
          <p class="ml-4 my-2 text-green text-body-2">
            已使用
            <v-icon color="green" class="mb-1">mdi-ticket-percent</v-icon>
            優惠券
          </p>
        </td>
        <td>總計</td>
        <td v-if="carts.total == carts.final_total">{{ $filter.currency(carts.total) }}</td>
        <td v-if="carts.total !== carts.final_total">{{ $filter.currency(carts.final_total) }}</td>
      </tr>
      </tfoot>
    </v-table>
    <div class="text-center my-6">
      <v-btn variant="outlined" @click="dialogOpen">選擇優惠券</v-btn>
      <v-btn class="ml-5" color="green">
        <RouterLink to="/confirm-order" class="text-decoration-none text-white">前往結賬</RouterLink>
      </v-btn>
    </div>
  </div>

  <v-sheet min-height="600" color="brown-lighten-5" v-if="carts.total == 0" class="d-flex justify-center align-center">
    <i class="fa-solid fa-circle-exclamation" style="font-size: 30px">購物車是空的！</i>
    <v-btn class="ml-4" color="green" append-icon="mdi-arrow-right-bold-outline">
      <RouterLink to="/customer_orders" class="text-decoration-none text-white">前往購物</RouterLink>
    </v-btn>
  </v-sheet>

  <v-dialog v-model="dialog">
    <v-card class="mx-auto w-75">
      <v-card-title class="bg-a67f78 text-white">選擇優惠券</v-card-title>
      <v-card-item>
        <v-row>
          <v-col :cols="cols[0]">
            <v-text-field label="請輸入優惠券序號" variant="solo-filled"
                          v-model="coupons_code"></v-text-field>
          </v-col>
          <v-col :cols="cols[1]">
            <v-btn class="mt-3" variant="outlined" @click="chooseCoupons" :class="{'text-green':couponStatus}">
              <v-icon v-if="couponStatus">mdi-checkbox-marked-circle</v-icon>
              套用優惠券
            </v-btn>
          </v-col>
        </v-row>
      </v-card-item>
      <v-card-actions class="justify-end">
        <v-btn variant="outlined" @click="dialogClose">取消</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="notFindCoupon">
    <v-sheet width="600" color="grey" class="text-center mx-auto py-3">找不到此優惠券</v-sheet>
  </v-dialog>
</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  name: 'CARTS',
  data() {
    return {
      dialog: false,
      notFindCoupon: false,
      coupons_code: '',
      couponStatus: false,
    }
  },
  methods: {
    getCarts() {
      let vm = this;
      vm.$store.dispatch('getCarts');
      console.log(vm.carts)
    },
    editProductQTY(item) {
      let vm = this;
      // console.log(item.qty);
      vm.DelCart(item.id);
      let cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      axios.post(`https://vue-course-api.hexschool.io/api/hogankai/cart`, {data: cart})
        .then((res) => {
          console.log(res);
          vm.getCarts();
        });
    },
    DelCart(id) {
      let vm = this;
      vm.$store.dispatch('Loading', true);
      axios.delete(`https://vue-course-api.hexschool.io/api/hogankai/cart/${id}`)
        .then((res) => {
          console.log(res)
        });
      setTimeout(() => {
        vm.getCarts();
      }, 300);
      vm.$store.dispatch('Loading', false);
    },
    dialogOpen() {
      this.dialog = true;
    },
    chooseCoupons() {
      let vm = this;
      let coupon = {
        code: vm.coupons_code
      };
      vm.$store.dispatch('Loading', true);
      axios.post(`https://vue-course-api.hexschool.io/api/hogankai/coupon`, {data: coupon})
        .then((res) => {
          console.log(res)
          if (res.data.success) {
            vm.couponStatus = true;
            vm.getCarts();
          } else {
            vm.notFindCoupon = true;
            vm.coupons_code = '';
          }
          vm.$store.dispatch('Loading', false);
        })
    },
    dialogClose() {
      let vm = this;
      vm.dialog = false;
      vm.couponStatus = false;
      vm.coupons_code = '';
    },

  },
  computed: {
    cols() {
      const {xs} = this.$vuetify.display
      return xs ? [12, 12]
        : [9, 3]
    },
    ...mapGetters(['carts']),
  },
  created() {
    this.getCarts();
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
