<template>
  <v-container>
    <v-card-text>
      <v-text-field density="compact" variant="outlined" label="Search" append-inner-icon="mdi-magnify"
                    class="w-50 ms-auto" v-model="inputText"
      ></v-text-field>
    </v-card-text>

    <v-row v-if="haveProduct">
      <v-col :cols="cols[0]" v-for="item in filterProducts" :key="item.id">
        <v-card elevation="4">
          <div class="imgBox">
            <v-img class="imgTransition" :src="`${item.imageUrl}`" cover height="300"></v-img>
          </div>
          <v-sheet class="float-end rounded text-caption ma-2 px-1" color="grey-darken-2">{{ item.category }}</v-sheet>
          <v-card-title class="text-8F8681">{{ item.title }}</v-card-title>
          <v-card-item>
            <div class="d-flex justify-space-between">
              <div>
                <v-sheet class="text-grey-darken-2" v-if="item.price == item.origin_price">
                  <span class="">NT</span>{{ $filter.currency(item.origin_price) }}
                </v-sheet>
                <v-sheet class="text-grey-lighten-1 text-decoration-line-through"
                         v-if="item.price !== item.origin_price">
                  NT{{ $filter.currency(item.origin_price) }} 元
                </v-sheet>
              </div>
              <div>
                <v-sheet class="text-success" v-if="item.price !== item.origin_price">
                  <span class="">NT</span>{{ $filter.currency(item.price) }}
                </v-sheet>
              </div>
            </div>
          </v-card-item>

          <v-divider></v-divider>

          <v-card-actions class="d-flex justify-space-around">
            <v-btn :loading="Loading.caption == item.id" variant="outlined"
                   class="text-8F8681" @click="getProduct(item.id)">查看更多
            </v-btn>
            <v-btn :loading="Loading.cart == item.id" prepend-icon="mdi-cart-outline"
                   class="text-8F8681" variant="outlined" @click="addtoCart(item.id,1)">
              加入購物車
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-sheet v-if="noProduct" min-height="600" class="d-flex align-center justify-center bg-brown-lighten-5">
      <h1><i class="fa-solid fa-circle-exclamation fs-1">找不到此商品</i></h1>
    </v-sheet>

    <v-dialog v-model="dialog">
      <v-card width="70%" class="mx-auto">
        <v-card-title class="bg-a67f78 text-white d-flex align-center justify-space-between">
          <p>{{ product.title }}</p>
          <v-btn variant="text" icon="mdi-close-thick" class="float-end" @click="closeDialog"></v-btn>
        </v-card-title>
        <v-img :src="product.imageUrl" width="80%" class="mx-auto my-4"></v-img>
        <v-card-item>
          <div>
            <p class="text-end">{{ product.description }}</p>
            <p>{{ product.content }}</p>
          </div>
          <div class="d-flex justify-space-between">
            <div>
              <v-sheet class="text-grey-darken-2" v-if="product.price == product.origin_price">
                <span class="">NT</span>{{ $filter.currency(product.origin_price) }}
              </v-sheet>
              <v-sheet class="text-red text-decoration-line-through" v-if="product.price !== product.origin_price">
                NT{{ $filter.currency(product.origin_price) }} 元
              </v-sheet>
            </div>
            <div>
              <v-sheet class="text-success" v-if="product.price !== product.origin_price">
                <span class="">NT</span>{{ $filter.currency(product.price) }}
              </v-sheet>
            </div>
          </div>
          <div class="mt-6">
            <v-select variant="solo-filled" label="選擇數量" :items="[1,2,3,4,5,6,7,8,9,10]" v-model="QTY"></v-select>
          </div>

          <v-divider></v-divider>

          <v-card-actions>
            <v-sheet class="ms-auto" v-if="product.price">小計{{ $filter.currency(QTY * product.price) }}</v-sheet>
            <v-sheet class="ms-auto" v-if="!product.price">小計{{ $filter.currency(QTY * product.origin_price) }}
            </v-sheet>
            <v-btn class="ml-5" prepend-icon="mdi-cart-outline" :loading="Loading.cart == product.id"
                   variant="outlined" @click="addtoCart(product.id,QTY)">
              加到購物車
            </v-btn>
          </v-card-actions>
        </v-card-item>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogBill">
      <v-window v-model="onboarding" show-arrows="hover">
        <v-window-item>
          <v-card elevation="5" class="d-flex align-center justify-center ma-2 w-100">
            <v-img src="../image/homeimg2.jpg" class="position-relative" />
            <v-btn icon="mdi-close" variant="tonal" class="position-absolute"
                   style="top:2%; right: 2%" @click="dialogBillClose" />
          </v-card>
        </v-window-item>
        <v-window-item>
          <v-card elevation="2" class="d-flex align-center justify-center ma-2">
            <v-img src="../image/homeimg.jpg" class="position-relative" />
            <v-btn icon="mdi-close" variant="tonal" class="position-absolute"
                   style="top:2%; right: 1%" @click="dialogBillClose" />
          </v-card>
        </v-window-item>
      </v-window>
    </v-dialog>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "Customer-Orders-TOP",
  data() {
    return {
      dialog: false,
      dialogBill: false,
      onboarding: 0,
      btnLoading: false,
      Loading: {
        cart: false,
        caption: false,
      },
      product: [],
      QTY: 1,
      noProduct: false,
      haveProduct: true,
      inputText: '',
    }
  },
  methods: {
    getProduct(id) {
      let vm = this;
      vm.Loading.caption = id;
      axios.get(`https://vue-course-api.hexschool.io/api/hogankai/product/${id}`)
        .then((res) => {
          vm.Loading.caption = false;
          vm.product = res.data.product;
        });
      vm.dialog = true;
    },
    closeDialog() {
      let vm = this;
      vm.dialog = false;
    },
    addtoCart(id, qty) {
      let vm = this;
      let cart = {
        product_id: id,
        qty,
      };
      vm.Loading.cart = id;
      axios.post(`https://vue-course-api.hexschool.io/api/hogankai/cart`, {data: cart})
        .then((res) => {
          console.log(res)
          vm.Loading.cart = false;
          vm.QTY = 1;
          vm.$store.dispatch('getCarts');
          vm.dialog = false;
        });
    },
    dialogBillClose(){
      this.dialogBill = false;
    }
  },
  watch: {
    inputText() {
      let vm = this;
      if (vm.filterProducts.length == 0) {
        vm.haveProduct = false;
        vm.noProduct = true;
      } else {
        vm.haveProduct = true;
        vm.noProduct = false;
      }
    },
  },
  computed: {
    ...mapActions(['getProductsAll']),
    ...mapGetters(['productsAll']),
    filterProducts() {
      let vm = this;
      let newProductsAll = vm.productsAll.filter(function (item){
        return item.title.match('背心')
      });
      return newProductsAll.filter(function (item) {
        return item.title.match(vm.inputText);
      })
    },
    cols() {
      const {sm, xs} = this.$vuetify.display;
      return sm ? [6]
        : xs ? [12]
          : [4]
    }
  },
  created() {
    this.getProductsAll;
  }
}
</script>

<style scoped>
.imgBox {
  overflow: hidden;
}

.imgTransition {
  transition: all 1s ease-out;
}

.imgTransition:hover {
  transform: scale(1.2, 1.2);
}

.bg-a67f78 {
  background: #a67f78;
}

.text-8F8681 {
  color: #8F8681;
}
</style>
