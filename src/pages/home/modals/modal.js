import { List } from '../page/list.js'

export class Modal {
    static template(form) {
        const section = document.createElement('section')
        const divMain = document.querySelector('.modal--container')

        section.classList.add('modal')

        section.append(form)
        divMain.append(section)
    }

    static loginForm() {
        const formModal         = document.createElement('form');
        const divModal          = document.createElement('div');
        const h3Modal           = document.createElement('h3');
        const closeModal        = document.createElement('span');
        const inputEmail        = document.createElement('input');
        const InputPassword     = document.createElement('input');
        const buttonLogin       = document.createElement('button');

        h3Modal.innerText = 'Login'

        closeModal.innerText = 'X'
        closeModal.classList.add('close-modal')

        inputEmail.type = 'text'
        inputEmail.placeholder = "What is your email?"
        inputEmail.id = 'email-input'

        InputPassword.type = 'password'
        InputPassword.placeholder = 'What is your password?'
        InputPassword.id = 'password-input'

        buttonLogin.classList.add('btn-input-login')
        buttonLogin.type = 'submit'
        buttonLogin.innerText = 'Login'

        // buttonSignup.classList.add('btn-input-signup')
        // buttonSignup.type = 'submit'
        // buttonSignup.innerText = 'Signup'

        divModal.append(h3Modal, closeModal)
        formModal.append(divModal, inputEmail, InputPassword, buttonLogin, /*buttonSignup*/)

        return formModal
    }

    static signupForm() {
        const formModal             = document.createElement('form');
        const divModal              = document.createElement('div');
        const h3Modal               = document.createElement('h3');
        const closeModal            = document.createElement('span');
        const inputUserName         = document.createElement('input');
        const divOption             = document.createElement('div');
        const lebelProfessional     = document.createElement('label');
        const levelProfessional     = document.createElement('select');
        const estagioOption         = document.createElement('option');
        const juniorOption          = document.createElement('option');
        const plenoOption           = document.createElement('option');
        const seniorOption          = document.createElement('option');
        const inputEmail            = document.createElement('input');
        const InputPassword         = document.createElement('input');
        const buttonSignup          = document.createElement('button');
        // const buttonLogin           = document.createElement('button');

        h3Modal.innerText = 'Sign Up'

        closeModal.innerText = 'X'
        closeModal.classList.add('close-modal')

        divModal.append(h3Modal, closeModal)

        inputUserName.type          = 'text'
        inputUserName.placeholder   = "What's your name?"
        inputUserName.id            = 'user-name-input'

        lebelProfessional.for           = 'level-professional'
        lebelProfessional.innerText     = 'Level Professional:'

        levelProfessional.nome          = 'level-professional'
        levelProfessional.id            = 'level-professional'

        estagioOption.value             = 'estágio'
        estagioOption.innerText         = 'estágio'

        juniorOption.value              = 'júnior'
        juniorOption.innerText          = 'júnior'

        plenoOption.value               = 'pleno'
        plenoOption.innerText           = 'pleno'

        seniorOption.value              = 'sênior'
        seniorOption.innerText          = 'sênior'

        levelProfessional.append(juniorOption, plenoOption, seniorOption)
        divOption.append(lebelProfessional, levelProfessional)
        
        inputEmail.type         = 'text'
        inputEmail.placeholder  = "What is your email?"
        inputEmail.id           = 'email-input'

        InputPassword.type          = 'password'
        InputPassword.placeholder   = 'What is your password?'
        InputPassword.id            = 'password-input'

        buttonSignup.classList.add('btn-input-signup')
        buttonSignup.type       = 'submit'
        buttonSignup.innerText  = 'Signup'

        // buttonLogin.classList.add('btn-input-login')
        // buttonLogin.type        = 'submit'
        // buttonLogin.innerText   = 'Login'

        formModal.append(divModal, inputUserName, divOption, inputEmail, InputPassword, buttonSignup, /*buttonLogin*/)

        return formModal
    }

