let allEmployee = [] ;
let form        = document.getElementById("form");
let employeeDiv = document.getElementById("employeeDiv");
let add         =  document.getElementById("submit");
let employeeIdstart  = 1000 ;

function employee(fullName,department,level,imageURL){
   
    this.employeeID = 0 ;
    this.fullName   = fullName   ;
    this.department = department ;
    this.level      = level      ;
    this.imageURL   = imageURL;
    this.salary     = 0;

    allEmployee.push(this);
  
}
function generateId(){
  return employeeIdstart++;
}
employee.prototype.getId = function(){
  this.employeeID = generateId()
    
}

    
employee.prototype.generateSalary = function()
{
  let max = 0;
  let min = 0;
  if (this.level == "Senior"){
    min = 1500;
    max = 2000;
  }
  else if (this.level == "Mid-Senior"){
    min = 1000;
    max = 1500; 
  }
  else{
    min = 500;
    max = 1000;
  }

        let randomSalary = Math.floor( (Math.random() *( max - min + 1 )) + min );
        randomSalary*= 0.75;
    
       this.salary = randomSalary;
    
    }
   
    let ghazi  = new employee("Ghazi Samer","Administration","Senior","assest/Ghazi Samer.jpg");
    let lana   = new employee("Lana Ali ","Finance","Senior","assest/Lana Ali.jpg") ;
    let tamara = new employee("Tamara Ayoup","Marketing","Senior","assest/Tamara Ayoup.jpg");
    let safi   = new employee("Safi Waled","Administration","Mid-senior","assest/Safi Waled.jpg");
    let omar   = new employee("Omar Zaid","Development","Senior","assest/Omar Zaid.jpg");
    let rana   = new employee("Rana Saleh","Development","Junior","assest/Rana Saleh.jpg");
    let hadi   = new employee("Hadi Ahmad","Finance","Mid-senior","assest/Hadi Ahmad.jpg");
   
    function saveEmployee (){
      let saveformat = JSON.stringify(allEmployee);
      localStorage.setItem("emploeey",saveformat)
    }

    function getData(){
      let emploeey = localStorage.getItem("emploeey")
      let parseemploeey = JSON.parse(emploeey);
      allEmployee = []
      if (parseemploeey !== null){
        
        for (let i = 0 ; i < parseemploeey.length ; i++ ){
          new employee(parseemploeey[i].fullName, parseemploeey[i].department,parseemploeey[i].level,parseemploeey[i].imageURL)
  
  
        }
      }
      renderAll();
    }


    
   form.addEventListener("submit", handelsubmit)
      function handelsubmit(event){
        event.preventDefault();
        
        let name = event.target.nameInput.value ;
        let department = event.target.Department.value;
        let level = event.target.Level.value;
        let imageURL=event.target.ImageUrl.value;
        
        let newEmployee = new employee(name,department,level,imageURL)
        form.reset();
        newEmployee.generateSalary();
        newEmployee.getId();
        newEmployee.showEmployee();
        saveEmployee();

    }
   

        employee.prototype.showEmployee =function()
        {

        let divShow = document.createElement("div");
        divShow.setAttribute('class',"Show");
        
        let imgShow = document.createElement("img");
        imgShow.setAttribute("src",this.imageURL);
        divShow.appendChild(imgShow); 
            
        let title = document.createElement("h4");
        title.textContent="Name :"+this.fullName;
        divShow.appendChild(title);
             
        let titleId = document.createElement("h4");
        titleId.textContent="ID :"+this.employeeID;
        divShow.appendChild(titleId);
             
        let titleDeb = document.createElement("h4");
        titleDeb.textContent="Department :"+this.department;
        divShow.appendChild(titleDeb);
             
        let titleLevel = document.createElement("h4");
        titleLevel.textContent="level :"+this.level;
        divShow.appendChild(titleLevel);

        let salary = document.createElement("h4");
        salary.textContent = `salary : ${this.salary}$`;
        divShow.appendChild(salary);
        
        employeeDiv.appendChild(divShow);
        }

        function renderAll(){
        for (let i = 0 ; i < allEmployee.length ; i++ ){
          allEmployee[i].getId();
          allEmployee[i].generateSalary();
          allEmployee[i].showEmployee();
        }
      }
      renderAll();
      getData();

      // sultan kanaan