<template>
  <div class="text-end mt-4">
    <v-hover v-slot="{isHovering,props}">
      <v-btn class="mr-4 text-8F8681" variant="outlined" v-bind="props"
             :elevation="isHovering ? 2:8" @click="openModal(true)">
        建立新的優惠券
      </v-btn>
    </v-hover>
  </div>
  <v-table class="table mt-4 bg-brown-lighten-5">
    <thead>
    <tr>
      <th class="text-subtitle-1 font-weight-bold">優惠券名稱</th>
      <th class="d-none d-sm-table-cell  text-subtitle-1 font-weight-bold">折扣％數</th>
      <th class="text-subtitle-1 font-weight-bold">到期日</th>
      <th class="d-none d-sm-table-cell  text-subtitle-1 font-weight-bold">是否啟用</th>
      <th class="text-subtitle-1 font-weight-bold">編輯</th>
      <th class="text-subtitle-1 font-weight-bold">刪除</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item) in coupons" :key="item.id">
      <td class="text-8F8681">{{ item.title }}</td>
      <td class="d-none d-sm-table-cell  text-8F8681">{{ item.percent }}</td>
      <td class="text-8F8681">
        {{ $dayjs(item.due_date).format('YYYY-MM-DD') }}
      </td>
      <td class="d-none d-sm-table-cell  bgF5F">
        <span v-if="item.is_enabled" class="text-success">啟用</span>
        <span v-else class="text-grey-darken-1">未啟用</span>
      </td>
      <td class="bgF5F">
        <v-btn variant="outlined" color="blue" @click="openModal(false, item)">編輯</v-btn>
      </td>
      <td class="bgF5F">
        <v-btn variant="outlined" color="red" @click="openDel(item)">
          <i class="far fa-trash-alt"></i>
        </v-btn>
      </td>
    </tr>
    </tbody>
  </v-table>

  <div class="text-center">
    <v-pagination class="my-4" v-model="page" :length="totalPage" :total-visible="5"></v-pagination>
  </div>

  <v-dialog v-model="dialog">
    <v-card class="mx-auto RWDcard">
      <v-card-title class="bg-a67f78 text-white">新增優惠券</v-card-title>
      <v-card-item>
        <h4>名稱</h4>
        <v-text-field label="請輸入優惠券名稱" variant="solo-filled" class="mt-2"
                      v-model="tempCoupon.title"></v-text-field>
        <h4>優惠碼</h4>
        <v-text-field label="請輸入優惠碼" variant="solo-filled" class="mt-2"
                      v-model="tempCoupon.code"></v-text-field>
        <h4>到期日</h4>
        <v-text-field type="date" label="請輸入到期日" variant="solo-filled" class="mt-2"
                      v-model="due_date"></v-text-field>
        <h4>折扣％數</h4>
        <v-text-field label="請輸入折扣％數" variant="solo-filled" class="mt-2"
                      v-model="tempCoupon.percent"></v-text-field>
        <v-checkbox label="是否啟用" v-model="tempCoupon.is_enabled"
                    :true-value="1" :false-value="0"></v-checkbox>
      </v-card-item>
      <v-card-actions class="d-flex justify-end">
        <v-btn class="ma-4" variant="outlined" @click="cancelModal">取消</v-btn>
        <v-btn class="ma-4" variant="outlined" @click="updateCoupon">確定</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="dialogDel">
    <v-card class="mx-auto RWDdialogDel">
      <v-card-title class="bg-a67f78 text-white">刪除優惠券</v-card-title>
      <v-card-item>
        是否刪除 <span class="text-red">{{ tempCoupon.title }}</span> 優惠券 ( 刪除後將無法恢復 )
      </v-card-item>
      <v-divider class="my-4"/>
      <v-card-actions class="justify-end">
        <v-btn variant="outlined" @click="cancelModal">取消</v-btn>
        <v-btn variant="outlined" @click="DelCoupon">確定</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  name: 'COUPONLIST',
  data(){
    return{
      dialog:false,
      dialogDel:false,
      coupons:{},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: '',
        due_date: '',
        code: '',
      },
      due_date: '',
      page:1,
      totalPage:0,
    }
  },
  watch: {
    due_date() {
      let vm = this;
      let timestamp = dayjs(vm.due_date).valueOf();
      vm.tempCoupon.due_date = timestamp;
    },
    page() {
      let vm = this;
      vm.getCoupons(vm.page);
    }
  },
  methods:{
    getCoupons(page) {
      let vm = this;
      vm.$store.dispatch('Loading',true);
      axios.get(`https://vue-course-api.hexschool.io/api/hogankai/admin/coupons?page=${page}`)
        .then((res) => {
          vm.coupons = res.data.coupons;
          vm.totalPage = res.data.pagination.total_pages;
          vm.$store.dispatch('Loading',false);
          console.log(res.data);
        });
    },
    openModal(isNew, item) {
      let vm = this;
      vm.dialog = true;
      vm.isNew = isNew;
      if (vm.isNew) {
        vm.tempCoupon = {};
      } else {
        vm.tempCoupon = Object.assign({}, item);
      }
    },
    updateCoupon() {
      let vm = this;
      vm.$store.dispatch('Loading',true);
      if (vm.tempCoupon.is_enabled == 0) {
        vm.tempCoupon.code = null;
      }
      if (vm.isNew) {
        axios.post(`https://vue-course-api.hexschool.io/api/hogankai/admin/coupon`, {data: vm.tempCoupon})
          .then(() => {
            vm.dialog = false;
            vm.getCoupons(vm.page);
            vm.$store.dispatch('Loading',false);
          });
      } else {
        axios.put(`https://vue-course-api.hexschool.io/api/hogankai/admin/coupon/${vm.tempCoupon.id}`,
          {data: vm.tempCoupon})
          .then(() => {
            vm.dialog = false;
            vm.getCoupons(vm.page);
            vm.$store.dispatch('Loading',false)
          });
      }
    },
    cancelModal() {
      this.dialog = false;
      this.dialogDel = false;
    },
    openDel(item) {
      let vm = this;
      vm.tempCoupon = Object.assign({}, item);
      vm.dialogDel = true;
    },
    DelCoupon() {
      let vm = this;
      vm.$store.dispatch('Loading',true);
      axios.delete(`https://vue-course-api.hexschool.io/api/hogankai/admin/coupon/${vm.tempCoupon.id}`)
        .then(() => {
          vm.dialogDel = false;
          vm.getCoupons(vm.page);
          vm.$store.dispatch('Loading',false);
        })
    },
  },
  created() {
    this.getCoupons();
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
@media screen and (max-width: 600px) {
  .RWDdialogDel{
    width: 100%;
  }
}
</style>
