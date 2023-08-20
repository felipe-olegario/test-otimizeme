<template>
  <div class="container mt-5">
    <Product/>
    <Register class="mt-4"/>
    <Payment class="mt-4"/>
  </div>
</template>

<script>
import Product from '../components/Product/Product'
import Register from '../components/Register/Register'
import Payment from '../components/Payment/Payment'
export default {
  components: {
    Product,
    Register,
    Payment,
  },
    mounted() {
      this.addMouseLeaveListener();
      window.addEventListener('beforeunload', this.handleBeforeUnload);
      window.addEventListener('unload', this.handleUnload);
    },
    beforeDestroy() {
      this.removeMouseLeaveListener();
      window.removeEventListener('beforeunload', this.handleBeforeUnload);
      window.removeEventListener('unload', this.handleUnload);
    },
  methods: {
    handleMouseLeave() {
      console.log('ChangeWindow');
    },
    addMouseLeaveListener() {
      document.documentElement.addEventListener('mouseleave', this.handleMouseLeave);
    },
    removeMouseLeaveListener() {
      document.documentElement.removeEventListener('mouseleave', this.handleMouseLeave);
    },
    handleBeforeUnload(event) {
      event.preventDefault();
      event.returnValue = '';
      console.log('CloseWindow');
    },
    handleUnload() {
      console.log('Usuário fechou a aba do navegador ou saiu da página.');
    }
  },
};
</script>