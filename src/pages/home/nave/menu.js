export class Nave {

    static menu() {
        const menu = document.querySelector('.menu')
        const sidebar = document.querySelector('.sidebar')
        const mainContent = document.querySelector('.main--content')

        menu.onclick = function () {
            sidebar.classList.toggle('active')
            mainContent.classList.toggle('active')
        }
    }

    static darkMode() {
        const body = document.querySelector('body'),
            modeSwitch = body.querySelector(".toggle-switch"),
            modeText = body.querySelector(".mode-text");

        modeSwitch.addEventListener("click", () => {
            body.classList.toggle("dark");

            if (body.classList.contains("dark")) {
                modeText.innerText = "Light mode";
            } else {
                modeText.innerText = "Dark mode";

            }
        });
    }

    static fazerLogout() {
        const btnLogout = document.querySelector('.bx-log-out')
        btnLogout.addEventListener('click', () => {
            localStorage.clear()
            return window.location.assign('../../../index.html')
        })
    }
}

