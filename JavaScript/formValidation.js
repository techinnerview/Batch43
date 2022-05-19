function validate() {
    if (document.myForm.Name.value == "") {
        alert("Please provide your name!");
        document.myForm.Name.focus();
        return false;
    }
    if (document.myForm.Name.value.length >= 10) {
        alert("Please provide your name in less than 10 characters!");
        document.myForm.Name.focus();
        return false;
    }
    if (document.myForm.EMail.value == "") {
        alert("Please provide your Email!");
        document.myForm.EMail.focus();
        return false;
    }
    if (document.myForm.Zip.value == "" ||
        isNaN(document.myForm.Zip.value) ||
        document.myForm.Zip.value.length != 5) {
        alert("Please provide a zip in the format #####.");
        document.myForm.Zip.focus();
        return false;
    }
    if (document.myForm.Country.value == "-1") {
        alert("Please provide your country!");
        return false;
    }
    return (true);
}