 /* The parameters of the function above are the name of the cookie (cname), the value of the cookie (cvalue), and the number of days until the cookie should expire (exdays).
                                                             The function sets a cookie by adding together the cookiename, the cookie value, and the expires string.*/
 function setCookie(cname, cvalue, exdays) {
     var d = new Date();
     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
     var expires = "expires=" + d.toGMTString();
     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 }

 /*Take the cookiename as parameter (cname).
                                                
                                                Create a variable (name) with the text to search for (cname + "=").
                                                
                                                Decode the cookie string, to handle cookies with special characters, e.g. '$'
                                                
                                                Split document.cookie on semicolons into an array called ca (ca = decodedCookie.split(';')).
                                                
                                                Loop through the ca array (i = 0; i < ca.length; i++), and read out each value c = ca[i]).
                                                
                                                If the cookie is found (c.indexOf(name) == 0), return the value of the cookie (c.substring(name.length, c.length).
                                                
                                                If the cookie is not found, return "".
                                                        
                                                         */

 function getCookie(cname) {
     var name = cname + "=";
     var decodedCookie = decodeURIComponent(document.cookie);
     var ca = decodedCookie.split(';');
     for (var i = 0; i < ca.length; i++) {
         var c = ca[i];
         while (c.charAt(0) == ' ') {
             c = c.substring(1);
         }
         if (c.indexOf(name) == 0) {
             return c.substring(name.length, c.length);
         }
     }
     return "";
 }

 /*Last, we create the function that checks if a cookie is set.
                                                
                                                If the cookie is set it will display a greeting.
                                                
                                                If the cookie is not set, it will display a prompt box, asking for the name of the user, and stores the username cookie for 365 days, by calling the setCookie function:
                                                         */
 function checkCookie() {
     var user = getCookie("username");
     if (user != "") {
         alert("Welcome again " + user);
     } else {
         user = prompt("Please enter your name:", "");
         if (user != "" && user != null) {
             setCookie("username", user, 30);
         }
     }
 }

 // for button

 function myFunction() {
     alert('Hello');
 }
 var textArray = [
     'boo',
     'hehe'
 ];
 var randomNumber = Math.floor(Math.random() * textArray.length);

 audioElement.setAttribute('src', textArray[randomNumber]);