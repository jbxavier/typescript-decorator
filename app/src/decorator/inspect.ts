export function inspect() {
    return function(
        // target: se colocado em método estático ele será a função constructor
        // se colocado em método de instância ele será o prototype
        target: any,
        propertyKey: string, // nome do método
        descriptor: PropertyDescriptor // tem referência do método
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(`--- Método: ${propertyKey}`);
            console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`------ Retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        }
        return descriptor;
    }
}