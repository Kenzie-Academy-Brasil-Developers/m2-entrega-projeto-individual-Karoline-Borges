export class Nave {
    static arrowNave() {
        const arrow = document.querySelectorAll('.arrow');

        arrow.forEach(element => {
            element.addEventListener('click', event => {
                const arrowParent = event.target.parentElement.parentElement
                arrowParent.classList.toggle('showMenu')
            })
        });
    }

    static sidebarNave() {
        const sidebar = document.querySelector('.sidebar');
        const sidebarBtn = document.querySelector('.bx-menu');

        sidebarBtn.addEventListener('click', () => {
            sidebar.classList.toggle('close')
        })
    }

    static fazerLogout() {
        const btnLogout = document.querySelector('.bx-log-out')
        btnLogout.addEventListener('click', () => {
            localStorage.clear()
            return window.location.assign('../../../index.html')
        })
    }
}
