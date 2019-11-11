// Get Elements By ID
document.getElementById("js_test").style = "color:#fff; font-size:40px; background:green; border:2px solid #000; border-raidus:5px; padding:20px; margin-right: 30px; text-align:center;"
document.getElementById("js_test").innerHTML = 'HELLO WORLD';

// Get Elements By Class
document.getElementsByClassName("demo_class")[0].innerHTML = "I love Java Script";
document.getElementsByClassName("demo_class")[0].style = "color:#404040; font-size:20px;"

// Get Elements By Tag
document.getElementsByTagName("p")[0].innerHTML = "Hello Javascript";
document.getElementsByTagName("p")[0].style = "font-size:17px;"

function alert_function(){
    alert('Alert Completed');
}

function query_function(){
    document.querySelector(".demo_class").style ="background:red; color:#fff; padding:10px; font-size:20px;"
}

function selectall_function(){
    document.querySelectorAll("#all_content")[0].style = "background:green; color:#fff; padding:10px; margin-bottom:20px;"

}


function first_function(){
    a=5; b = a++; 
document.getElementsByClassName("arthmetic_first")[0].innerHTML = b;
}


function add_function(){
    var a = 5;
    var b = ++a;
    document.getElementsByClassName("arthmetic")[0].innerHTML = b;

}

function subs_function(){
    a=5;b = a--;
    document.getElementsByClassName("arthmetic_third")[0].innerHTML = b;
}

function sub_function(){
    a=5;b = --a;
    document.getElementsByClassName("arthmetic_fouth")[0].innerHTML = b;
}



console.log( 1 + '2' + 3)
console.log(1 + 2 + '3') 
console.log('1' + 2 + 3)