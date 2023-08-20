<template>
  <b-card>
    <b-row>
      <b-col>
        <b-card
          class="pointer"
          :bg-variant="variantCard.credit.bg"
          :border-variant="variantCard.credit.border"
          @click="callCreditCard"
        >
          <div class="d-flex align-items-center justify-content-center">
            <b-icon icon="credit-card-fill" font-scale="3"></b-icon>
            <span class="ml-2">Cartão de crédito</span>
          </div>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          class="pointer"
          :bg-variant="variantCard.pix.bg"
          :border-variant="variantCard.pix.border"
          @click="callPix"
        >
          <div class="d-flex align-items-center justify-content-center">
            <b-icon icon="x-diamond-fill" font-scale="3"></b-icon>
            <span class="ml-2">PIX</span>
          </div>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          class="pointer"
          :bg-variant="variantCard.bill.bg"
          :border-variant="variantCard.bill.border"
          @click="callBill"
        >
          <div class="d-flex align-items-center justify-content-center">
            <b-icon font-scale="3" icon="justify-left"></b-icon>
            <span class="ml-2">Boleto</span>
          </div>
        </b-card>
      </b-col>
    </b-row>

    <div class="mt-4">
      <component :is="currentComponent"></component>
    </div>
    <Details />
  </b-card>
</template>

<script>
import CreditCard from './CreditCard/CreditCard'
import Pix from './Pix/Pix'
import Bill from './Bill/Bill'
import Details from '../Details/Details'

export default {
    components: {
        CreditCard,
        Pix,
        Bill,
        Details,
    },
    data() {
      return {
        variantCard: {
            credit: {bg: 'light', border: 'primary' },
            pix: { bg: 'Default', border: '' },
            bill: { bg: 'Default', border: '' },
        },
        currentComponent: 'CreditCard',
        mockCreditCard: {
            cvv: '',
            cardNumber: '',
            cardName: '',
            month: '01',
            year: '2023',
            cardFlag: '',
        }
      }
    },
    computed: {
        methodPaymentSelected: {
            get() {
                return this.$store.state.methodPaymentSelected;
            },
            set(value) {
                this.$store.commit("setMethodPaymentSelected", value);
            },
        },
    },
    methods: {
        callBill() {
            this.variantCard = {
                credit: {bg: 'Default', border: '' },
                pix: { bg: 'Default', border: '' },
                bill: { bg: 'light', border: 'primary' },
            };
            this.$store.commit("setCreditCard", this.mockCreditCard);
            this.methodPaymentSelected = 'Boleto';
            this.currentComponent = 'Bill';
        },
        callPix() {
            this.variantCard = {
                credit: {bg: 'Default', border: '' },
                pix: { bg: 'light', border: 'primary' },
                bill: { bg: 'Default', border: '' },
            };
            this.$store.commit("setCreditCard", this.mockCreditCard);
            this.methodPaymentSelected = 'Pix';
            this.currentComponent = 'Pix';
        },
        callCreditCard() {
            this.variantCard = {
                credit: {bg: 'light', border: 'primary' },
                pix: { bg: 'Default', border: '' },
                bill: { bg: 'Default', border: '' },
            };
            this.methodPaymentSelected = 'Cartão de crédito';
            this.currentComponent = 'CreditCard';
        }
    }
}
</script>
<style scoped>
.pointer {
  cursor: pointer;
}
</style>
