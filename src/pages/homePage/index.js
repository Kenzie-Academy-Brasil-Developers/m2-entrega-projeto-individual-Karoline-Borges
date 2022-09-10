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
}