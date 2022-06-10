function date(){
   d = document.getElementById("date")
   var date = new Date()
   d.innerText = date
}

date()


function checkmail() {
    m = document.querySelector("#mail")
    document.querySelector("#mail").innerHTML = m.value
    n = m.value
    w = document.getElementById("wrong")
    pas = document.querySelector("#pas")
    document.querySelector("#pas").innerHTML = pas.value
    pas = pas.value
    pas1 = document.querySelector("#pas1")
    document.querySelector("#pas1").innerHTML = pas1.value
    pas1 = pas1.value
    w2 = document.getElementById("wrong2")
    g = document.getElementById("g")
    sub = document.getElementById("sub")
    
    
   
   r = n.indexOf("@")
   r1 = parseInt(r)
   p = n.indexOf(".")
   s = n.slice(p)
   l = s.length
   d = l - 1
    x =  pas.localeCompare(pas1)
   x1 = parseInt(x)

   

   

   

   i1 = pas.includes("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
   
   
   i2 = /[0-9]/.test(pas) 

   i3 = pas.includes("A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q","R", "S", "T", "U", "V", "W", "X", "Y", "Z") 
   

   i4 = pas.includes("$")
   i5 = pas.includes("#")
   i6 = pas.includes("!")
   i7 = pas.includes("%")
   i8 = pas.includes("&")
   i9 = pas.includes("*")
   i10 = pas.includes("^")

   
   
   
   



   if (r1 == -1){
       w.innerText = "მეილი არასწორია!"

   }
   else if (d < 3) {
    w.innerText = "მეილი არასწორია!"

   }

    else if (x1 != 0){
    w2.innerText = "პაროლები არ ემთხვვევა"
} 
    else if (i1 == true && i2 == false && i3 == false && i4 == false && i5 == false && i6 == false && i7 == false && i8 == false && i9 == false && i10 == false ){
        g.innerHTML = "<b style='color: green;'>სუსტი</b>"
        sub.innerText = "ანგარიში დამატებულია !"
    }
    else if (i1 == true && i2== true && i3 == false && i4 == false && i5 == false && i6 == false && i7 == false && i8 == false && i9 == false && i10 == false){
        g.innerHTML = "<b style='color: yellow;'>საშუალო</b>"
        sub.innerText = "ანგარიში დამატებულია !"
    }
    else if (i1 == true && i2== true && i3 == true  && i4 == false && i5 == false && i6 == false && i7 == false && i8 == false && i9 == false && i10 == false){
        g.innerHTML = "<b style='color: orange;'>ძლიერი</b>"
        sub.innerText = "ანგარიში დამატებულია !"
    }
    else if (i1 == true && i2== true && i3 == true || i4 == true || i5 == true || i6 == true || i7 == true || i8 == true || i9 == true || i10 == true){
        g.innerHTML = "<b style='color: red;'>ძალიან ძლიერი</b>"
        sub.innerText = "ანგარიში დამატებულია !"
    }
   
    






}






   
   

    



