const errorDiv = document.querySelector('.error_msg');

export const noPlayersError = () => {
  errorDiv.classList.remove('hide');
  errorDiv.textContent = 'Please select a player';
  errorDiv.setAttribute('tabindex', '-1')
  errorDiv.focus();
}

export const clearErrors = () => {
  errorDiv.classList.add('hide');
  errorDiv.textContent = '';
  errorDiv.removeAttribute('tabindex');
  errorDiv.blur();
}