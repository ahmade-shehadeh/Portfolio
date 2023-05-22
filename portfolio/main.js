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



const Public_Key = "6kDj9mYBfJS_lVA7Z";
const Private_Key = "X38bma_W8u9_CnC0p_2_b";


(function () {
  emailjs.init(Public_Key);
})();

// const inputFields = {
//   name: nameInput.value,
//   email: emailInput.value,
//   message: messageInput.value,
// };
document
        .getElementById("contact_form")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          const Service_ID = "service_4lu4pwo";
          const Template_ID = "template_hnw6igv";
          
          const inputFields = {
  name: nameInput.value,
  email: emailInput.value,
  message: messageInput.value,
};
          
          emailjs.send(Service_ID, Template_ID,inputFields).then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              alert("SUCCESS!");
            },
            (error) => {
              console.log("FAILED...", error);
              alert("FAILED...", error);
            }
          );
        });

        async function fetchData(type = "skills") {
          let response
          type === "skills" ?
              response = await fetch("skills.json")
              :
              response = await fetch("./projects/projects.json")
          const data = await response.json();
          return data;
      }
      
    