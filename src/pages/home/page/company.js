import { Create } from "./don.js";

export class ShowOnScreen {

    static limparHTMLS(container) {
        container.innerHTML = '';

    }

    static async templateCards (array) {
        const divCards = document.querySelector('.cards')
        
    //    divCards.innerHTML = ''
        
        divCards.append(array)
    }
}