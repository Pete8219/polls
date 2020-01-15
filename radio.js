document.addEventListener("DOMContentLoaded", ()=>{

    let data = {};

    function GetData() {
    
        let request = new XMLHttpRequest();

        request.open('GET', '111.json');
        request.setRequestHeader('Content-Type','application/json');

        request.send();

        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4 && request.status == 200) {
                data = JSON.parse(request.response);
          
                let radio_info = document.querySelector('.radio-info');
                console.log(data);
               

                radio_info.innerHTML =
                 
                `<div style='float:left;'> IP:</div>     ${data[0]['Выберите управляющую компанию']} </br>`; /*
+
                `<div style='float:left;'> Location:</div>     ${data.icestats.location} </br>` +
                `<div style='float:left;'>Host radio:</div>     ${data.icestats.host}</br>`;
*/



  /*               function goRec(obj) {
                    
                    for (let key in obj) {
                        
                        let value = obj[key];
                        if (typeof value !=="object"){
                        console.log(`key: ${key}, value: ${value}`);
                        }

                        if(typeof value == "object") {
                            goRec(value);
                        }
                    }
                }
 */
                /* goRec(data);  */

            }
 
        });
        
        
           
    }
    
    GetData();

/*
    function setTime (){

        setInterval(GetData, 2000);

    }

    setTime();
*/

});