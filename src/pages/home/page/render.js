import { Create } from "../page/don.js";
import { Requests } from "../../API/requests.js"
import { ShowOnScreen } from "./company.js";

export class Render {
    static list(array) {
        array.forEach(element => {
            const card = Create.createCardCompany(element)

            ShowOnScreen.templateCards(card)
        });
    }
    
    static async renderCompanies() {
        const companies = await Requests.seeAllCompanies()

        this.list(companies)
    }

    static async renderBySector() {
        const filterSectors  = document.getElementById('date')
        filterSectors.addEventListener('click', async () => {
            this.renderBySector()
            const sector = filterSectors.value
            
            const sectors    =  await Requests.seeAllCompaniesBySectors(sector)
            console.log(sectors);
            
            this.list(sectors)

        //     // if(btnSector === 'BUTTON') {
        //     //     const sector = li.value
                
        //     //     const sectors    = await Requests.seeAllCompaniesBySectors(sector)
        //     //     const title      = `Listas de Empresas na seção de ${sector}`

        //     //     this.list(sectors, title)
        //     // }
        })
        // const sector = 'Alimenticio'
            
    }
}

export class Create1 {
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
