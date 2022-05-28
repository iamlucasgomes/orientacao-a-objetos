class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    get saldo() {
       return this._saldo;
    }
    set saldo(valor) {
        this._saldo = valor;
    }


    sacar(valor) {
        if(valor > this.saldo) {
            return "Operação Negada: Saldo Insuficiente"
        }
        this._saldo = this.saldo - valor;

        return this._saldo;
    }
    depositar(valor) {
        this._saldo = this.saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, CartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._CartaoCredito = CartaoCredito;
    }

    get CartaoCredito(){
       return this._CartaoCredito;

    }

    set CartaoCredito(valor){
        this._CartaoCredito = valor;
    }
}

class ContaPoupança extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitária';

    }
    sacar(valor){
        if(valor > 500){
            return 'Operação Negada: Saque maior do que o valor permitido'
        }
        this._saldo = this._saldo - valor;
    }
}