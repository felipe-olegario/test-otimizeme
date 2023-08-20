<template>
  <b-card>
    <b-row>
      <b-col>
        <b-form-group
          id="nameInput"
          label="Nome no Cartão"
          label-for="name"
          label-align="left"
        >
          <b-form-input
            id="name"
            v-model="creditCard.cardName"
            @focus="AddPaymentInfo"
            maxlength="30"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="cardNumberInput"
          label="Número do Cartão"
          label-for="cardNumber"
          label-align="left"
        >
          <b-form-input
            id="cardNumber"
            v-model="creditCard.cardNumber"
            v-mask="'#### #### #### ####'"
            @input="checkCardType"
            @focus="AddPaymentInfo"
          ></b-form-input>
        </b-form-group>
        <b-row>
          <b-col>
            <b-form-group
              id="expiryInput"
              label="Mês"
              label-for="expiry"
              label-align="left"
            >
              <b-form-select v-model="creditCard.month" :options="months"></b-form-select>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group
              id="expiryInput"
              label-for="expiry"
              label="Ano"
              label-align="left"
            >
              <b-form-select v-model="creditCard.year" :options="years"></b-form-select>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="CVV" label-for="cvv" label-align="left">
              <b-form-input
                id="cvv"
                v-model="creditCard.cvv"
                required
                maxlength="3"
                @mouseenter="showBackCard"
                @mouseleave="showFrontCard"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <b-form-group
              id="expiryInput"
              label-for="expiry"
              label="Número de parcelas"
              label-align="left"
            >
              <b-form-select
                v-model="portion"
                :options="portions"
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="5">
        <div class="card-container">
          <div class="card-custom front">
            <div class="d-flex justify-content-end w-100">
              <b-img
                fluid
                class="height-flag"
                :src="flagCard"
                alt=""
              />
            </div>
            <h3>{{ creditCard.cardNumber || '#### #### #### ####' }}</h3>
            <div class="d-flex justify-content-between w-100">
              <div class="box-column">
                <span>Titular</span>
                <span>{{ creditCard.cardName || 'NOME COMPLETO' }}</span>
              </div>
              <div class="box-column">
                <span>Validade</span>
                <span>{{ dynamicDate }}</span>
              </div>
            </div>
          </div>
          <div class="card-custom back">
            <div class="stripe"></div>
            <div class="box">
              <div class="cvv-box">
                <span>{{ creditCard.cvv || 'CVV' }}</span>
              </div>
              <b-img
                fluid
                class="height-flag"
                :src="flagCard"
                alt=""
              />
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
export default {
  name: "CreditCard",
  data() {
    return {
      cardFlags: {
        visa: /^4[0-9]{15}$/,
        mastercard:
          /^(50|5[6-9]|6007|6220|6304|6703|6708|6759|676[1-3])|((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        amex: /^3[47][0-9]{13}$/,
        hipercard: /^606282|^3841(?:[0|4|6]{1})0/,
        elo: /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/,
      },
    };
  },
  computed: {
    creditCard: {
      get() {
          return this.$store.state.creditCard;
      },
      set(value) {
          this.$store.commit('setCreditCard', value);
      },
    },
    portion: {
      get() {
          return this.$store.state.portion;
      },
      set(value) {
          this.$store.commit('setPortion', value);
      },
    },
    portions() {
      return this.$store.state.portions;
    },    
    months() {
      return this.$store.state.months;
    },
    years() {
      return this.$store.state.years;
    },
    dynamicDate() {
      return `${this.creditCard.month}/${ this.creditCard.year ? this.creditCard.year : this.creditCard.year.slice(2)}` || "MÊS/ANO";
    },
    flagCard() {
      if (this.creditCard.cardFlag === 'visa') {
        return 'https://play-lh.googleusercontent.com/lKebetEHVDuBrbq5KJJ4MK6V6BaFuo0Mj9Qy9YZkoenrEDZVU-IzLrbAuoKMaCT4nA'
      } else if (this.creditCard.cardFlag === 'mastercard') {
        return 'https://www.sisprimedobrasil.com.br/resize.php?image=imagens/artigos/capas/2018.01.25-13.39.41.png&width=1090&height=500&sessao=crop'
      }  else if (this.creditCard.cardFlag === 'diners') {
        return 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Diners_Club_Logo3.svg'
      }  else if (this.creditCard.cardFlag === 'amex') {
        return 'https://ww1.freelogovectors.net/wp-content/uploads/2023/05/american-express-logo-freelogovectors.net_-1.png'
      }  else if (this.creditCard.cardFlag === 'hipercard') {
        return 'https://upload.wikimedia.org/wikipedia/commons/8/89/Hipercard_logo.svg'
      }  else if (this.creditCard.cardFlag === 'elo') {
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Elo_card_association_logo_-_black_text.svg/1200px-Elo_card_association_logo_-_black_text.svg.png'
      }
      return '';
    },
  },
  methods: {
    showBackCard() {
      document.querySelector(".front").style.transform =
        "perspective(1000px) rotateY(-180deg)";
      document.querySelector(".back").style.transform =
        "perspective(1000px) rotateY(0deg)";
    },
    showFrontCard() {
      document.querySelector(".front").style.transform =
        "perspective(1000px) rotateY(0deg)";
      document.querySelector(".back").style.transform =
        "perspective(1000px) rotateY(180deg)";
      this.AddPaymentInfo();
    },
    checkCardType() {
      const cardNumberWithoutSpaces = this.creditCard.cardNumber.replace(/ /g, ''); // Remove spaces
      if (cardNumberWithoutSpaces.length === 16) {
        for (const [type, regex] of Object.entries(this.cardFlags)) {
          if (regex.test(parseInt(cardNumberWithoutSpaces))) {
            this.creditCard.cardFlag = type;
            break;
          }
        }
      }
    },
    AddPaymentInfo() {
      if (
        this.creditCard.cardNumber &&
        this.creditCard.cardName &&
        this.creditCard.month &&
        this.creditCard.year &&
        this.creditCard.cvv) {
        console.log('AddPaymentInfo', this.creditCard);
      }
    },
  },
};
</script>

<style scoped>
.height-flag {
  height: 50px;
}
.front {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  transform: perspective(1000px) rotateY(0deg);
  transition: transform 0.4s ease-out;
  padding: 20px;
}
.card-custom {
  height: 230px;
  width: 100%;
  background: linear-gradient(45deg, #5d00b4, orange);
  position: relative;
  border-radius: 7px;
  color: white;
}
.back {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  backface-visibility: hidden;
  transform: perspective(1000px) rotateY(180deg);
  transition: transform 0.4s ease-out;
}
.stripe {
  width: 100%;
  background: black;
  height: 50px;
  margin-top: 30px;
}
.box {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.cvv-box {
  height: 45px;
  padding: 10px;
  margin-top: 20px;
  background: white;
  border-radius: 5px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.box img {
  margin-top: 10px;
}
.card-container {
  perspective: 1000px; /* Aumente esse valor para um efeito mais suave */
}
.box-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.cvv-box span {
  color: black;
}
</style>