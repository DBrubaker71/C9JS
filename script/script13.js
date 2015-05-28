/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function() {
    //var clickMeButton = document.getElementById('clickMe');
    //clickMeButton.onclick = runTheExample;
    
    document.getElementById('clickMe').onclick = runTheExample2;
};

function runTheExample(){
    alert('running the example');
}

function runTheExample2() {
    var myElement = document.getElementById('second');
    
    var myNodeName = myElement.nodeName;
    alert(myNodeName);
    
    if(myElement != null) {
        alert(myElement.innerHTML);
    }
}