<template>
  <b-card>
      <b-row>
        <b-col cols="4">
            <b-img src="https://blog.ghimprove.com/wp-content/uploads/2023/03/tr-aws-certification-learn-aws-online-1.png" fluid alt="Responsive image"></b-img>
        </b-col>
        <b-col cols="6" class="d-flex align-items-center justify-content-start">
          <div class="mt-5">
              <b>
                {{product}}
              </b>
              <h2 class="text-primary">{{valueProduct}}</h2>
              <span>Plano mensal com renovação automatica</span>
          </div>
        </b-col>
        <b-col cols="2">
            <b-form-select
                v-model="selected"
                :options="options"
                :disabled="true"
            ></b-form-select>
        </b-col>
    </b-row>
    <b-card-footer class="h-100 bg-primary text-light d-flex justify-content-start mt-4">
      <span><b>contatootimizime@gmail.com</b></span>
    </b-card-footer>
  </b-card>
</template>

<script>
export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Alterar País' },
        ]
      }
    },
    computed: {
      product() {
        return this.$store.getters.product;
      },
      valueProduct() {
        return this.$store.getters.valueProduct;
      },
    },
}
</script>