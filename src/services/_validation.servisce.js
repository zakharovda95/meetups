export function validateEmail(value) {
  if (!value) {
    return 'Обязательное поле';
  }
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return 'Не забывайте про @';
  }
  return true;
}

export function validatePassword(value) {
  if (!value) {
    return 'Обязательное поле';
  }
  if (value.length < 6) {
    return 'Минимум 6 символов';
  }
  return true;
}
