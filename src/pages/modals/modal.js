export class Modal {
    static template(form, title) {
        const section = document.createElement('section')
        const articleTitle = document.querySelector('.article__title')
        const article = document.querySelector('.article')

        article.innerHtml       = ''
        articleTitle.innerText  = title
        section.classList.add('modal')

        section.append(form)
        article.append(section)
    }

    static loginForm() {
        const formModal         = document.createElement('form');
        const divModal          = document.createElement('div');
        const h3Modal           = document.createElement('h3');
        const closeModal        = document.createElement('span');
        const inputEmail        = document.createElement('input');
        const InputPassword     = document.createElement('input');
        const buttonLogin       = document.createElement('button');
        // const buttonSignup      = document.createElement('button');

        h3Modal.innerText = 'Login'

        closeModal.innerText = 'X'
        closeModal.classList.add('close-modal')

        divModal.append(h3Modal, closeModal)

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
        lebelProfessional.innerText     = 'Level Professional'

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
}