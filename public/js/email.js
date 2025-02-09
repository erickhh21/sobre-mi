 // Configurar EmailJS
 emailjs.init("Q1xJOfnzH48nqDVHD");  // Reemplaza con tu User ID de EmailJS

 document.getElementById("contact-form").addEventListener("submit", function(event) {
     event.preventDefault();

     emailjs.send("service_vgj9hgw", "template_dp5f0hg", {
         from_name: document.getElementById("name").value,
         from_email: document.getElementById("email").value,
         message: document.getElementById("message").value
     }).then(function(response) {
         document.getElementById("name").value = "";
         document.getElementById("email").value = "";
         document.getElementById("message").value = "";
         alert("Mensaje enviado con éxito");
     }, function(error) {
         alert("Error al enviar el mensaje");
         console.log(error);
     });
 });