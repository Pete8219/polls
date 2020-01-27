


document.addEventListener("DOMContentLoaded", ()=>{

    let data = {};
    

    let rating = [
        {criteria:'Приезжают быстро, устраняют причину аварии качественно',grade: 5},
        {criteria:'Приезжают быстро, но устраняют причины аварии некачественно, приходится вызывать снова',grade: 3},
        {criteria:'Приезжают в течение суток после множества звонков', grade: 1},
        {criteria:'Не дозвониться, не приезжают, ни чего не делают', grade: 0},
        {criteria:'Мусора нет, крылечки и тротуары очищены от снега',grade: 5},
        {criteria:'Мусор и снег убирают раз в неделю',grade: 3},
        {criteria:'Не придёт, пока не позвонишь в компанию',grade: 1},
        {criteria:'Ни разу его не видели, убираем сами',grade: 0},
        {criteria:'Колеи и сугробов нет, убирают и вывозят снег регулярно',grade: 5},
        {criteria:'Убирают и вывозят снег раз в месяц',grade: 3},
        {criteria:'Убирают и вывозят снег 2-3 раза за зиму',grade: 1},
        {criteria:'Ни разу не убирали и не вывозили снег',grade: 0},
        {criteria:'Регулярно меняют лампочки, ремонтируют или регулируют входные двери, ремонтируют перила и ступеньки',grade: 5},
        {criteria:'Меняют лампочки, ремонтируют входные двери, перила и ступени в случае неоднократного обращения',grade: 3},
        {criteria:'Меняют лампочки, ремонтируют входные двери, перила и ступени только в случае значительного износа',grade: 1},
        {criteria:'Ни чего не делают, просить бесполезно',grade: 0},
        {criteria:'Ремонт делают периодически по мере необходимости. Нареканий к качеству нет',grade: 5},
        {criteria:'Ремонт делают переодически по мере необходимости. Есть существенные замечания к качеству',grade: 3},
        {criteria:'Ремонт делают после неоднократных обращений, только в случае, если есть значительный износ',grade: 1},
        {criteria:'Мы сами делаем косметический ремонт, просить компанию нет смысла',grade: 0},
        {criteria:'Есть стенд, на котором указана вся необходимая информация',grade: 5},
        {criteria:'Есть стенд, но половина информации отсутствует или уже устарела',grade: 3},
        {criteria:'Стенд размещён не удобно, приходится искать информацию',grade: 1},
        {criteria:'Стенд отсутствует',grade: 0},
        {criteria:'Регулярно проводят собрания, активно взаимодействуют с жителями в соц.сетях и мессенджерах',grade: 5},
        {criteria:'Редко проводят собрания, принимают только письменные завления в офисе и по электронной почте и телефону',grade: 3},
        {criteria:'Собрания не проводят, принимают заявления только в офисе, отвечают на заявки и вопросы только по телефону.',grade: 1},
        {criteria:'Не взаимодействуют',grade: 0},
        {criteria:'Разговаривают вежливо, предоставляю развернутую информацию по работе управляющей компании',grade: 5},
        {criteria:'Разговаривают вежливо, но информацию предоставляют только по запросу',grade: 3},
        {criteria:'Игнорируют',grade: 1},
        {criteria:'Разговаривают очень грубо',grade: 0},
        {criteria:'Ни разу не обращался поскольку компания работает хорошо',grade: 5},
        {criteria:'Не обращался, но есть претензии к качеству работы',grade: 3},
        {criteria:'Не обращался, но претензии есть',grade: 1},
        {criteria:'Обращаюсь регулярно – не реже 1 раза в месяц',grade: 0},
        {criteria:'Предоставляет, работает в соответствии с планом',grade: 5},
        {criteria:'Предоставляет, но значительная часть планов не выполнена',grade: 3},
        {criteria:'Размещает на стенде без обсуждения с жителями',grade: 1},
        {criteria:'Не предоставляет',grade: 0},


    ]


    let uprCompany = {
        company:'',
    }

    let params = {
        company: [
            "",
            "ООО \"ЕГУК\"",
            "ООО \"Стройжилсервис\"",
            "ООО \"Изумрудный город\"",
            "ООО \"СБИ\"",
            "ТСЖ \"Изумрудный город\"",
            "ТСЖ \"Возрождение\"",
            "ООО \"ЖК Возрождение\"",
            "ООО \"Квартал\"",
            "ООО \"Жилстандарт\"",
            "ООО \"Кит\"",
            "ТСЖ \"Ямальский дом\"",
            "ТСЖ \"Наш дом\"",
            "ООО \"УК Доверие\"",
            "ООО \"КЦ ЯНАО\"",
            "ООО \"Салехардская жилищная компания\""
        ],
        
        questions: [
            "",
            "Как вы оцениваете качество и скорость работы аварийной службы?",
            "Как вы оцениваете работу дворника?",
            "Как вы оцениваете качество механизированной очистки двора от снега и вывоз снега?",
            "Как вы оцениваете работу по содержанию мест общего пользования в доме (подъезды, коридоры, крыльца, лестницы и т.п.)?",
            "Как вы оцениваете своевременность и качество проведения управляющей компанией косметического ремонта (покраска стен, полов, перил, дверей и оконных рам, побелка стен и потолка, замена листов и т.д.) в местах общего пользования (коридоры, подъезды)?",
            "Установлены ли в местах общего пользования дома информационные стенды с актуальной информацией об управляющей компании (реквизиты, адрес,тел.офиса, эл.почта и т.п.), телефонах экстренных служб, аварийно-диспетчерской службы, перечне работ и услуг по содержанию и ремонту общего имущества и пр.",
            "Как вы оцениваете взаимодействие управляющей компании с жильцами?",
            "Как вы оцениваете вежливость сотрудников при общении с жильцами?",
            "Как часто вам приходилось обращаться в надзорные органы и различные инстанции с жалобами на плохую работу управляющей компании?",
            "Предоставляет ли УК и ТСЖ информацию о планах работы на год и отчёт о проделанной работе для обсуждения?"

        ]
    };


    let requestParam = {
        uk: '',
        criteriy: ''
    };


    let resGrade = [
            
       {
           key: '',
           ocenka: [],
       },    
    ]

    let companyName = document.getElementById('ratingUK');
    let question = document.getElementById('questions');

    /*  Создание выпадающего списка управляющих компаний в элементе select */

    function createSelect() {
        items = params.company;
        quest = params.questions;
         
            items.forEach(function(item) {
                let option = document.createElement("option");
                
                option.value = item;
                option.text = item;
                companyName.add(option);
            
            } )

            quest.forEach(function(qItem) {
                let option = document.createElement("option");
                option.value = qItem;
                option.text = qItem;
                question.add(option);
                
            })
    }


    createSelect();
    let i =0;
    let name, valueOption;

    // Отслеживание события выбора в списке

       companyName.addEventListener('change', function () {
            let name = document.getElementById('ratingUK').options.selectedIndex;
            let valueOption = document.getElementById('ratingUK').options[name].value;
            requestParam.uk = valueOption.split(" ").join("-"); 

            let t = document.querySelector('table');
            
            i = 0; 
    })

    // Отслеживание события выбора в списке

        question.addEventListener('change', function () {
            let QName = document.getElementById('questions').options.selectedIndex;
            let QValue = document.getElementById('questions').options[QName].value; 
            requestParam.criteriy = QValue.split(" ").join("-");
    })


    // Отслеживание нажатие кнопки Сформировать отчет
    let table = document.querySelector('table');
    let btn = document.getElementById('results');
    let rst = document.getElementById('reset');
    let average = document.getElementById('average');
    

        btn.addEventListener('click', function() {
            i = i + 1;
            //console.log(i)
            let uParam = requestParam.uk;
            let qParam = requestParam.criteriy;

            if (uParam == null && qParam == null) {
                console.log('Вы не выбрали ни один из критериев отбора');
            }
            
            rst.style.display="inline-block";
            average.style.display="block";

            GetData(uParam, qParam, i);
        })

        // Отслеживание нажатия кнопки Сбросить настройки

        rst.addEventListener('click', function() {
            let t = document.querySelector('table');
            let tr = document.getElementsByTagName('tr');
            
            t.deleteTHead();

            let rowCount = tr.length;
            for (let k = rowCount -1; k > 0 ; k--) {
                t.deleteRow(k);

            }
            
            average.style.display="none";
            resGrade = [];
           // j = 0;
        })


    

    /* Получение данных в формате JSON из файла */    

    function GetData(uParam) {
        if ( i === 1) {
    
        let request = new XMLHttpRequest();

        request.open('GET', '111.json');    //файл с данными 

        request.setRequestHeader('Content-Type','application/json');

        request.send();

        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4 && request.status == 200) {
                data = JSON.parse(request.response);
                PullData(data,uParam);
          

                
            } //end If
         
          
        }); // end of XMLHttpRequest to server
        
        
           
    }
   
    
       
    } // End of GetData


