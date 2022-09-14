import { Requests } from "../../API/requests.js"

export class List {
    static async callSectores(sector) {
        const sectores = await Requests.listAllSectors()

        for (let i = 0; i < sectores.length; i++) {
            const element = sectores[i];
            console.log(element);

            if (sector == element.description) {
                return element.uuid
            }
        }
        
    }

    static async listItens(container) {
        const sectores = await Requests.seeAllCompanies()
        
        await sectores.forEach(element => {
        const option = document.createElement('option');
        
        option.value = element.name
        option.innerText = element.name
        
        container.append(option)
        return container
        });     
    }

    static addList(form) {
        const container  = document.querySelector('.test')
        console.log(container);
        const descriptionOption = List.listItens(container)

        container.append(descriptionOption)
    }
}
