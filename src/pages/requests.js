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

    // ===  USER ===
    static async search() {
        const userInformation = await instance
            .get('/users/profile')
            .then(resp => resp.data)
            .catch(err => console.log(err))

        console.log(userInformation);
        return userInformation
    }

    // ===  FUNCIONÁRIO ===
    static async listAllEmployees() {
        const employees = await instance
            .get('/users/departments/coworkers')
            .then(resp => resp.data)
            .catch(err => console.log(err))

        console.log(employees);
        return employees
    }

    static async listAllDepartments() {
        const departments = await instance
            .get('/users/departments')
            .then(resp => resp.data)
            .catch(err => console.log(err))
        
        console.log(departments);
        return departments
    }

    static async editUserData(data) {
        const  editUser = await instance
            .patch('/users', data)
            .then((resp) => {
                console.log(resp)
                Toast.create('Atualização realizada com sucesso', 'green')
            })
            .catch(err => {
                Toast.create(err.response.data.error, '#FF0000')
            })

        console.log(editUser);
        return editUser
    }

    // ===  ADMIN ===
    static async ListAllUsers() {
        const listUser = await instance
            .get('/users')
            .then(resp => resp.data)
            .catch(err => console.log(err))

        return listUser
    }

    static async usersNotDepartment() {
        const notDepartment = await instance
            .get('/admin/out_of_work')
            .then(resp => resp.data)
            .catch(err => console.log(err))

        return notDepartment
    }

    static async updataEmployeeInf(data, idUser) {
        const updataEmployee = await instance
            .ptch(`/admin/update_user/${idUser}`, data)
            .then((resp) => {
                console.log(resp)
                Toast.create('Atualização realizada com sucesso', 'green')
            })
            .catch(err => {
                Toast.create(err.response.data.error, '#FF0000')
            })

        console.log(updataEmployee);
        return updataEmployee
    }

    static async deleteUser(idUser) {
        const delet = await instance
            .delete(`/admin/delete_user/${idUser}`)
            .then((resp) => {
                console.log(resp)
                Toast.create('Atualização realizada com sucesso', 'green')
            })
            .catch(err => {
                Toast.create(err.response.data.error, '#FF0000')
            })

        console.log(delet);
        return delet
    }

    // ===  ADMIN COMPANY ===
    static async registerCompany(data) {
        const register = await instance
            .post('/companies', data)
            .then((resp) => {
                console.log(resp)
                Toast.create('Cadastro realizada com sucesso', 'green')
            })
            .catch(err => {
                Toast.create(err.response.data.error, '#FF0000')
            })

        return register
    }
    
    // ===  ADMIN SECTORS ===
    static async listAllSectors() {
        const sector = await instance
            .get('/sectors')
            .then(resp => resp.data)
            .catch(err => console.log(err))

        return sector
    }
    // ===  ADMIN DEPARTMENT ===
    static async listAllDepartmentsAdmin() {
        const listDepartment = await instance
            .get('/departments')
            .then(resp => resp.data)
            .catch(err => console.log(err))

        return listDepartment
    }

    static async departmentsOfCompany(id) {
        const department = await instance
            .get(`/departments/${id}`)
            .then(resp => resp.data)
            .catch(err => console.log(err))

        console.log(department);
        return department
    }

    static async createDepartment(data) {
        const  create = await instance
            .post('/departments', data)
            .then((resp) => {
                console.log(resp)
                Toast.create('Criação realizada com sucesso', 'green')
            })
            .catch(err => {
                Toast.create(err.response.data.error, '#FF0000')
            })

        console.log(create);
        return create
    }

    static async contradictOfficial(data) {
        const contradict = await instance
            .patch('/departments/hire', data)
            .then((resp) => {
                console.log(resp)
                Toast.create('Contratação realizada com sucesso', 'green')
            })
            .catch(err => {
                Toast.create(err.response.data.error, '#FF0000')
            })

        console.log(contradict);
        return contradict
    }

    static async dismissalOfEmployees(data, id) {
        const dismissal = await instance
            .patch(`/departments/dismiss/${id}`, data)
            .then((resp) => {
                console.log(resp)
                Toast.create('Demissão realizada com sucesso', 'green')
            })
            .catch(err => {
                Toast.create(err.response.data.error, '#FF0000')
            })

        console.log(dismissal);
        return dismissal
    }
    static async editDepartment(data, id) {
        const editDepartment = await instance
            .patch(`/departments${id}`, data)
            .then((resp) => {
                console.log(resp)
                Toast.create('Atualização realizada com sucesso', 'green')
            })
            .catch(err => {
                Toast.create(err.response.data.error, '#FF0000')
            })

        console.log(editDepartment);
        return editDepartment
    }
    static async deleteDepartment(id) {
        const delet = await instance
            .delete(`/departments/${id}`)
            .then(resp => resp.data)
            .catch(err => console.log(err))

        console.log(delet);
        return delet
    }
}