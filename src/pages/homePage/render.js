import { Modal } from "../modals/modal.js";
import { Requests } from "../requests.js"

export class Render {
    static list(array, title) {
        array.forEach(element => {
            const card = create.createCardCompany(element)
            Modal.template(card, title)
        });
    }
    
    static async renderCompanies() {
        const companies = await Requests.seeAllCompanies()
        const title     = 'Listas de Empresas Parceiras'

        this.list(companies, title)
    }

    static async renderBySector() {
        // const ulSectors  = document.querySelector('.container__ul')
        // ulSectors.addEventListener('click', (event) => {
        //     event.preventDefault()
        //     const btnSector = event.target
        //     console.log(btnSector);
        //     // if(btnSector === 'BUTTON') {
        //     //     const sector = li.value
                
        //     //     const sectors    = await Requests.seeAllCompaniesBySectors(sector)
        //     //     const title      = `Listas de Empresas na seção de ${sector}`

        //     //     this.list(sectors, title)
        //     // }
        // })
        const sector = 'Alimenticio'
            
            const sectors    = await Requests.seeAllCompaniesBySectors(sector)
            const title      = `Listas de Empresas na seção de ${sector}`

            this.list(sectors, title)
    }
}

export class create {
    static createCardCompany(array) {
        const ulTag             = document.createElement('ul');
        const liTag             = document.createElement('li');
        const nameCompany       = document.createElement('h3');
        const sectorCompany     = document.createElement('small');
        const description       = document.createElement('p');
        const time              = document.createElement('spam');

        nameCompany.innerText       = array.name
        sectorCompany.innerText     = array.sectors.description
        description.innerText       = array.description
        time.innerText              = array.opening_hours

        liTag.append(nameCompany, sectorCompany, description, time)
        ulTag.append(liTag)

        return ulTag
    }
}
