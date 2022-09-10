function validateForm(firstName, email, phone, message) {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const phoneNumberFormat = /^\+[0-9]{11}$/;

  if (!firstName || !email || !phone || !message) {
    alert("You're missing some fields");
  } else if (
    !emailFormat.test(email) ||
    !phoneNumberFormat.test(phone) ||
    message.length < 50
  ) {
    console.log(
      !emailFormat.test(email),
      !phoneNumberFormat.test(phone),
      message.length < 50
    );
    alert("Please, follow the requested formatting for each input.");
  } else {
    return true;
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  const submitButton = document.querySelector("#submit_button");

  submitButton.addEventListener("click", function (event) {
    const url = "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";
    const firstName = document.querySelector("#name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const message = document.querySelector("#message");
    const data = {
      name: firstName.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };
    const body = { item: data };
    event.preventDefault();
    if (validateForm(data.name, data.email, data.phone, data.message)) {
      const fetchParams = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-API-KEY": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H",
        },
        body: JSON.stringify(body),
      };
      fetch(url, fetchParams)
        .then((response) => response.json())
        .then((output) => console.log(output))
        .catch((e) => console.warn("Something went wrong.", err));
    }
  });
});
