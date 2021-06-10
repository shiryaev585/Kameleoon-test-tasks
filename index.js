const btn = document.getElementById('btn');
const header = document.getElementById('header')

btn.addEventListener('click', () => {
    header.classList.toggle('clicked')
    console.log('clicked')
})
