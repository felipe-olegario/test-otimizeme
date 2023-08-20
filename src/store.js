import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        product: 'Curso intensivo cloud - AWS',
        valueProduct: 'R$ 50,00 / mês',
        name: '',
        email: '',
        phone: '',
        address: {
            cep: '',
            logradouro: '',
            numero: '',
            bairro: '',
            localidade: '',
            uf: [
                'RJ',
            ],
        },
        creditCard: {
            cvv: '',
            cardNumber: '',
            cardName: '',
            month: '01',
            year: '2023',
            cardFlag: '',
        },
        months: [
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '10',
            '11',
            '12',
        ],
        years: [
            '2023',
            '2024',
            '2025',
            '2026',
            '2027',
            '2028',
            '2029',
            '2030',
            '2031',
            '2032',
        ],
        portion: { value: '01', text: '1x de R$ 50,0' },
        portions: [
            { value: '01', text: '1x de R$ 50,0' },
            { value: '02', text: '2x de R$ 25,0' },
            { value: '03', text: '3x de R$ 16,66' },
        ],
        methodPaymentSelected: 'Cartão de crédito',
        cpf: '',
    },
    getters: {
        product: state => state.product,
        valueProduct: state => state.valueProduct,
    },
    mutations: {
        setCPF(state, cpf) {
            state.cpf = cpf;
        },
        setName(state, name) {
            state.name = name;
        },
        setEmail(state, email) {
            state.email = email;
        },
        setPhone(state, phone) {
            state.phone = phone;
        },
        setAddress(state, address) {
            state.address = address;
        },
        setCreditCard(state, creditCard) {
            state.creditCard = creditCard;
        },
        setPortion(state, portion) {
            state.portion = portion;
        },
        setMethodPaymentSelected(state, methodPaymentSelected) {
            state.methodPaymentSelected = methodPaymentSelected;
        },
        
    },
    actions: {},
});
