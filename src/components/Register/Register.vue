<template>
  <b-card>
    <b-row>
      <b-col cols="2" class="d-flex justify-content-start">
        <label>Nome Completo</label>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-input @focus="InitiateCheckout" v-model="name" placeholder="Digite seu nome completo" />
      </b-col>
    </b-row>

	<b-row class="mt-3">
		<b-col>
			<b-row>
				<b-col cols="2" class="d-flex justify-content-start">
					<label>E-mail</label>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-form-input @focus="AddToCart" v-model="email" placeholder="Digite seu E-mail" />
				</b-col>
			</b-row>
		</b-col>
		<b-col>
			<b-row>
				<b-col cols="2" class="d-flex justify-content-start">
					<label>Celular</label>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-form-input @focus="AddToCart" v-model="phone" v-mask="'(##) # ####-####'" placeholder="(11) x0000-0000" />
				</b-col>
			</b-row>
		</b-col>
	</b-row>

	<b-row class="mt-3">
		<b-col>
			<b-row>
				<b-col cols="2" class="d-flex justify-content-start">
					<label>CEP</label>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="8">
					<b-form-input placeholder="Digite seu CEP" v-mask="'#####-###'" v-model="address.cep"/>
					<b-form-invalid-feedback :state="!validationCep">
						CEP invalido
					</b-form-invalid-feedback>
				</b-col>
				<b-button class="max-height-button" @click="getAddress">Pesquisar Endereço</b-button>
			</b-row>
		</b-col>
		<b-col>
			<b-row>
				<b-col cols="2" class="d-flex justify-content-start">
					<label>Endereço</label>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-form-input placeholder="Endereço" :value="address.logradouro"/>
				</b-col>
			</b-row>
		</b-col>
	</b-row>

		<b-row class="mt-3">
		<b-col cols="2">
			<b-row>
				<b-col cols="2" class="d-flex justify-content-start">
					<label>Numero</label>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-form-input v-model="address.numero"/>
				</b-col>
			</b-row>
		</b-col>
		<b-col>
			<b-row>
				<b-col cols="2" class="d-flex justify-content-start">
					<label>Bairro</label>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-form-input placeholder="Endereço" :value="address.bairro"/>
				</b-col>
			</b-row>
		</b-col>
		<b-col>
			<b-row>
				<b-col cols="2" class="d-flex justify-content-start">
					<label>Cidade</label>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-form-input placeholder="Endereço" :value="address.localidade"/>
				</b-col>
			</b-row>
		</b-col>
		<b-col cols="2">
			<b-row>
				<b-col cols="2" class="d-flex justify-content-start">
					<label>Estado</label>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-form-select
						v-model="selected"
						:options="address.uf"
						:disabled="true"
					></b-form-select>
				</b-col>
			</b-row>
		</b-col>
	</b-row>
  </b-card>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
		selected: 'SP',
    };
  },
  watch: {
	address() {
		if (this.address.cep && this.address.numero) {
			console.log('FillAddress');
		}
	}
  },
  computed: {
		name: {
			get() {
				return this.$store.state.name;
			},
			set(value) {
				this.$store.commit('setName', value);
			},
		},
		email: {
			get() {
				return this.$store.state.email;
			},
			set(value) {
				this.$store.commit('setEmail', value);
			},
		},
		phone: {
			get() {
				return this.$store.state.phone;
			},
			set(value) {
				this.$store.commit('setPhone', value);
			},
		},
		address: {
			get() {
				return this.$store.state.address;
			},
			set(value) {
				this.$store.commit('setAddress', value);
			},
		},
		validationCep() {
			return this.address.cep.length < 7 && this.address.cep !== '';
		},
  },
  methods: {
	async getAddress() {
		if (!this.validationCep) {
			const { data } = await axios.get(`https://viacep.com.br/ws/${this.address.cep.replace('-', '')}/json/`);
			this.address = data;
			this.address.uf = data.uf.split()
		}
	},
	InitiateCheckout() {
		console.log('InitiateCheckout');
		this.AddToCart();
	},
	AddToCart() {
		if(this.phone || this.email && this.name) {
			console.log('AddToCart');
		}
	}
  },
};
</script>

<style scoped>
	.max-height-button {
		height: 2.4rem;
	}
</style>>