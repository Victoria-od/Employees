$(document).ready( function () {

var xhr = new XMLHttpRequest();//создание xmlhttprequest объекта

				//создание callback function, которая будет вызываться при изменении свойства readyState
				xhr.onreadystatechange = function() {
				  if(xhr.readyState === 4 && xhr.status === 200){//4 - состояние readystate complete, 200 - обмен между пользователем и сервером завершен
				    var employees = JSON.parse(xhr.responseText);//функция конвертирует текст в JS-объект
				    var employeeListDiv = document.getElementById('employeeList');//доступ к элементу по идентивикатору
				    var statusHTML = document.createElement('ul');//создание списка
				    statusHTML.classList.add('bulleted');//добавление класса
				    employeeListDiv.appendChild(statusHTML);//добавление дочерних элементов в родительский
				    console.log(employeeListDiv);
				    
				    for (var i = 0; i < employees.length; i++){ //полный список
				      
				      //создание <li> для первого employee
				      var employee = document.createElement('li');
				      var employeeName = document.createTextNode(employees[i]["name"]);//берутся свойства объекта из JSON
				      employee.appendChild(employeeName);
				      
				      
				      if(employees[i]["inoffice"]){//в зависимости от статуса “inoffice” присвоить класс class="in" или class="out", пункту списка
				      //add <li class="in">
				        employee.classList.add('in');
				      }else{
				      //add <li class="out">
				        employee.classList.add('out');
				      }
				      
				      //append <li> element to <ul>
				      statusHTML.appendChild(employee);
				    }
				    
				  }
				};

				//open and send request
				xhr.open('GET', 'data/employees.json');//использование метода Get- информация - часть URL, откуда брать данные
				xhr.send();//отправка запроса


			//Solution: Post a List of Employees in the sidebar with their work status

			//send a request to the JSON data of employees

			//create a <ul class="bulleted"> of those employees
			


			$.getJSON('../data/employees.json', function(json){

			  $('#employeeList').html('<ul class="bulleted"></ul>');
			  var employees = "";
			  
			  for(var i = 0; i < json.length; i++){
			    var name = json[i]["name"];
			    var inoffice = json[i]["inoffice"];
			    var status = '';
			    
			    if(inoffice){
			      status = 'in';
			    } else{
			      status = 'out';
			    }
			    
			    var employee = '<li class="' + status + '">' + name + '</li>';
			    employees += employee;
			    
			  }
			  $('.bulleted').html(employees);
			  
			});
			
});