    static registerCompany() {
        const formModal             = document.createElement('form');
        const ditTag                = document.createElement('div');
        const h3Modal               = document.createElement('h3');
        const closeModal            = document.createElement('span');
        const nameInput             = document.createElement('input');
        const divTime               = document.createElement('div');
        const lebelTime             = document.createElement('label');
        const timeInput             = document.createElement('input');
        const descriptionInput      = document.createElement('input');
        const divOption             = document.createElement('div');
        const lebelSectors          = document.createElement('label');
        const selectSector          = document.createElement('select');
        const alimenticioOption     = document.createElement('option');
        const varejoOption          = document.createElement('option');
        const textilOption          = document.createElement('option');
        const manufaturaOption      = document.createElement('option');
        const aeroespacialOption    = document.createElement('option');
        const automotivaOption      = document.createElement('option');
        const tiOption              = document.createElement('option');
        const atacadoOption         = document.createElement('option');
        const registerBtn           = document.createElement('button');

        h3Modal.innerText = 'Register Company'

        closeModal.innerText = 'X'
        closeModal.classList.add('close-modal')

        ditTag.append(h3Modal, closeModal)

        nameInput.type          = 'text'
        nameInput.placeholder   = "Company..."
        nameInput.id            = 'company-name-input'

        lebelTime.for           = 'time'
        lebelTime.innerText     = 'Select a time:'

        timeInput.type          = 'time'
        timeInput.id            = 'time'
        timeInput.name          = 'time'

        divTime.append(lebelTime, timeInput)

        descriptionInput.type          = 'text'
        descriptionInput.placeholder   = "Description..."
        descriptionInput.id            = 'description-input'

        lebelSectors.for           = 'select-sectores'
        lebelSectors.innerText     = 'Sector:'

        selectSector.nome          = 'select-sectores'
        selectSector.id            = 'select-sectores'

        alimenticioOption.value         = 'Alimenticio'
        alimenticioOption.innerText     = 'Alimentício'

        varejoOption.value              = 'Varejo'
        varejoOption.innerText          = 'Varejo'

        textilOption.value              = 'Textil'
        textilOption.innerText          = 'Têxtil'

        manufaturaOption.value          = 'Manufatura'
        manufaturaOption.innerText      = 'Manufatura'

        aeroespacialOption.value        = 'Aeroespacial'
        aeroespacialOption.innerText    = 'Aeroespacial'

        automotivaOption.value          = 'Automotiva'
        automotivaOption.innerText      = 'Automotiva'

        tiOption.value                  = 'TI'
        tiOption.innerText              = 'TI'

        atacadoOption.value             = 'Atacado'
        atacadoOption.innerText         = 'Atacado'

        registerBtn.classList.add('btn-input-register')
        registerBtn.type       = 'submit'
        registerBtn.innerText  = 'Register'


        selectSector.append(alimenticioOption, varejoOption, textilOption, manufaturaOption, aeroespacialOption, automotivaOption, tiOption, atacadoOption)
        divOption.append(lebelSectors, selectSector)

        formModal.append(ditTag,nameInput, divTime, descriptionInput, divOption, registerBtn)

        return formModal
    }

    static createDescription() {
        const formModal             = document.createElement('form');
        const ditTag                = document.createElement('div');
        const h3Modal               = document.createElement('h3');
        const closeModal            = document.createElement('span');
        const nameInput             = document.createElement('input');
        const descriptionInput      = document.createElement('input');
        const divOption             = document.createElement('div');
        const lebelDescription      = document.createElement('label');
        const selectDescription     = document.createElement('select');
        const createDescriptionBtn  = document.createElement('button');

        h3Modal.innerText = 'Create Department'

        closeModal.innerText = 'X'
        closeModal.classList.add('close-modal')

        ditTag.append(h3Modal, closeModal)

        nameInput.type          = 'text'
        nameInput.placeholder   = "Department..."
        nameInput.id            = 'department-name-input'

        descriptionInput.type          = 'text'
        descriptionInput.placeholder   = "Description..."
        descriptionInput.id            = 'description-input'

        lebelDescription.for           = 'select-description'
        lebelDescription.innerText     = 'Sector:'

        selectDescription.nome          = 'select-description'
        selectDescription.id            = 'select-description'

        createDescriptionBtn.classList.add('btn-input-create-description')
        createDescriptionBtn.type       = 'submit'
        createDescriptionBtn.innerText  = 'create'
        
        divOption.append(lebelDescription, selectDescription)

        formModal.append(ditTag,nameInput, descriptionInput, divOption, createDescriptionBtn)

        return formModal
    }
}