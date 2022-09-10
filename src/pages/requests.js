import { instance } from '../pages/axios.js'
import { Toast } from '../pages/toast.js'

export class Requests {
    static async seeAllCompanies() {
        const companies = await instance
            .get('/companies')
            .then(resp => resp.data)
            .catch(err => console.log(err))

        return companies
    }

    static async seeAllCompaniesBySectors(sector) {
        const companiesBySector = await instance
            .get(`/companies/${sector}`)
            .then(resp => resp.data)
            .catch(err => console.log(err))

        return companiesBySector
    }

    static async login(data) {
        const userLogin = await instance
            .post('/auth/login', data)
            .then((resp) => {
                localStorage.setItem('@kenzieEmpresas:token', resp.data.token)
                Toast.create('login realizado com sucesso', 'green')

                setTimeout(() => {
                    window.location.replace('src/pages/deshboard/deshboard.html')
                },2000)
            })
            .catch((err) => {
                Toast.create(err.response.data.error, '#FF0000')
            })

        return userLogin
    }

    static async signup(data) {
        const userSignup = await instance
            .post('/auth/register/user', data)
            .then(async (resp) => {
                Toast.create('Cadastro realizado com sucesso', 'green')
                const newData = {
                    email: resp.data.email,
                    password: data.password
                }

                await Requests.login(newData)
            })
            .catch((err) => {
                Toast.create(err.response.data.error, '#FF0000')
            })

        return userSignup
    }
}