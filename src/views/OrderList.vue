<template>
  <v-table class="table mt-4 bg-brown-lighten-5">
    <thead>
    <tr>
      <th class="text-subtitle-1 font-weight-bold">購買日期</th>
      <th class="d-none d-md-table-cell  text-subtitle-1 font-weight-bold">Email</th>
      <th class="text-subtitle-1 font-weight-bold">訂單編號</th>
      <th class="d-none d-sm-table-cell  text-subtitle-1 font-weight-bold">應付金額</th>
      <th class="d-none d-sm-table-cell  text-subtitle-1 font-weight-bold">是否付款</th>
      <th class="text-subtitle-1 font-weight-bold">編輯</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item) in orders" :key="item.id">
      <td class="text-8F8681">{{ $dayjs(item.create_at * 1000).format('YYYY-MM-DD') }}</td>
      <td class="d-none d-md-table-cell  text-8F8681">{{ item.user.email }}</td>
      <td class="text-8F8681">
        <v-btn variant="plain" color="blue" @click="details(item)">{{ item.id }}</v-btn>
      </td>
      <td class="d-none d-sm-table-cell  text-8F8681">
        {{ $filter.currency(item.total) }}
      </td>
      <td class="d-none d-sm-table-cell  bgF5F">
        <span v-if="item.is_paid" class="text-success">已付款</span>
        <span v-else class="text-red">未付款</span>
      </td>
      <td class="bgF5F">
        <v-btn variant="outlined" color="blue" @click="editOrder(item)">編輯</v-btn>
      </td>
    </tr>
    </tbody>
  </v-table>

  <div class="text-center">
    <v-pagination class="my-4" v-model="page" :length="totalPage" :total-visible="5"></v-pagination>
  </div>


  <v-dialog v-model="dialogDetails">
    <v-card class="mx-auto w-75">
      <v-card-title class="bg-a67f78 text-white">修改訂單資訊</v-card-title>
      <v-card-item>
        <v-row>
          <v-col :cols="cols[0]">
            <v-sheet class="text-8F8681 my-2">
              訂單建立日期：{{ dayjs(tempOrder.create_at * 1000).format('YYYY/MM/DD') }}
            </v-sheet>
            <v-row v-for="(item) in tempOrder.products" :key="item.id">
              <v-col cols="4">
                <v-img :src="item.product.imageUrl" min-width="50" max-width="100"/>
              </v-col>
              <v-col align-self="center">
                <v-sheet class="text-8F8681">{{ item.product.title }}</v-sheet>
                <v-sheet class="text-grey text-body-2">( 編號：{{ item.product.id }} )</v-sheet>
                <v-sheet class="my-3 text-8F8681">
                  {{ item.qty }} / {{ item.product.unit }} <span class="ml-6">{{ $filter.currency(item.total) }}</span>
                </v-sheet>
                <v-sheet class="ml-4 my-2 text-8F8681 text-body-2" v-if="item.coupon">
                  使用
                  <v-icon color="green" class="mb-1">mdi-ticket-percent</v-icon>
                  <span class="text-green">{{ item.coupon.title }}</span> 優惠券
                </v-sheet>
              </v-col>
            </v-row>
          </v-col>
          <v-col :cols="cols[1]">
            <h4>訂購人</h4>
            <p class="ml-4 my-2 text-8F8681">{{ tempOrder.user.name }}</p>
            <h4>電話</h4>
            <p class="ml-4 my-2 text-8F8681">{{ tempOrder.user.tel }}</p>
            <h4>Email</h4>
            <p class="ml-4 my-2 text-8F8681">{{ tempOrder.user.email }}</p>
            <h4>地址</h4>
            <p class="ml-4 my-2 text-8F8681">{{ tempOrder.user.address }}</p>
            <h4>特殊需求</h4>
            <v-sheet v-if="tempOrder.message == undefined || tempOrder.message == ''"
                     class="border border-md rounded-lg my-2 pa-2 text-8F8681"
                     height="60">無特殊需求
            </v-sheet>
            <v-sheet v-else class="border border-md rounded-lg my-2 pa-2 text-8F8681"
                     height="60">{{ tempOrder.message }}
            </v-sheet>
            <h4>付款狀態</h4>
            <v-sheet v-if="tempOrder.is_paid" class="text-green ml-4 my-2">
              已付款 <span class="ml-4">總計 ：{{ $filter.currency(tempOrder.total) }}</span>
            </v-sheet>
            <v-sheet v-else class="text-red ml-4 my-2">尚未付款</v-sheet>
          </v-col>
        </v-row>
      </v-card-item>
      <v-divider/>
      <v-card-actions class="d-flex justify-end">
        <v-btn class="ma-4" variant="outlined" @click="cancelModal">關閉</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>


  <v-dialog v-model="dialogEdit">
    <v-card class="mx-auto RWDcard">
      <v-card-title class="bg-a67f78 text-white">修改訂單資訊</v-card-title>
      <v-card-item>
        <h4>電話</h4>
        <v-text-field label="請輸入手機號碼" variant="solo-filled" class="mt-2"
                      v-model="tempOrder.user.tel"></v-text-field>
        <h4>Email</h4>
        <v-text-field label="請輸入Email" variant="solo-filled" class="mt-2"
                      v-model="tempOrder.user.email"></v-text-field>
        <h4>地址</h4>
        <v-text-field label="請輸入地址" variant="solo-filled" class="mt-2"
                      v-model="tempOrder.user.address"></v-text-field>
        <h4>特殊需求</h4>
        <v-text-field label="請輸入顧客需求" variant="solo-filled" class="mt-2"
                      v-model="tempOrder.message"></v-text-field>
        <h4>付款狀態</h4>
        <v-checkbox label="是否付款" v-model="tempOrder.is_paid" color="green"/>
      </v-card-item>
      <v-divider/>
      <v-card-actions class="d-flex justify-end">
        <v-btn class="ma-4" variant="outlined" @click="cancelModal">取消</v-btn>
        <v-btn class="ma-4" variant="outlined" @click="updateOrder">確定</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";