/* ==============================*/

function generateTableHead(table,tData) {   //создание заголовка таблицы
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of tData) {

        let th = document.createElement("th");
        let text = document.createTextNode(key);
        
            
            th.appendChild(text);
                                
        row.appendChild(th);
    }
}


function generateTable(table, tData, uParam) {      // создание табличной части
    for (let element of tData) {


        if ((element["Выберите управляющую компанию"]).split(" ").join("-") == uParam) {

            let row = table.insertRow();
            for (key in element) {
                let cell = row.insertCell();
                
                    let text = document.createTextNode(element[key].toLowerCase());
                
                    let newText = element[key].split(" ").join("-");
             
                /*Функция преобразование текстовых ответов в цифровую форму*/
                
                function replaceText(gradeItem) {
                    
                    
                    rating.forEach(function(item) {
                      
                        if (gradeItem === item.criteria.split(" ").join("-")) {
                              
                            gradeItem = item.grade;
                            
                            text = document.createTextNode(gradeItem);
                        
                            
                            
                        }
                        return gradeItem;
                       
                    })

                    if (!isNaN(gradeItem) && key!=="") {
                    resGrade.push(
                        {key,
                        ocenka: +(gradeItem)},
                    );
                        }
                    
                    
                }
                 
                
                

                replaceText(newText);
                cell.appendChild(text);
                
                //return resGrade;

        }
       
     
    } // End If

    } // End For cicle
    
    getResults(resGrade);
} 




