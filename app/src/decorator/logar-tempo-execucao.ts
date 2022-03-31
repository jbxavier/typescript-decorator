// código decorator - implementa requisitos não funcionais como
// a métrica de tempo de execução de um método

export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function(
        target: any, 
        propertyKey: string, // nome do método
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            // chamar método original
            // esse this será da classe que instanciou e que está usando esse decorator
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2-t1)/divisor} ${unidade}`);
            retorno // retorno esperado do método original
        };

        return descriptor;
    }

}