const requiredInput = input => input ? undefined : 'Требуется ввод';

const requiredEmailInput = (input) => {
    if (!input) {
        return  'Требуется ввод';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input)) {
        return 'Неверный формат электронной почты';
    }
}

const requiredPhoneInput = (input) => {
    if (!input) {
        return  'Требуется ввод';
    } else if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i.test(input)) {
        return 'Неверный формат номера';
    }
}

export {
    requiredInput,
    requiredEmailInput,
    requiredPhoneInput
}
