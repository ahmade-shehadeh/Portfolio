const btn = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const contactForm = document.querySelector("#contact_form");
const sudmitbtn = document.querySelector("#submit_btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

const Service_ID = "service_4lu4pwo";

const Public_Key = "6kDj9mYBfJS_lVA7Z";
const Private_Key = "X38bma_W8u9_CnC0p_2_b";
const Template_ID = "template_hnw6igv";

emailjs.init(Public_Key);

contactForm.addEventListener("click", (e) => {
  e.preventDefault();

  sudmitbtn.innerText = "Just A Moment.... ";
console.log('e.target');
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  emailjs.send(Service_ID, Template_ID, inputFields).then(
    () => {
      sudmitbtn.innerText = "message sent successfully";
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    },
    (error) => {
      console.log(error);
      sudmitbtn.innerText = "something went wrong";
    }
  );
});
