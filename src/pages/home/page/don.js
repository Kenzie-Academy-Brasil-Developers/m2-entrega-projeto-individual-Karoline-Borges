export class Create {
    static createCardCompany(array) {
        const divCarde          = document.createElement('div');
        const divData           = document.createElement('div');
        const divContainer      = document.createElement('div');
        const sectorCompany     = document.createElement('h5');
        const nameCompany       = document.createElement('h1');
        const divStats          = document.createElement('div');
        const spamTime          = document.createElement('spam');
        const spamDescription   = document.createElement('spam');
    

        divCarde.classList.add('card', 'card-1')
        divData.classList.add('card--data')
        divContainer.classList.add('card--content')
        sectorCompany.classList.add('card--title')
        divStats.classList.add('card--stats')
        spamTime.classList.add('bx','bx-time', 'card--icon', 'stat--icon')


        nameCompany.innerText       = array.name
        sectorCompany.innerText     = array.sectors.description
        spamDescription.innerText   = array.description
        spamTime.innerText          = array.opening_hours

        divStats.append(spamTime, spamDescription)
        divContainer.append(sectorCompany, nameCompany)
        divData.append(divContainer)
        divCarde.append(divData, divStats)

        return divCarde
    }
}