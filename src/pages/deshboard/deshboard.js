import { Index } from "../homePage/index.js";
import { Requests } from "../requests.js";
import { List } from "./list.js";
import { Nave } from "./nave.js";
import { RenderDeshboard } from "../deshboard/render.js"

Nave.arrowNave()
Nave.sidebarNave()
Nave.fazerLogout()

Index.registerCompanyModal()
Index.createDescriptionModal()

RenderDeshboard.renderUser()
RenderDeshboard.renderOutOfWork()
RenderDeshboard.renderSector()
RenderDeshboard.renderDepartment()
// RenderDeshboard.renderDepartmentOfCompany()


// === Buscar Informações do funcionário logado - USERS ===
// Requests.search()
// === Listar todos os funcionários do mesmo departamento - USERS ===
// Requests.listAllEmployees()
// === Listar os Departamentos da empresa do funcionário logado - USERS  ===
// Requests.listAllDepartments()
// === Atualizar informações do funcionário - USERS ===
// Requests.editUserData()