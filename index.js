function submitForm() {
  const email = document.getElementById('form_contact-email').value
  const message = document.getElementById('form_contact-message').value

  const txt = 'Hello\n\nYour email is: ' + email + '\n\nMessage: ' + message

  alert(txt)
}