export default {
  name: 'ORDERLIST',
  data() {
    return {
      dialogEdit: false,
      dialogDetails: false,
      orders: {},
      tempOrder: {
        message: '',
        user: {},
      },
      page: 1,
      createTime: 0,
      totalPage: 0,
    }
  },
  watch: {
    page() {
      let vm = this;
      vm.getCoupons(vm.page);
    }
  },
  methods: {
    dayjs,
    getOrders(page) {
      let vm = this;
      vm.$store.dispatch('Loading',true);
      axios.get(`https://vue-course-api.hexschool.io/api/hogankai/admin/orders?page=${page}`)
        .then((res) => {
          console.log(res.data.orders);
          vm.orders = res.data.orders;
          vm.totalPage = res.data.pagination.total_pages;
          vm.$store.dispatch('Loading',false);
        })
    },
    editOrder(item) {
      let vm = this;
      vm.dialogEdit = true;
      vm.tempOrder = Object.assign({}, item);
    },
    cancelModal() {
      this.dialogEdit = false;
      this.dialogDetails = false;
    },
    updateOrder() {
      let vm = this;
      vm.$store.dispatch('Loading', true);
      axios.put(`https://vue-course-api.hexschool.io/api/hogankai/admin/order/${vm.tempOrder.id}`, {data: vm.tempOrder})
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            vm.dialogEdit = false;
            vm.getOrders(vm.page);
            vm.$store.dispatch('Loading', false);
          }
        })
    },
    details(item) {
      let vm = this;
      vm.dialogDetails = true;
      vm.tempOrder = item;
      console.log(vm.tempOrder);
    }
  },
  computed: {
    cols() {
      const {sm, xs} = this.$vuetify.display
      return sm ? [12, 12]
        : xs ? [12, 12]
          : [8, 4]
    },
  },
  created() {
    this.getOrders();
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

.RWDcard {
  width: 50%;
}

@media screen and (max-width: 760px) {
  .RWDcard {
    width: 100%;
  }
}
</style>
