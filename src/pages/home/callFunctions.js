import { Nave } from "./nave/menu.js";
import { ShowOnScreen } from "./page/company.js";
import { Create } from "./page/don.js";
import { Render } from "./page/render.js";
import { Index } from "./page/index.js"

import { Requests } from "../API/requests.js"



Nave.menu()
Nave.darkMode()


Index.handleLoginModal()
Index.handleSignupModal()

// Mostrar as empresas cadastradas

Render.renderCompanies()

// Filtrar as empresas por seções

// await Requests.seeAllCompaniesBySectors('Varejo')
// await Requests.seeAllCompaniesBySectors('Textil')
// await Requests.seeAllCompaniesBySectors('Manufatura')
// await Requests.seeAllCompaniesBySectors('Aeroespacial')
// await Requests.seeAllCompaniesBySectors('Automotiva')
// await Requests.seeAllCompaniesBySectors('TI')
// await Requests.seeAllCompaniesBySectors('Atacado')