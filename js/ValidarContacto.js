function validarform(){
  //valido el nombre
  if (document.fvalida.nombre.value.length==0){
     alert("Tiene que escribir su nombre")
     document.fvalida.nombre.focus()
     return 0;
  }

  if (document.fvalida.email.value.length==0)
     {alert("Tiene que escribir su email")
      document.fvalida.email.focus()
      return 0;
     }
  else  
     {
  if (document.fvalida.email.value.indexOf('@', 0) == -1 || document.fvalida.email.value.indexOf('.', 0) == -1)
     {alert("La direción de e-mail \n debe ser del tipo \n xxx@xxx.com o xxx@xxx.com.ar ")
      document.fvalida.email.focus()
      return 0;
      }
     }
   
  if (document.fvalida.telefono.value.length==0){
    alert("Tiene que escribir su telefono")
    document.fvalida.telefono.focus()
    return 0;
 }

if (document.fvalida.mensaje.value.length==0){
  alert("Tiene que escribir su mensaje")
  document.fvalida.mensaje.focus()
  return 0;
}

alert("Muchas gracias por enviar el formulario");
document.fvalida.submit();
location.reload();
 
}