const toggleMenu = () => {
    const menu = document.querySelector('.burger__content')
    menu.classList.toggle("burger__hidden")

    if (!menu.classList.contains("burger__active")) {
        menu.style.display = 'block'
    }

    setTimeout(() => {
        menu.classList.toggle("burger__active")

        if (!menu.classList.contains("burger__active")) {
            menu.style.display = 'none'
        }
    }, 10)
}

document.querySelector('.burger__menu').addEventListener('click', toggleMenu)
document.querySelectorAll('.close').forEach(item => {
    item.addEventListener('click', () => {
        const menu = document.querySelector('.burger__content')

        menu.classList.remove("burger__active")

        setTimeout(() => {
            menu.style.display = 'none'
            menu.classList.add("burger__hidden")
        }, 200)
    })
})


document.addEventListener('DOMContentLoaded', function () {
    const individualCheckbox = document.querySelector('#checkInd');
    const entityCheckbox = document.querySelector('#checkEnt');

    entityCheckbox.addEventListener('change', () => {
        if (entityCheckbox.checked) {
            individualCheckbox.checked = false;
        } else {
            individualCheckbox.checked = true;
        }
    });

    individualCheckbox.addEventListener('change', () => {
        if (individualCheckbox.checked) {
            entityCheckbox.checked = false;
        } else {
            entityCheckbox.checked = true;
        }
    });
});