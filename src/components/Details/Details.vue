<template>
  <div class="mt-5">
    <h4>Detalhes da compra:</h4>
    <div class="d-flex justify-content-between mb-3">
      <b>{{ product }}</b>
      <span>{{ valueProduct }}</span>
    </div>
    <b-row v-if="methodPaymentSelected !== 'Cartão de crédito'">
      <b-col cols="6">
        <b-form-group
          label="CPF/CNPJ (Para emissão de Nota Fiscal)"
          label-for="cpf"
          label-align="left"
        >
          <b-form-input id="cpf" v-model="cpf" v-mask="teste"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col cols="6">
        <b-icon icon="credit-card-fill" font-scale="1" class="mr-2"></b-icon>
        <span
          >Essa cobrança aparecerá na sua fatura como : PAYT*{{ product }}</span
        >
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col cols="6">
        <b-button variant="primary" class="w-100" size="lg" @click="checkout"
          >Compra agora</b-button
        >
      </b-col>
    </b-row>
    <b-img
      class="image-footer mt-4"
      src="https://cdn.awsli.com.br/1315/1315335/arquivos/site%20protegido.png"
    ></b-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formIsValid: true,
    };
  },
  watch: {
    cpf() {
      if (this.cpf.length === 14 || this.cpf.length === 18) {
        console.log("AddPaymentInfo", this.cpf);
      }
    },
  },
  computed: {
    product() {
      return this.$store.getters.product;
    },
    valueProduct() {
      return this.$store.getters.valueProduct;
    },
    teste() {
      if (this.cpf.length < 15) {
        return "###.###.###-##";
      }
      return "##.###.###/####-##";
    },
    methodPaymentSelected() {
      return this.$store.state.methodPaymentSelected;
    },
    cpf: {
      get() {
        return this.$store.state.cpf;
      },
      set(value) {
        this.$store.commit("setCPF", value);
      },
    },
  },
  methods: {
    checkout() {
      for (const key in this.$store.state) {
        if (this.$store.state[key]) {
          this.formIsValid = true;
          continue;
        }
        this.formIsValid = false;
        break;
      }
      if (this.formIsValid) {
        console.log("Purchase");
        this.makeToast(
          "success",
          "Compra realizada com sucesso",
          "Compra realizada"
        );
      } else {
        console.log("PurchaseFail");
        this.makeToast(
          "danger",
          "Verifique os campos preenchidos",
          "Falha na compra"
        );
      }
    },
    makeToast(variant, text, title) {
      this.$bvToast.toast(text, {
        title: title,
        variant: variant,
        solid: true,
      });
    },
  },
};
</script>

<style scoped>
.image-footer {
  height: 100px;
}
</style>