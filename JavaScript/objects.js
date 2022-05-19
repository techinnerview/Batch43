function objectsPredefined() {
    var val = 10.43;
    document.write("<br />Value of PI " + Math.PI);
    document.write("<br />Value of Round " + Math.round(val));
    document.write("<br />Value of floor " + Math.floor(val));
    document.write("<br />Value of ceil " + Math.ceil(val));
    document.write("<br />Value of sqrt " + Math.sqrt(val));
    document.write("<br />Value of abs " + Math.abs(val));

    var date = new Date(); //current date and time
    document.write("<br />Today's date is  " + date.getUTCDate());
    document.write("<br />Get Date is  " + date.getUTCDate());
    document.write("<br />Get Day is  " + date.getDay());
    document.write("<br />Get Year is  " + date.getFullYear());
    document.write("<br />Get Month is  " + date.getDate());

}