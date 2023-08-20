<template>
    <div>
        <h4 class="mt-3 mb-3">Atenção!</h4>
        <b-row>
            <b-col>
                <b-card>
                    <div class="column-card">
                        <b-icon icon="clock" font-scale="2" class="mb-2"></b-icon>
                        <span>BOletos levam até 3 dias úteis para serem compensados e então terem os produtos liberados.</span>
                    </div>
                </b-card>
            </b-col>
            <b-col>
                <b-card>
                    <div class="column-card">
                        <b-icon icon="envelope" font-scale="2" class="mb-2"></b-icon>
                        <span>Depois do pagamento, fique atento ao seu e-mail para receber os dados de acesso ao produto (verifique também a caixa de SPAM).</span>
                    </div>
                </b-card>
            </b-col>
            <b-col>
                <b-card>
                    <div class="column-card">
                        <b-icon icon="calendar-date" font-scale="2" class="mb-2"></b-icon>
                        <span>Acada renovação da assinatura enviaremos um novo boleto para que você possa pagar. Assim, você fica sempre em dia sem se preocupar.</span>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.column-card {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
