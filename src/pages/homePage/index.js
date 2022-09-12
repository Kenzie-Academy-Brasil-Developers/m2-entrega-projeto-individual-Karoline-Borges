import { List } from '../deshboard/list.js'
import { RenderDeshboard } from '../deshboard/render.js'
import { Modal } from '../modals/modal.js'
import { Requests } from '../requests.js'
export class Index {
    // static renderIndexUser() {
    //     const token = localStorage.getItem('@kenzieEmpresas:token')
    // }
    // static renderIndexAdmin() {
    //     const token = localStorage.getItem('@kenzieEmpresas:token')
    // }

    //  ====== LOGIN MODAL ======

    static handleLoginModal() {
        const loginBtn = document.querySelector('.btn-login')
        
        loginBtn.addEventListener('click', () => {
            const newLoginModal = Modal.loginForm()
            Modal.template(newLoginModal)
            this.closeModal()
            this.handleLogin()
        })
    }

    static handleLogin() {
        const inputEmail        = document.getElementById('email-input');
        const InputPassword     = document.getElementById('password-input');
        const buttonLogin       = document.querySelector('.btn-input-login');
        // const buttonSignup      = document.querySelector('.btn-input-signup');

        buttonLogin.addEventListener('click', async (event) => {
            event.preventDefault()

            const data = {
                email: inputEmail.value,
                password: InputPassword.value,
            };

            const login = await Requests.login(data)

        })

        // buttonSignup.addEventListener('click', () => {
        //     const modal = document.querySelector('.modal')
        //     modal.classList.add('disappear')

        //     setTimeout(() => {
        //         modal.remove()
        //     },1000)

        //     const newsignupModal = Modal.signupForm()

        //     Modal.template(newsignupModal)
        //     this.closeModal()
        //     this.handleSignup()
        // })
    }

    //  ====== SIGN UP MODAL ======

    static handleSignupModal() {
        const signupBtn = document.querySelector('.btn-signup')

        signupBtn.addEventListener('click', () => {
            const newsignupModal = Modal.signupForm()

            Modal.template(newsignupModal)
            this.closeModal()
            this.handleSignup()
        })
    }

    static handleSignup() {
        const inputUserName         = document.getElementById('user-name-input');
        const levelProfessional     = document.getElementById('level-professional');
        const inputEmail            = document.getElementById('email-input');
        const InputPassword         = document.getElementById('password-input');
        const buttonSignup          = document.querySelector('.btn-input-signup');
        // const buttonLogin           = document.querySelector('.btn-input-login');

        buttonSignup.addEventListener('click', async (event) => {
            event.preventDefault()

            const data = {
                username: inputUserName.value,
                "professional_level": levelProfessional.value,
                email: inputEmail.value,
                password: InputPassword.value,
            };

            const login = await Requests.signup(data)

        })

        // buttonLogin.addEventListener('click', () => {
        //     const modal = document.querySelector('.modal')
        //     modal.classList.add('disappear')

        //     setTimeout(() => {
        //         modal.remove()
        //     },1000)

        //     const newloginModal = Modal.loginForm()

        //     Modal.template(newloginModal)
        //     this.closeModal()
        //     this.handleSignup()
        // })
    }

    //  ====== CLOSE MODAL ======
    static closeModal() {
        const closeModalBtn = document.querySelector('.close-modal')

        closeModalBtn.addEventListener('click', () => {
            const modal = document.querySelector('.modal')
            modal.classList.add('disappear')

            setTimeout(() => {
                modal.remove()
            },1000)
        })
    }

    //  ====== REGISTER COMPANY MODAL ======
    static registerCompanyModal() {
        const register = document.querySelector('.register-company-btn')

        register.addEventListener('click', () => {
            const newregisterModal = Modal.registerCompany()
            
            Modal.template(newregisterModal)
            this.closeModal()
            this.handleRegisterCompany()
        })
    }

    static handleRegisterCompany() {
        const nameInput         = document.getElementById('company-name-input');
        const timeInput     = document.getElementById('time');
        const descriptionInput            = document.getElementById('description-input');
        const selectSector         = document.getElementById('select-sectores');
        const registerBtn          = document.querySelector('.btn-input-register');

        registerBtn.addEventListener('click', async (event) => {
            event.preventDefault()

            const sector    = selectSector.value
            const idSector  = await List.callSectores(sector)

            const data = {
                name: nameInput.value,
                "opening_hours": timeInput.value,
                description: descriptionInput.value,
                "sector_uuid": idSector,
            };

            const register = await Requests.registerCompany(data)

        })
    }

     //  ====== CREATE DESCRIPTION MODAL ======
    static createDescriptionModal() {
        const create = document.querySelector('.create-department-btn')

        create.addEventListener('click', () => {
            const createDescriptionModal = Modal.createDescription()
            const newcreateDescriptionModal = List.addList(createDescriptionModal)
            
            Modal.template(newcreateDescriptionModal)
            this.closeModal()
            this.handlecreateDescription()
        })
    }

    static handlecreateDescription() {
        const nameInput         = document.getElementById('department-name-input');
        const descriptionInput            = document.getElementById('description-input');
        const selectDescription         = document.getElementById('select-description');
        const createDescriptionBtn          = document.querySelector('.btn-input-create-description');

        createDescriptionBtn.addEventListener('click', async (event) => {
            event.preventDefault()

            const create    = selectDescription.value
            const idcompany  = await List.callSectores(create)

            const data = {
                name: nameInput.value,
                description: descriptionInput.value,
                "company_uuid": idcompany,
            };

            const register = await Requests.createDescription(data)

        })
    }
    //=========
    static handleInputOption() {
        const loginBtn = document.querySelector('#lebel-sectores')
        
        loginBtn.addEventListener('click', () => {

            const newRender = RenderDeshboard.templateInputOption(newRender)
            RenderDeshboard.templateInputOption(newLoginModal)

            console.log(newRender);
            this.closeModal()
            this.handleLogin()
        })
    }
}
