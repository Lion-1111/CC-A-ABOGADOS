$("#contactForm").submit(function (ev) {
  ev.preventDefault();
  var name = $("#inputName").val();
  var email = $("#inputEmail").val();
  var phone = $("#inputPhone").val();
  var message = $("#inputMsj").val();
  let flag = true;
  if (name === "") {
    $("#nameError").html("El nombre está vacio");
    flag = false;
  } else {
    $("#nameError").html("");
  }
  if (email === "") {
    $("#emailError").html("El email está vacio");
    flag = false;
  } else {
    $("#emailError").html("");
  }
  if (phone === "") {
    $("#phoneError").html("El número de teléfono está vácio");
    flag = false;
  } else {
    $("#phoneError").html("");
  }
  if (!flag) return;
  var firstName = name; // For Success/Failure Message
  // Check for white space in name for Success/Fail message
  if (firstName.indexOf(" ") >= 0) {
    firstName = name.split(" ").slice(0, -1).join(" ");
  }
  $this = $("#sendMessageButton");
  $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages

  $.ajax({
    url: "./assets/mail/contact_me.php",
    type: "post",
    data: {
      name: name,
      phone: phone,
      email: email,
      message: message,
    },
    cache: false,
    success: function (respuesta) {
      //clear all fields
      alert("En breves momentos te estaremos dando respuesta a tu solicitud");
      $("#contactForm").trigger("reset");
    },
    error: function (error) {
      //clear all fields
      alert("Ha ocurrido un error");
      $("#contactForm").trigger("reset");
    },
    complete: function () {
      setTimeout(function () {
        $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
      }, 1000);
    },
  });
});
$("#afiliateForm").submit(function (ev) {
  ev.preventDefault();
  var name = $("#inputName").val();
  var email = $("#inputEmail").val();
  var phone = $("#inputPhone").val();
  var phoneHouse = $("#inputPhoneHouse").val();
  var city = $("#inputCity").val();
  var birthDate = $("#inputBirthDate").val();
  var message = $("#inputMsj").val();
  let msj = `Mi nombre es: ${name} mi correo es: ${email}, mi teléfono celular es: ${phone}, mi número local es: ${phoneHouse}.
  Me ubico en: ${city}. Mi fecha de nacimiento es: ${birthDate} ${
    message && `con respecto a: ${message}`
  }`;
  var terms = $("#terms");
  let flag = true;
  if (name === "") {
    $("#nameError").html("El nombre está vacio");
    flag = false;
  } else {
    $("#nameError").html("");
  }
  if (email === "") {
    $("#emailError").html("El email está vacio");
    flag = false;
  } else {
    $("#emailError").html("");
  }
  if (phone === "") {
    $("#phoneError").html("El número de teléfono está vácio");
    flag = false;
  } else {
    $("#phoneError").html("");
  }
  if (phoneHouse === "") {
    $("#phoneHouseError").html("El número de teléfono está vácio");
    flag = false;
  } else {
    $("#phoneHouseError").html("");
  }
  if (city === "") {
    $("#cityError").html("La ciudad no puede ir vacía");
    flag = false;
  } else {
    $("#cityError").html("");
  }
  if (birthDate === "") {
    $("#birthDateError").html("Ingresa tu fecha de nacimiento");
    flag = false;
  } else {
    $("#birthDateError").html("");
  }
  if (!terms[0].checked) {
    $("#termsError").html("Acepta los términos");
    flag = false;
  } else {
    $("#termsError").html("");
  }
  if (!flag) return;
  var firstName = name; // For Success/Failure Message
  // Check for white space in name for Success/Fail message
  if (firstName.indexOf(" ") >= 0) {
    firstName = name.split(" ").slice(0, -1).join(" ");
  }
  $this = $("#sendMessageButton");
  $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages

  $.ajax({
    url: "./assets/mail/contact_me.php",
    type: "post",
    data: {
      name: name,
      phone: phone,
      email: email,
      message: msj,
    },
    cache: false,
    success: function (respuesta) {
      //clear all fields
      alert("En breves momentos te estaremos dando respuesta a tu solicitud");
      $("#contactForm").trigger("reset");
    },
    error: function (error) {
      //clear all fields
      alert("Ha ocurrido un error");
      $("#contactForm").trigger("reset");
    },
    complete: function () {
      setTimeout(function () {
        $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
      }, 1000);
    },
  });
});
