<template>
  <div>
    <v-list>
      <v-list-item-title class="text-subtitle-2 font-weight-black ml-2">管理員</v-list-item-title>
      <RouterLink to="/product-list" class="text-decoration-none">
        <v-list-item class="link-color font-weight-bold">產品列表</v-list-item>
      </RouterLink>
      <RouterLink to="/order-list" class="text-decoration-none">
        <v-list-item class="link-color font-weight-bold">訂單列表</v-list-item>
      </RouterLink>
      <RouterLink to="/coupon-list" class="text-decoration-none">
        <v-list-item class="link-color font-weight-bold">優惠券</v-list-item>
      </RouterLink>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-list-item-title class="text-subtitle-2 font-weight-black ml-2">CUSTOM</v-list-item-title>
      <RouterLink to="/customer_orders" class="text-decoration-none link-color font-weight-bold">
        <v-list-item prepend-icon="mdi-format-list-bulleted">
          ALL
        </v-list-item>
      </RouterLink>
      <v-list-item>
        <v-menu location="end" transition="fab-transition">
          <template v-slot:activator="{ props }">
            <div v-bind="props" class="text-decoration-none link-color font-weight-bold">
              TOPS
            </div>
          </template>
          <v-list class="ml-3 bg-brown-lighten-5">
            <RouterLink to="/customer_orders-top" class="text-decoration-none">
              <v-list-item class="link-color font-weight-bold">
                TOPS-ALL
              </v-list-item>
            </RouterLink>
            <RouterLink to="/customer-orders-top_shirt" class="text-decoration-none">
              <v-list-item class="link-color font-weight-bold">
                SHIRT
              </v-list-item>
            </RouterLink>
            <RouterLink to="/customer-orders-top_knit" class="text-decoration-none">
              <v-list-item class="link-color font-weight-bold">
                KINT
              </v-list-item>
            </RouterLink>
            <RouterLink to="/customer-orders-top_vest" class="text-decoration-none">
              <v-list-item class="link-color font-weight-bold">
                VEST
              </v-list-item>
            </RouterLink>
          </v-list>
        </v-menu>
      </v-list-item>
      <v-list-item>
        <v-menu location="end" transition="fab-transition">
          <template v-slot:activator="{ props }">
            <div v-bind="props" class="text-decoration-none link-color font-weight-bold">
              OUTER
            </div>
          </template>
          <v-list class="ml-3 bg-brown-lighten-5">
            <RouterLink to="/customer-orders-outer" class="text-decoration-none">
              <v-list-item class="link-color font-weight-bold">
                OUTER-ALL
              </v-list-item>
            </RouterLink>
            <RouterLink to="/customer-orders-outer_blazer" class="text-decoration-none">
              <v-list-item class="link-color font-weight-bold">
                BLAZER
              </v-list-item>
            </RouterLink>
            <RouterLink to="/customer-orders-outer_overcoat" class="text-decoration-none">
              <v-list-item class="link-color font-weight-bold">
                OVERCOAT
              </v-list-item>
            </RouterLink>
            <RouterLink to="/customer-orders-outer_jacket" class="text-decoration-none">
              <v-list-item class="link-color font-weight-bold">
                JACKET
              </v-list-item>
            </RouterLink>
          </v-list>
        </v-menu>
      </v-list-item>
      <v-list-item>
        <v-menu location="end" transition="fab-transition">
          <template v-slot:activator="{ props }">
            <div v-bind="props" class="text-decoration-none link-color font-weight-bold">
              BOTTOM
            </div>
          </template>
          <v-list class="ml-3 bg-brown-lighten-5">
            <RouterLink to="/customer-orders-bottom" class="text-decoration-none">
              <v-list-item class="link-color font-weight-bold">
                BOTTOM-ALL
              </v-list-item>
            </RouterLink>
            <RouterLink to="/customer-orders-bottom_slacks" class="text-decoration-none">
              <v-list-item class="link-color font-weight-bold">
                SLACKS
              </v-list-item>
            </RouterLink>
            <RouterLink to="/customer-orders-bottom_jeans" class="text-decoration-none">
              <v-list-item class="link-color font-weight-bold">
                JEANS
              </v-list-item>
            </RouterLink>
            <RouterLink to="/customer-orders-bottom_short_pants" class="text-decoration-none">
              <v-list-item class="link-color font-weight-bold">
                PANTS
              </v-list-item>
            </RouterLink>
          </v-list>
        </v-menu>
      </v-list-item>
      <v-list-item>
        <v-menu location="end" transition="fab-transition">
          <template v-slot:activator="{ props }">
            <div v-bind="props" class="text-decoration-none link-color font-weight-bold">
              ACC
            </div>
          </template>
          <v-list class="ml-3 bg-brown-lighten-5">
            <RouterLink to="/customer-orders-acc" class="text-decoration-none">
              <v-list-item class="link-color font-weight-bold">
                ACC-ALL
              </v-list-item>
            </RouterLink>
            <RouterLink to="/customer-orders-acc_bags" class="text-decoration-none">
              <v-list-item class="link-color font-weight-bold">
                BAGS
              </v-list-item>
            </RouterLink>
            <RouterLink to="/customer-orders-acc_shoes" class="text-decoration-none">
              <v-list-item class="link-color font-weight-bold">
                SHOES
              </v-list-item>
            </RouterLink>
            <RouterLink to="/customer-orders-acc_hat" class="text-decoration-none">
              <v-list-item class="link-color font-weight-bold">
                HAT
              </v-list-item>
            </RouterLink>
          </v-list>
        </v-menu>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "SIDEBAR",
}
</script>

<style scoped>
.link-color {
  color: #8F8681;
}

.link-color:hover {
  color: white;
}
</style>