/*===============*/



    function PullData(dataParam, uParam) {
       // console.log(dataParam)

        let data = dataParam;
           
        /* Генерация таблицы */
       
       let tData = Object.keys(data[0]);
       
       
       
       generateTableHead(table,tData); 
       generateTable(table, data, uParam);



// End function generateTable  


    } 

// Создаем массив с вопросами    

function getResults(data) {
    
        let newArray = [];
        let uniqueObject = {};

        for (let i in data) {
            if (data[i]['key'] == "") {
                delete data[i]['key'];
            }
            
            objCriteriy = data[i]['key'];
           // delete data[i]['ocenka'];
    
            uniqueObject[objCriteriy] = data[i];
        }

        for (i in uniqueObject) {
            newArray.push(uniqueObject[i]);
        }

        let obj = [];
        for (let j in  newArray) {

            if (newArray[j] !== 'undefined') {

                obj.push(newArray[j]['key'])
                
            }
 
            //console.log(obj);  

         }


        
         

         getSummGrade(data, obj);

}

//Функция подсчета голосов по каждому критерия для выбранной управляющей компании


let results = [

    {
        key : '',
        summa: [],

    }

];
//console.log(results);




   /*  for (let i = 0; i< 3; i++) {
        results[i] = new Object({
            key: '',
            summa: [],
        });
  //  console.log(results)

    } */





function summData(data,item) {
    let table_rows = table.rows;
    let total = 0;
    let cell;

    console.log(table_rows.item(1));


     /* for (let i =1, iLen = table_rows.length-1; i< iLen; i++) {
         cell = table_rows[i].cell[4];
         total += (cell.textContent || cell.innerText);

         console.log(total);
     } */
    //let height = parseInt(table_rows.length);
    

   
}


function getSummGrade(data, obj) {
    //console.log(obj)

    let k = 0;
    let res;

    for (let i = 1; i < obj.length; i++) {
        //console.log(obj[i])
        let parametr = obj[i];
        let Obj = new Object (
            {key: '',
            summa: [],
            }
        )

        Obj.key = parametr;
        results.push(Obj);
        console.log(results);

       // console.log(parametr);
/*             for (key in data) {
                if (data[key].key == parametr) {

                        if (Obj.key == "") {

                            Obj.key = parametr;

                        } else {
                            return;
                        }
                    
                        
                        Obj.summa.push(data[key]['ocenka']);
                        console.log(Obj)
                        
                    };
                    

                    
                    //console.log(key);
                    
                    
                    

                   //console.log(data[key].key);
                }
                
               
            } */
    
    //console.log(results);
}
} 

    //console.log(results);

/* 
    for (let k = 1; k< obj.length; k++) {
        let newItem = obj[k].split(" ").join('-');
        

       for (let i = 1; i< data.length; i++) {
           let newData = data[i]['key'];
            if (newData.split(" ").join("-") == newItem) {
                console.log('yeeee')

                results.key = newData;
                results.summa.push(data[i]['ocenka']);
                console.log(results)
            }
        } 

    } */
        
   /*      for (let k in data) {


            for (let i = 1; i< obj.length; i++) {

            if (data[k]['key'] == results[i]) {
                console.log('yeee')
            }


        }
 
        results[i] = obj[i];
       // console.log();
    }  
   */
//console.log(results)
  

//}





});