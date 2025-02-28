const TOKEN = '7925249251:AAGXSRjfGNw3kXPV9j8ETGUACITecQCei5c';
const CHAT_ID = '-1002467377304';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// это элемент сообщения, который будет появляться, если сообщение
// будет успешно отправлено
const succes = document.querySelector('.succes');

document.getElementById('order_form').addEventListener('submit', function(e) {

    e.preventDefault();

    let message = 'Форма з сайту\n' + 'Ім\'я: ' + this.name.value + '\n' +
    'Номер телефону: ' + this.phone.value;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {

        succes.classList.remove('disp');
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() => {
        console.log('Скрипт выполнен');
    })

})