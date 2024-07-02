document.getElementById('verify').addEventListener('click', () => {
    const digit1 = document.getElementById('digit1').value
    const digit2 = document.getElementById('digit2').value
    const digit3 = document.getElementById('digit3').value
    const password = digit1 + digit2 + digit3
    const message = document.getElementById('message')

    if (password === '911') {
        message.textContent = "password 1 correcto"
    } else if (password === '714') {
        message.textContent = "password 2 es correcto"
    } else {
        message.textContent = "password incorrecto"
    }
})