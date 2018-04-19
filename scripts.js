$(function() {
  // konstansok
  const validClass = 'is-valid';
  const invalidClass = 'is-invalid';

  // elemek összegyűjtése
  let $button = $('form button');
  let $checkbox = $('input#aszf');
  let $username = $('input#username');
  let $password = $('input#password');
  let $passwordAgain = $('input#passwordAgain');
  let $alert = $('div.alert');
  let $alertFieldList = $('div.alert ul');
  let $successText = $('div#successText');
  let $form = $('form');

  // gombnyomásra reagálás
  $button.click(function(event) {
    let invalidFields = [];

    // alapértelmezett működés megakasztása
    event.preventDefault();

    // ellenőrizzük a mezőket
    // username
    let username = $username.val();
    if (username.length == 0) {
      // hibás kitöltés
      invalidFields.push('Felhasználónév');
      $username.removeClass(validClass);
      $username.addClass(invalidClass);
    } else {
      // megfelelő kitöltés
      $username.removeClass(invalidClass);
      $username.addClass(validClass);
    }

    // jelszó
    let password = $password.val();
    if (password.length <= 6) {
      // hibás kitöltés
      invalidFields.push('Jelszó');
      $password.removeClass(validClass);
      $password.addClass(invalidClass);
    } else {
      // megfelelő kitöltés
      $password.removeClass(invalidClass);
      $password.addClass(validClass);
    }

    // jelszó megerősítés
    let passwordAgain = $passwordAgain.val();
    if (password != passwordAgain || passwordAgain.length <= 6) {
      // hibás kitöltés
      invalidFields.push('Jelszó megerősítés');
      $passwordAgain.removeClass(validClass);
      $passwordAgain.addClass(invalidClass);
    } else {
      // megfelelő kitöltés
      $passwordAgain.removeClass(invalidClass);
      $passwordAgain.addClass(validClass);
    }

    // ászf
    let isChecked = $checkbox.prop('checked');
    if (!isChecked) {
      // hibás kitöltés
      invalidFields.push('ÁSZF');
      $checkbox.removeClass(validClass);
      $checkbox.addClass(invalidClass);
    } else {
      // megfelelő kitöltés
      $checkbox.removeClass(invalidClass);
      $checkbox.addClass(validClass);
    }

    // ha sikeres volt a kitöltés
    if (invalidFields.length == 0) {
      $alert.hide();
      $form.hide();
      $successText.show();
    }
    // ha sikertelen volt a kitöltés
    else {
      $alert.show();
      $alertFieldList.html('');
      $.each(invalidFields, function(index, field) {
        $alertFieldList.append('<li>' + field + '</li>');
      });
    }
  });
});
