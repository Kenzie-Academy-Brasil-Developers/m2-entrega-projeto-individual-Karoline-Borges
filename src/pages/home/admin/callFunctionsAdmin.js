import { Nave } from "../nave/menu.js";
// import { ShowOnScreen } from "../page/company.js";
// import { Create } from "../../../pages/home/page/don.js";
import { Render } from "../../../pages/home/page/render.js";
// import { Index } from "./page/index.js"

// import { Requests } from "../../API/requests"



Nave.menu()
Nave.darkMode()


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