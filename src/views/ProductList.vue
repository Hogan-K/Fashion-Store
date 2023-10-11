<template>
  <div class="text-end mt-4">
    <v-hover v-slot="{isHovering,props}">
      <v-btn class="mr-4 text-8F8681" variant="outlined" v-bind="props" :elevation="isHovering ? 2:8" @click="openModal(true)">
        建立新的產品
      </v-btn>
    </v-hover>
  </div>
  <v-table class="mt-4 bg-brown-lighten-5">
    <thead>
    <tr>
      <th class="d-none d-lg-table-cell  text-subtitle-1 font-weight-bold">分類</th>
      <th class="text-subtitle-1 font-weight-bold">產品名稱</th>
      <th class="d-none d-sm-table-cell  text-subtitle-1 font-weight-bold">原價</th>
      <th class="text-subtitle-1 font-weight-bold">售價</th>
      <th class="d-none d-md-table-cell  text-subtitle-1 font-weight-bold">是否啟用</th>
      <th class="text-subtitle-1 font-weight-bold">編輯</th>
      <th class="text-subtitle-1 font-weight-bold">刪除</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item) in products" :key="item.id">
      <td class="d-none d-lg-table-cell  text-8F8681">{{ item.category }}</td>
      <td class="text-8F8681">{{ item.title }}</td>
      <td class="d-none d-sm-table-cell  text-8F8681">
        {{ $filter.currency(item.origin_price) }}
      </td>
      <td class="text-8F8681">
        {{ $filter.currency(item.price) }}
      </td>
      <td class="d-none d-md-table-cell">
        <span v-if="item.is_enabled" class="text-success">啟用</span>
        <span v-else class="text-secondary">未啟用</span>
      </td>
      <td>
        <v-btn variant="outlined" color="blue" @click="openModal(false,item)">編輯</v-btn>
      </td>
      <td>
        <v-btn variant="outlined" color="red" @click="openDel(item)">
          <i class="far fa-trash-alt"></i>
        </v-btn>
      </td>
    </tr>
    </tbody>
  </v-table>

  <div class="text-center">
    <v-pagination class="my-4" v-model="page" :length="pagination.total_pages" :total-visible="5"></v-pagination>
  </div>

  <v-dialog v-model="dialog">
    <v-card class="mx-auto w-75">
      <v-card-title class="bg-a67f78 text-white">新增產品</v-card-title>
      <v-row class="pa-6">
        <v-col :cols="cols[0]">
          <h4>輸入圖片網址</h4>
          <v-text-field label="請輸入圖片網址" variant="underlined" v-model="tempProduct.imageUrl"></v-text-field>
          <h4>或 上傳圖片檔案
            <span v-show="ErrImg" class="font-italic text-red"><v-icon>mdi-alert-octagram-outline</v-icon>格式錯誤</span>
          </h4>
          <v-file-input label="請選擇上傳檔案" variant="underlined" :class="{'text-red':ErrImg}"
                        prepend-icon="mdi-file" :loading="isLoading" @change="uploadFile"></v-file-input>
          <v-img :src="tempProduct.imageUrl" alt="" />
        </v-col>
        <v-col :cols="cols[1]">
          <h4>標題</h4>
          <v-text-field label="請輸入產品名稱" variant="solo-filled" class="mt-2"
                        v-model="tempProduct.title"></v-text-field>
          <h4>分類</h4>
          <v-text-field label="請輸入產品類別" variant="solo-filled" class="mt-2"
                        v-model="tempProduct.category"></v-text-field>
          <h4>單位</h4>
          <v-text-field label="請輸入單位" variant="solo-filled" class="mt-2"
                        v-model="tempProduct.unit">>
          </v-text-field>
          <h4>原價</h4>
          <v-text-field label="請輸入原價" variant="solo-filled" class="mt-2"
                        v-model="tempProduct.origin_price"></v-text-field>
          <h4>售價</h4>
          <v-text-field label="請輸入售價" variant="solo-filled" class="mt-2"
                        v-model="tempProduct.price"></v-text-field>

          <v-divider class="mb-4"/>

          <h4>產品描述</h4>
          <v-textarea label="請輸入產品描述" variant="solo-filled" rows="2" clearable
                      v-model="tempProduct.description"></v-textarea>
          <h4>說明內容</h4>
          <v-textarea label="請輸入產品內容" variant="solo-filled" rows="2" clearable
                      v-model="tempProduct.content"></v-textarea>
          <v-checkbox label="是否啟用" v-model="tempProduct.is_enabled"
                      :true-value="1" :false-value="0"></v-checkbox>
        </v-col>
      </v-row>

      <v-divider/>

      <v-card-actions class="d-flex justify-end">
        <v-btn class="ma-4" variant="outlined" @click="cancelProduct">取消</v-btn>
        <v-btn class="ma-4" variant="outlined" @click="updateProduct">確定</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="dialogDel">
    <v-card class="mx-auto RWDdialogDel">
      <v-card-title class="bg-a67f78 text-white">刪除產品</v-card-title>
      <v-card-item>
        是否刪除 <span class="text-red">{{ tempProduct.title }}</span> 商品 ( 刪除後將無法恢復 )
      </v-card-item>
      <v-divider class="my-4"/>
      <v-card-actions class="justify-end">
        <v-btn variant="outlined" @click="cancelProduct">取消</v-btn>
        <v-btn variant="outlined" @click="DelProduct">確定</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "ProductList",
  data() {
    return {
      isLoading: false,
      dialog: false,
      dialogDel: false,
      isNew: false,
      tempProduct: {},
      page: 1,
      ErrImg:false,
    }
  },
  methods: {
    getProducts(page) {
      let vm = this;
      vm.$store.dispatch('getProducts', page);
    },
    openModal(isNew, item) {
      let vm = this;
      if (isNew == true) {
        vm.tempProduct = {};
        vm.isNew = true;
      } else {
        vm.tempProduct = Object.assign({}, item);
        vm.isNew = false;
      }
      vm.dialog = true;
    },
    updateProduct() {
      let vm = this;
      let httpMethod = 'post';
      let api = `https://vue-course-api.hexschool.io/api/hogankai/admin/product`;
      if (!vm.isNew) {
        api = `https://vue-course-api.hexschool.io/api/hogankai/admin/product/${vm.tempProduct.id}`;
        httpMethod = 'put';
      }
      if (vm.tempProduct.price == '') {
        vm.tempProduct.price = vm.tempProduct.origin_price;
      }
      vm.$store.dispatch('Loading', true);
      axios[httpMethod](api, {data: vm.tempProduct})
        .then((res) => {
          console.log(res.data)
          if (res.data.success) {
            vm.dialog = false;
            vm.getProducts();
            vm.$store.dispatch('Loading', false);
            let alert = {
              status: true,
              type: 'success',
              title: '',
              text: '上傳成功',
            };
            vm.$store.dispatch('setAlert', alert);
          } else {
            vm.$store.dispatch('Loading', false);
            let alert = {
              status:true,
              type: 'warning',
              title: 'red',
              text: '上傳失敗',
            };
            vm.$store.dispatch('setAlert', alert);
          }
        });
    },
    openDel(item) {
      let vm = this;
      vm.tempProduct = Object.assign({}, item);
      vm.dialogDel = true;
    },
    DelProduct() {
      let vm = this;
      vm.$store.dispatch('Loading', true);
      axios.delete(`https://vue-course-api.hexschool.io/api/hogankai/admin/product/${vm.tempProduct.id}`)
        .then((res) => {
          console.log(res.data)
          vm.dialogDel = false;
          vm.getProducts(vm.page);
          vm.$store.dispatch('Loading', false);
        })
    },
    cancelProduct() {
      let vm = this;
      vm.dialog = false;
      vm.dialogDel = false;
    },
    uploadFile(e) {
      console.log(e.target.files[0]);
      let vm = this;
      let uploadedFile = e.target.files[0];
      console.log(uploadedFile);
      let formData = new FormData();
      vm.isLoading = true;
      formData.append('file-to-upload', uploadedFile);
      axios.post(`https://vue-course-api.hexschool.io/api/hogankai/admin/upload`, formData, {
        headers: {
          'Content-Type': "multipart/form-data",
        }
      }).then((res) => {
        console.log(res)
        vm.isLoading = false;
        if (res.data.success) {
          vm.tempProduct.imageUrl = res.data.imageUrl;
          vm.ErrImg = false;
        } else {
          vm.ErrImg = true;
        }
      })
    },
  },
  watch: {
    page() {
      let vm = this;
      vm.getProducts(vm.page);
    }
  },
  computed: {
    cols() {
      const {sm, xs} = this.$vuetify.display
      return sm ? [12, 12]
        : xs ? [12, 12]
          : [4, 8]
    },
    ...mapGetters(['products', 'pagination']),
  },
  created() {
    let vm = this;
    vm.getProducts();
  },
}
</script>

<style scoped>
.bg-a67f78 {
  background: #a67f78;
}

.text-8F8681 {
  color: #8F8681;
}

@media screen and (max-width: 600px) {
  .RWDdialogDel{
    width: 100%;
  }
}
</style>
