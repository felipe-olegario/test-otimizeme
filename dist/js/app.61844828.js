(function(t){function e(e){for(var r,i,c=e[0],l=e[1],n=e[2],u=0,m=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,n||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,c=1;c<a.length;c++){var l=a[c];0!==s[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},s={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var n=0;n<c.length;n++)e(c[n]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"160e":function(t,e,a){},"194f":function(t,e,a){},"23ae":function(t,e,a){},"519d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("5f5b"),s=a("b1e0"),o=(a("f9e3"),a("2dd8"),function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Checkout")],1)}),i=[],c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-5"},[e("Product"),e("Register",{staticClass:"mt-4"}),e("Payment",{staticClass:"mt-4"})],1)},l=[],n=function(){var t=this,e=t._self._c;return e("b-card",[e("b-row",[e("b-col",{attrs:{cols:"4"}},[e("b-img",{attrs:{src:"https://blog.ghimprove.com/wp-content/uploads/2023/03/tr-aws-certification-learn-aws-online-1.png",fluid:"",alt:"Responsive image"}})],1),e("b-col",{staticClass:"d-flex align-items-center justify-content-start",attrs:{cols:"6"}},[e("div",{staticClass:"mt-5"},[e("b",[t._v(" "+t._s(t.product)+" ")]),e("h2",{staticClass:"text-primary"},[t._v(t._s(t.valueProduct))]),e("span",[t._v("Plano mensal com renovação automatica")])])]),e("b-col",{attrs:{cols:"2"}},[e("b-form-select",{attrs:{options:t.options,disabled:!0},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1),e("b-card-footer",{staticClass:"h-100 bg-primary text-light d-flex justify-content-start mt-4"},[e("span",[e("b",[t._v("contatootimizime@gmail.com")])])])],1)},d=[],u={data(){return{selected:null,options:[{value:null,text:"Alterar País"}]}},computed:{product(){return this.$store.getters.product},valueProduct(){return this.$store.getters.valueProduct}}},m=u,b=a("2877"),p=Object(b["a"])(m,n,d,!1,null,null,null),f=p.exports,v=function(){var t=this,e=t._self._c;return e("b-card",[e("b-row",[e("b-col",{staticClass:"d-flex justify-content-start",attrs:{cols:"2"}},[e("label",[t._v("Nome Completo")])])],1),e("b-row",[e("b-col",[e("b-form-input",{attrs:{placeholder:"Digite seu nome completo"},on:{focus:t.InitiateCheckout},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),e("b-row",{staticClass:"mt-3"},[e("b-col",[e("b-row",[e("b-col",{staticClass:"d-flex justify-content-start",attrs:{cols:"2"}},[e("label",[t._v("E-mail")])])],1),e("b-row",[e("b-col",[e("b-form-input",{attrs:{placeholder:"Digite seu E-mail"},on:{focus:t.AddToCart},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1)],1),e("b-col",[e("b-row",[e("b-col",{staticClass:"d-flex justify-content-start",attrs:{cols:"2"}},[e("label",[t._v("Celular")])])],1),e("b-row",[e("b-col",[e("b-form-input",{directives:[{name:"mask",rawName:"v-mask",value:"(##) # ####-####",expression:"'(##) # ####-####'"}],attrs:{placeholder:"(11) x0000-0000"},on:{focus:t.AddToCart},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)],1)],1)],1),e("b-row",{staticClass:"mt-3"},[e("b-col",[e("b-row",[e("b-col",{staticClass:"d-flex justify-content-start",attrs:{cols:"2"}},[e("label",[t._v("CEP")])])],1),e("b-row",[e("b-col",{attrs:{cols:"8"}},[e("b-form-input",{directives:[{name:"mask",rawName:"v-mask",value:"#####-###",expression:"'#####-###'"}],attrs:{placeholder:"Digite seu CEP"},model:{value:t.address.cep,callback:function(e){t.$set(t.address,"cep",e)},expression:"address.cep"}}),e("b-form-invalid-feedback",{attrs:{state:!t.validationCep}},[t._v(" CEP invalido ")])],1),e("b-button",{staticClass:"max-height-button",on:{click:t.getAddress}},[t._v("Pesquisar Endereço")])],1)],1),e("b-col",[e("b-row",[e("b-col",{staticClass:"d-flex justify-content-start",attrs:{cols:"2"}},[e("label",[t._v("Endereço")])])],1),e("b-row",[e("b-col",[e("b-form-input",{attrs:{placeholder:"Endereço",value:t.address.logradouro}})],1)],1)],1)],1),e("b-row",{staticClass:"mt-3"},[e("b-col",{attrs:{cols:"2"}},[e("b-row",[e("b-col",{staticClass:"d-flex justify-content-start",attrs:{cols:"2"}},[e("label",[t._v("Numero")])])],1),e("b-row",[e("b-col",[e("b-form-input",{model:{value:t.address.numero,callback:function(e){t.$set(t.address,"numero",e)},expression:"address.numero"}})],1)],1)],1),e("b-col",[e("b-row",[e("b-col",{staticClass:"d-flex justify-content-start",attrs:{cols:"2"}},[e("label",[t._v("Bairro")])])],1),e("b-row",[e("b-col",[e("b-form-input",{attrs:{placeholder:"Endereço",value:t.address.bairro}})],1)],1)],1),e("b-col",[e("b-row",[e("b-col",{staticClass:"d-flex justify-content-start",attrs:{cols:"2"}},[e("label",[t._v("Cidade")])])],1),e("b-row",[e("b-col",[e("b-form-input",{attrs:{placeholder:"Endereço",value:t.address.localidade}})],1)],1)],1),e("b-col",{attrs:{cols:"2"}},[e("b-row",[e("b-col",{staticClass:"d-flex justify-content-start",attrs:{cols:"2"}},[e("label",[t._v("Estado")])])],1),e("b-row",[e("b-col",[e("b-form-select",{attrs:{options:t.address.uf,disabled:!0},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1)],1)],1)},h=[],C=a("cee4"),g={data(){return{selected:"SP"}},watch:{address(){this.address.cep&&this.address.numero&&console.log("FillAddress")}},computed:{name:{get(){return this.$store.state.name},set(t){this.$store.commit("setName",t)}},email:{get(){return this.$store.state.email},set(t){this.$store.commit("setEmail",t)}},phone:{get(){return this.$store.state.phone},set(t){this.$store.commit("setPhone",t)}},address:{get(){return this.$store.state.address},set(t){this.$store.commit("setAddress",t)}},validationCep(){return this.address.cep.length<7&&""!==this.address.cep}},methods:{async getAddress(){if(!this.validationCep){const{data:t}=await C["a"].get(`https://viacep.com.br/ws/${this.address.cep.replace("-","")}/json/`);this.address=t,this.address.uf=t.uf.split()}},InitiateCheckout(){console.log("InitiateCheckout"),this.AddToCart()},AddToCart(){(this.phone||this.email&&this.name)&&console.log("AddToCart")}}},x=g,y=(a("d8d8"),Object(b["a"])(x,v,h,!1,null,"a642c8c2",null)),_=y.exports,w=function(){var t=this,e=t._self._c;return e("b-card",[e("b-row",[e("b-col",[e("b-card",{staticClass:"pointer",attrs:{"bg-variant":t.variantCard.credit.bg,"border-variant":t.variantCard.credit.border},on:{click:t.callCreditCard}},[e("div",{staticClass:"d-flex align-items-center justify-content-center"},[e("b-icon",{attrs:{icon:"credit-card-fill","font-scale":"3"}}),e("span",{staticClass:"ml-2"},[t._v("Cartão de crédito")])],1)])],1),e("b-col",[e("b-card",{staticClass:"pointer",attrs:{"bg-variant":t.variantCard.pix.bg,"border-variant":t.variantCard.pix.border},on:{click:t.callPix}},[e("div",{staticClass:"d-flex align-items-center justify-content-center"},[e("b-icon",{attrs:{icon:"x-diamond-fill","font-scale":"3"}}),e("span",{staticClass:"ml-2"},[t._v("PIX")])],1)])],1),e("b-col",[e("b-card",{staticClass:"pointer",attrs:{"bg-variant":t.variantCard.bill.bg,"border-variant":t.variantCard.bill.border},on:{click:t.callBill}},[e("div",{staticClass:"d-flex align-items-center justify-content-center"},[e("b-icon",{attrs:{"font-scale":"3",icon:"justify-left"}}),e("span",{staticClass:"ml-2"},[t._v("Boleto")])],1)])],1)],1),e("div",{staticClass:"mt-4"},[e(t.currentComponent,{tag:"component"})],1),e("Details")],1)},P=[],k=function(){var t=this,e=t._self._c;return e("b-card",[e("b-row",[e("b-col",[e("b-form-group",{attrs:{id:"nameInput",label:"Nome no Cartão","label-for":"name","label-align":"left"}},[e("b-form-input",{attrs:{id:"name",maxlength:"30"},on:{focus:t.AddPaymentInfo},model:{value:t.creditCard.cardName,callback:function(e){t.$set(t.creditCard,"cardName",e)},expression:"creditCard.cardName"}})],1),e("b-form-group",{attrs:{id:"cardNumberInput",label:"Número do Cartão","label-for":"cardNumber","label-align":"left"}},[e("b-form-input",{directives:[{name:"mask",rawName:"v-mask",value:"#### #### #### ####",expression:"'#### #### #### ####'"}],attrs:{id:"cardNumber"},on:{input:t.checkCardType,focus:t.AddPaymentInfo},model:{value:t.creditCard.cardNumber,callback:function(e){t.$set(t.creditCard,"cardNumber",e)},expression:"creditCard.cardNumber"}})],1),e("b-row",[e("b-col",[e("b-form-group",{attrs:{id:"expiryInput",label:"Mês","label-for":"expiry","label-align":"left"}},[e("b-form-select",{attrs:{options:t.months},model:{value:t.creditCard.month,callback:function(e){t.$set(t.creditCard,"month",e)},expression:"creditCard.month"}})],1)],1),e("b-col",[e("b-form-group",{attrs:{id:"expiryInput","label-for":"expiry",label:"Ano","label-align":"left"}},[e("b-form-select",{attrs:{options:t.years},model:{value:t.creditCard.year,callback:function(e){t.$set(t.creditCard,"year",e)},expression:"creditCard.year"}})],1)],1),e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"CVV","label-for":"cvv","label-align":"left"}},[e("b-form-input",{attrs:{id:"cvv",required:"",maxlength:"3"},on:{mouseenter:t.showBackCard,mouseleave:t.showFrontCard},model:{value:t.creditCard.cvv,callback:function(e){t.$set(t.creditCard,"cvv",e)},expression:"creditCard.cvv"}})],1)],1)],1),e("b-row",[e("b-col",{attrs:{cols:"6"}},[e("b-form-group",{attrs:{id:"expiryInput","label-for":"expiry",label:"Número de parcelas","label-align":"left"}},[e("b-form-select",{attrs:{options:t.portions},model:{value:t.portion,callback:function(e){t.portion=e},expression:"portion"}})],1)],1)],1)],1),e("b-col",{attrs:{cols:"5"}},[e("div",{staticClass:"card-container"},[e("div",{staticClass:"card-custom front"},[e("div",{staticClass:"d-flex justify-content-end w-100"},[e("b-img",{staticClass:"height-flag",attrs:{fluid:"",src:t.flagCard,alt:""}})],1),e("h3",[t._v(t._s(t.creditCard.cardNumber||"#### #### #### ####"))]),e("div",{staticClass:"d-flex justify-content-between w-100"},[e("div",{staticClass:"box-column"},[e("span",[t._v("Titular")]),e("span",[t._v(t._s(t.creditCard.cardName||"NOME COMPLETO"))])]),e("div",{staticClass:"box-column"},[e("span",[t._v("Validade")]),e("span",[t._v(t._s(t.dynamicDate))])])])]),e("div",{staticClass:"card-custom back"},[e("div",{staticClass:"stripe"}),e("div",{staticClass:"box"},[e("div",{staticClass:"cvv-box"},[e("span",[t._v(t._s(t.creditCard.cvv||"CVV"))])]),e("b-img",{staticClass:"height-flag",attrs:{fluid:"",src:t.flagCard,alt:""}})],1)])])])],1)],1)},$=[],j={name:"CreditCard",data(){return{cardFlags:{visa:/^4[0-9]{15}$/,mastercard:/^(50|5[6-9]|6007|6220|6304|6703|6708|6759|676[1-3])|((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})/,diners:/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,amex:/^3[47][0-9]{13}$/,hipercard:/^606282|^3841(?:[0|4|6]{1})0/,elo:/^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/}}},computed:{creditCard:{get(){return this.$store.state.creditCard},set(t){this.$store.commit("setCreditCard",t)}},portion:{get(){return this.$store.state.portion},set(t){this.$store.commit("setPortion",t)}},portions(){return this.$store.state.portions},months(){return this.$store.state.months},years(){return this.$store.state.years},dynamicDate(){return`${this.creditCard.month}/${this.creditCard.year?this.creditCard.year:this.creditCard.year.slice(2)}`||"MÊS/ANO"},flagCard(){return"visa"===this.creditCard.cardFlag?"https://play-lh.googleusercontent.com/lKebetEHVDuBrbq5KJJ4MK6V6BaFuo0Mj9Qy9YZkoenrEDZVU-IzLrbAuoKMaCT4nA":"mastercard"===this.creditCard.cardFlag?"https://www.sisprimedobrasil.com.br/resize.php?image=imagens/artigos/capas/2018.01.25-13.39.41.png&width=1090&height=500&sessao=crop":"diners"===this.creditCard.cardFlag?"https://upload.wikimedia.org/wikipedia/commons/a/a6/Diners_Club_Logo3.svg":"amex"===this.creditCard.cardFlag?"https://ww1.freelogovectors.net/wp-content/uploads/2023/05/american-express-logo-freelogovectors.net_-1.png":"hipercard"===this.creditCard.cardFlag?"https://upload.wikimedia.org/wikipedia/commons/8/89/Hipercard_logo.svg":"elo"===this.creditCard.cardFlag?"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Elo_card_association_logo_-_black_text.svg/1200px-Elo_card_association_logo_-_black_text.svg.png":""}},methods:{showBackCard(){document.querySelector(".front").style.transform="perspective(1000px) rotateY(-180deg)",document.querySelector(".back").style.transform="perspective(1000px) rotateY(0deg)"},showFrontCard(){document.querySelector(".front").style.transform="perspective(1000px) rotateY(0deg)",document.querySelector(".back").style.transform="perspective(1000px) rotateY(180deg)",this.AddPaymentInfo()},checkCardType(){const t=this.creditCard.cardNumber.replace(/ /g,"");if(16===t.length)for(const[e,a]of Object.entries(this.cardFlags))if(a.test(parseInt(t))){this.creditCard.cardFlag=e;break}},AddPaymentInfo(){this.creditCard.cardNumber&&this.creditCard.cardName&&this.creditCard.month&&this.creditCard.year&&this.creditCard.cvv&&console.log("AddPaymentInfo",this.creditCard)}}},N=j,A=(a("83a6"),Object(b["a"])(N,k,$,!1,null,"72ad782e",null)),E=A.exports,O=function(){var t=this,e=t._self._c;return e("div",[e("h4",{staticClass:"mt-3 mb-3"},[t._v("Libere sua compra rapidamente pagando com pix!")]),e("b-row",[e("b-col",[e("b-card",[e("div",{staticClass:"column-card"},[e("b-icon",{staticClass:"mb-2",attrs:{icon:"clock","font-scale":"2"}}),e("b",[t._v("Rápida aprovação")]),e("span",[t._v("Pagamento em segundos, sem complicação.")])],1)])],1),e("b-col",[e("b-card",[e("div",{staticClass:"column-card"},[e("b-icon",{staticClass:"mb-2",attrs:{icon:"grid","font-scale":"2"}}),e("b",[t._v("Rápida aprovação")]),e("span",[t._v("Pagamento em segundos, sem complicação.")])],1)])],1)],1),e("b-row",{staticClass:"mt-3"},[e("b-col",[e("b-card",[e("div",{staticClass:"column-card"},[e("b-icon",{staticClass:"mb-2",attrs:{icon:"shield","font-scale":"2"}}),e("b",[t._v("Marior segurança")]),e("span",[t._v("O PIX foi desenvolvido pelo Banco Central para facilitar suas compras e é 100% seguro.")])],1)])],1),e("b-col",[e("b-card",[e("div",{staticClass:"column-card"},[e("b-icon",{staticClass:"mb-2",attrs:{icon:"calendar-date","font-scale":"2"}}),e("b",[t._v("Tranquilidade na renovação")]),e("span",[t._v("A cada renovação da assinatura enviaremos um código PIX. Assim, você fica sempre em dia sem se preocupar.")])],1)])],1)],1)],1)},S=[],I={},D=I,M=(a("9ce1"),Object(b["a"])(D,O,S,!1,null,"fa70e5dc",null)),F=M.exports,L=function(){var t=this,e=t._self._c;return e("div",[e("h4",{staticClass:"mt-3 mb-3"},[t._v("Atenção!")]),e("b-row",[e("b-col",[e("b-card",[e("div",{staticClass:"column-card"},[e("b-icon",{staticClass:"mb-2",attrs:{icon:"clock","font-scale":"2"}}),e("span",[t._v("BOletos levam até 3 dias úteis para serem compensados e então terem os produtos liberados.")])],1)])],1),e("b-col",[e("b-card",[e("div",{staticClass:"column-card"},[e("b-icon",{staticClass:"mb-2",attrs:{icon:"envelope","font-scale":"2"}}),e("span",[t._v("Depois do pagamento, fique atento ao seu e-mail para receber os dados de acesso ao produto (verifique também a caixa de SPAM).")])],1)])],1),e("b-col",[e("b-card",[e("div",{staticClass:"column-card"},[e("b-icon",{staticClass:"mb-2",attrs:{icon:"calendar-date","font-scale":"2"}}),e("span",[t._v("Acada renovação da assinatura enviaremos um novo boleto para que você possa pagar. Assim, você fica sempre em dia sem se preocupar.")])],1)])],1)],1)],1)},T=[],B={},V=B,q=(a("8b58"),Object(b["a"])(V,L,T,!1,null,"a79f17e4",null)),R=q.exports,U=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-5"},[e("h4",[t._v("Detalhes da compra:")]),e("div",{staticClass:"d-flex justify-content-between mb-3"},[e("b",[t._v(t._s(t.product))]),e("span",[t._v(t._s(t.valueProduct))])]),"Cartão de crédito"!==t.methodPaymentSelected?e("b-row",[e("b-col",{attrs:{cols:"6"}},[e("b-form-group",{attrs:{label:"CPF/CNPJ (Para emissão de Nota Fiscal)","label-for":"cpf","label-align":"left"}},[e("b-form-input",{directives:[{name:"mask",rawName:"v-mask",value:t.teste,expression:"teste"}],attrs:{id:"cpf"},model:{value:t.cpf,callback:function(e){t.cpf=e},expression:"cpf"}})],1)],1)],1):e("b-row",[e("b-col",{attrs:{cols:"6"}},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"credit-card-fill","font-scale":"1"}}),e("span",[t._v("Essa cobrança aparecerá na sua fatura como : PAYT*"+t._s(t.product))])],1)],1),e("b-row",{staticClass:"mt-3"},[e("b-col",{attrs:{cols:"6"}},[e("b-button",{staticClass:"w-100",attrs:{variant:"primary",size:"lg"},on:{click:t.checkout}},[t._v("Compra agora")])],1)],1),e("b-img",{staticClass:"image-footer mt-4",attrs:{src:"https://cdn.awsli.com.br/1315/1315335/arquivos/site%20protegido.png"}})],1)},z=[],J={data(){return{formIsValid:!0}},watch:{cpf(){14!==this.cpf.length&&18!==this.cpf.length||console.log("AddPaymentInfo",this.cpf)}},computed:{product(){return this.$store.getters.product},valueProduct(){return this.$store.getters.valueProduct},teste(){return this.cpf.length<15?"###.###.###-##":"##.###.###/####-##"},methodPaymentSelected(){return this.$store.state.methodPaymentSelected},cpf:{get(){return this.$store.state.cpf},set(t){this.$store.commit("setCPF",t)}}},methods:{checkout(){for(const t in this.$store.state){if(!this.$store.state[t]){this.formIsValid=!1;break}this.formIsValid=!0}this.formIsValid?(console.log("Purchase"),this.makeToast("success","Compra realizada com sucesso","Compra realizada")):(console.log("PurchaseFail"),this.makeToast("danger","Verifique os campos preenchidos","Falha na compra"))},makeToast(t,e,a){this.$bvToast.toast(e,{title:a,variant:t,solid:!0})}}},Y=J,K=(a("578a"),Object(b["a"])(Y,U,z,!1,null,"3afb9374",null)),W=K.exports,X={components:{CreditCard:E,Pix:F,Bill:R,Details:W},data(){return{variantCard:{credit:{bg:"light",border:"primary"},pix:{bg:"Default",border:""},bill:{bg:"Default",border:""}},currentComponent:"CreditCard",mockCreditCard:{cvv:"",cardNumber:"",cardName:"",month:"01",year:"2023",cardFlag:""}}},computed:{methodPaymentSelected:{get(){return this.$store.state.methodPaymentSelected},set(t){this.$store.commit("setMethodPaymentSelected",t)}}},methods:{callBill(){this.variantCard={credit:{bg:"Default",border:""},pix:{bg:"Default",border:""},bill:{bg:"light",border:"primary"}},this.$store.commit("setCreditCard",this.mockCreditCard),this.methodPaymentSelected="Boleto",this.currentComponent="Bill"},callPix(){this.variantCard={credit:{bg:"Default",border:""},pix:{bg:"light",border:"primary"},bill:{bg:"Default",border:""}},this.$store.commit("setCreditCard",this.mockCreditCard),this.methodPaymentSelected="Pix",this.currentComponent="Pix"},callCreditCard(){this.variantCard={credit:{bg:"light",border:"primary"},pix:{bg:"Default",border:""},bill:{bg:"Default",border:""}},this.methodPaymentSelected="Cartão de crédito",this.currentComponent="CreditCard"}}},H=X,Z=(a("a33b"),Object(b["a"])(H,w,P,!1,null,"4e0cfb4f",null)),Q=Z.exports,G={components:{Product:f,Register:_,Payment:Q},mounted(){this.addMouseLeaveListener(),window.addEventListener("beforeunload",this.handleBeforeUnload),window.addEventListener("unload",this.handleUnload)},beforeDestroy(){this.removeMouseLeaveListener(),window.removeEventListener("beforeunload",this.handleBeforeUnload),window.removeEventListener("unload",this.handleUnload)},methods:{handleMouseLeave(){console.log("ChangeWindow")},addMouseLeaveListener(){document.documentElement.addEventListener("mouseleave",this.handleMouseLeave)},removeMouseLeaveListener(){document.documentElement.removeEventListener("mouseleave",this.handleMouseLeave)},handleBeforeUnload(t){t.preventDefault(),t.returnValue="",console.log("CloseWindow")},handleUnload(){console.log("Usuário fechou a aba do navegador ou saiu da página.")}}},tt=G,et=Object(b["a"])(tt,c,l,!1,null,null,null),at=et.exports,rt={name:"App",components:{Checkout:at}},st=rt,ot=(a("9965"),Object(b["a"])(st,o,i,!1,null,null,null)),it=ot.exports,ct=a("2b0e"),lt=a("2f62");ct["default"].use(lt["a"]);var nt=new lt["a"].Store({state:{product:"Curso intensivo cloud - AWS",valueProduct:"R$ 50,00 / mês",name:"",email:"",phone:"",address:{cep:"",logradouro:"",numero:"",bairro:"",localidade:"",uf:["RJ"]},creditCard:{cvv:"",cardNumber:"",cardName:"",month:"01",year:"2023",cardFlag:""},months:["01","02","03","04","05","06","07","08","09","10","11","12"],years:["2023","2024","2025","2026","2027","2028","2029","2030","2031","2032"],portion:{value:"01",text:"1x de R$ 50,0"},portions:[{value:"01",text:"1x de R$ 50,0"},{value:"02",text:"2x de R$ 25,0"},{value:"03",text:"3x de R$ 16,66"}],methodPaymentSelected:"Cartão de crédito",cpf:""},getters:{product:t=>t.product,valueProduct:t=>t.valueProduct},mutations:{setCPF(t,e){t.cpf=e},setName(t,e){t.name=e},setEmail(t,e){t.email=e},setPhone(t,e){t.phone=e},setAddress(t,e){t.address=e},setCreditCard(t,e){t.creditCard=e},setPortion(t,e){t.portion=e},setMethodPaymentSelected(t,e){t.methodPaymentSelected=e}},actions:{}}),dt=a("3a60"),ut=a.n(dt);ct["default"].use(r["a"]),ct["default"].use(s["a"]),ct["default"].use(ut.a),ct["default"].config.productionTip=!1,new ct["default"]({render:t=>t(it),store:nt}).$mount("#app")},"578a":function(t,e,a){"use strict";a("194f")},"83a6":function(t,e,a){"use strict";a("d81d")},"8b58":function(t,e,a){"use strict";a("23ae")},9965:function(t,e,a){"use strict";a("519d")},"9ce1":function(t,e,a){"use strict";a("ecd5")},a33b:function(t,e,a){"use strict";a("e928")},d81d:function(t,e,a){},d8d8:function(t,e,a){"use strict";a("160e")},e928:function(t,e,a){},ecd5:function(t,e,a){}});
//# sourceMappingURL=app.61844828.js.map