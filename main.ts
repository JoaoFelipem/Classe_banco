
class Conta{
    id:number
    agencia:number;   
    tipoConta:string;
    numero:number;
    digito_verificador:number;
    titular: string;
    saldo_inicial: number;
    saldo:number;
    data_abertura?:any;
    ativo?:boolean;
    static cont:number=1;

    
    constructor(_tipoConta:string,_titular:string,_saldo_inicial:number){
        this.id=Conta.cont;
        this.agencia = this.numeroAleatorio(1,999);
        this.tipoConta=_tipoConta;
        this.numero = this.numeroAleatorio(10000,99999999);
        this.digito_verificador=this.numeroAleatorio(1,9);
        this.titular=_titular;
        this.saldo_inicial=_saldo_inicial;
        this.saldo=this.saldo_inicial;
        //falta arrumar a data
        //this.data_abertura
        this.ativo=true;
        Conta.cont++;
    }


    public sacar(valor_saque:number) {
        if(valor_saque > this.saldo){
            console.log("Não foi possível realizar o saque. Valor do saque maior que o saldo")
        }else{
            this.saldo = this.saldo-valor_saque;
            console.log("Saque realizado com sucesso")
        }
    }

    public depositar(valor_deposito:number){

        this.saldo = this.saldo+valor_deposito;
        console.log("Depósito realizado com sucesso")
    }

    public getAgencia(){
        return this.agencia;
    }

    public getNumero(){
        return this.numero;
    }

    public getDigitoVerificador(){
        return this.digito_verificador;
    }

    public getTitular(){
        return this.titular;
    }

    public getSaldo(){
        return this.saldo;
    }

    private numeroAleatorio(min:number, max:number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

};