export function domInjector(seletor: string) {
    return function(target: any, propertyKey: string) {
        console.log(`Modificando prototype ${target.constructor.name} 
            e adicionando getter para a propriedade ${propertyKey}`);
            
        let elemento: HTMLElement;
        // target aqui é o prototype da classe
        // propertyKey é o nome da propriedade
        const getter = function() {
            // implementando um cache de elementos, se já carregou, na próxima chamada
            // vai direto ao "return elemento" se diferente de null ou undefined
            if (!elemento) {
                elemento = <HTMLElement> document.querySelector(seletor);

                console.log(`Buscando elemento do DOM com o seletor ${seletor} 
                para injetar em ${propertyKey}`);
            }

            return elemento; 
        }

        Object.defineProperty(target, propertyKey, {
            get: getter
        })
    };
}