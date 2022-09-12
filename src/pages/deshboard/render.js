import { Requests } from "../requests.js"
import { List } from "./list.js";

export class RenderDeshboard {
    static listDeshboardAside(array) {
        array.forEach(element => {
            const render = RenderList.renderUsers(element)
            this.templateDeshboardAside(render)
        });
    }

    static async  templateDeshboardAside(form) {
        const ulTag = document.createElement('ul');
        const asideTag = document.querySelector('.aside')

        ulTag.append(form)
        asideTag.append(ulTag)
    }

    static async renderUser() {
        const callUser = await Requests.ListAllUsers()

        this.listDeshboardAside(callUser)
    }

    static async renderOutOfWork() {
        const callOutOfWork = await Requests.usersNotDepartment()

        this.listDeshboardAside(callOutOfWork)
    }

    static listDeshboardArticle(array) {
        array.forEach(element => {
            const render = RenderList.renderDepartments(element)

            this.templateDeshboardArticle(render)
        });
    }

    static listDeshboardSectores(array) {
        array.forEach(element => {
            const render = RenderList.renderSectors(element)
            
            this.templateInputOption(render)
        });
    }

    static async  templateDeshboardArticle(form) {
        const ulTag = document.createElement('ul');
        const articleTag = document.querySelector('.article')

        ulTag.append(form)
        articleTag.append(ulTag)
        // console.log(articleTag);
    }

    static templateInputOption(form) {
        const article = document.querySelector('.article');
        const ditTag = document.createElement('div');
        const lebelSector       = document.createElement('label');
        const selectSector      = document.createElement('select');

        lebelSector.for         = 'lebel-sectores'
        lebelSector.innerText   = 'Sector:'

        selectSector.nome       = 'lebel-sectores'
        selectSector.id         = 'lebel-sectores'

        selectSector.append(form)
        ditTag.append(lebelSector, selectSector)
        article.append(ditTag)
        console.log(article);
    }
//=====================================
    static async renderSector() {
        const callrenderSectors = await Requests.listAllSectors()
        

        this.listDeshboardSectores(callrenderSectors)
    }

    static async renderDepartment() {
        const callDepartment = await Requests.listAllDepartmentsAdmin()

        this.listDeshboardArticle(callDepartment)
    }

    // static async renderDepartmentOfCompany() {
    //     const callDepartmentOfCompany = await Requests.departmentsOfCompany(id)

    //     this.listDeshboardArticle(callDepartmentOfCompany)
    // }
}

export class RenderList {
    static renderUsers(array) {
        const liTag             = document.createElement('li');
        const name       = document.createElement('h3');
        const email     = document.createElement('p');
        const professional       = document.createElement('spam');
        const kindOfWork              = document.createElement('spam');

        name.innerText       = array.username
        email.innerText     = array.email
        professional.innerText       =array.professional_level

        const idUser = array.uuid
        liTag.id = idUser
        
        if(kindOfWork.value == null) {
            kindOfWork.innerText = 'Sem derpartamento' 
        }else {
            kindOfWork.innerText = array.department_uuid
        }

        liTag.append(name, email, professional, kindOfWork)

        return liTag
    }

    static renderSectors(array) {
        const options           = document.createElement('option')

        options.innerText = array.description
        options.value = array.uuid

        return options
    }

    static renderDepartments(array) {
        const liTag                     = document.createElement('li');
        const nameDepartment            = document.createElement('h3');
        const description               = document.createElement('p');
        const company                   = document.createElement('spam');
        const time                      = document.createElement('spam');
        const companyDescription        = document.createElement('spam');

        nameDepartment.innerText        = array.name
        description.innerText           = array.description
        company.innerText               =`Empresa: ${array.companies.name}`
        time.innerText                  = `Abre às ${array.companies.opening_hours}`
        companyDescription.innerText    = array.companies.description

        company.id                      = array.companies.uuid
        const idDepartment              = array.uuid
        liTag.id                        = idDepartment
        
        liTag.append(nameDepartment, description, company, time, companyDescription)

        return liTag
    }
}

