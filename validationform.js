function validateform(){
    var nameoutput =  document.forms["message"]["nama"].value;
   document.getElementById("nameoutput").innerText = nameoutput;
    var tgloutput =  document.forms["message"]["tgl"].value;
   document.getElementById("tgloutput").innerText = tgloutput;
    var genderoutput =  document.forms["message"]["gender"].value;
   document.getElementById("genderoutput").innerText = genderoutput;
    var pesanoutput =  document.forms["message"]["pesan"].value;
   document.getElementById("pesanoutput").innerText = pesanoutput;

    if(nameoutput == ""|| tgloutput == ""){
        alert("Empty Please input");

        return false;
    }

   return false;
}

