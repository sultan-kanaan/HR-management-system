let allEmployee = [] ;
let form        = document.getElementById("form")
let employeeDiv = document.getElementById("employeeDiv")
let add         =  document.getElementById("submit")

function employee(employeeID,fullName,department,level,imageURL){
   
    this.employeeID = employeeID ;
    this.fullName   = fullName   ;
    this.department = department ;
    this.level      = level      ;
    this.imageURL   = `./assest/${this.fullName}.jpg`

    allEmployee.push(this);
    // this.showEmployee();
    this.render();


}
employee.prototype.gitId = function(){
this.employeeID+=1;
}
    
employee.prototype.salary = function(start , end )
{
        let salry = Math.floor( (Math.random() *( end - start + 1 )) + start );
        salry*= 0.75;
    
        return salry ;
    
    }
    employee.prototype.render = function()
    {
        document.write(this.imageURL)
       document.write(`ID: ${this.employeeID} Name: ${this.fullName}<br>`)
       document.write(`Department: ${this.department}-Level:${this.level}<br>`);
      document.write(`Salary:${this.salary(1000,1500)}$<br><br>`)
      this.showEmployee();


    }
    let ghazi  = new employee("1000","Ghazi Samer","administration","senior");
    let lana   = new employee("1001","Lana Ali ","finance","senior") ;
    let tamara = new employee("1002","Tamara Ayoup","marketing","senior");
    let safi   = new employee("1003","Safi Waled","administration","mid-senior");
    let omar   = new employee("1004","Omar Zaid","development","senior");
    let rana   = new employee("1005","Rana Saleh","development","junior");
    let hadi   = new employee("1006","Hadi Ahmad","finance","mid-senior");
    
    
    
    form.addEventListener("submit", handelsubmit)
      function handelsubmit(event){
        event.preventDefault();
        
        let name = event.target.nameInput.value ;
        let department = event.target.Department.value;
        let level = event.target.Level.value;
        let imageURL=event.target.ImageUrl.value;
        
        let newEmployee = new employee(name,department,level,imageURL)
        //  newEmployee.gitId();
        //  renderAll();
         form.reset();
    }
    // function renderAll(){
    //     employeeDiv.innerHTML = "";
    //     for (let i =0; i < allEmployee.length ; i++ ){
    //         allEmployee[i].render();
    //     }
    //     renderAll();

        employee.prototype.showEmployee =function()
        {

        let divShow = document.createElement("div");
        divShow.id="Show";
        
        let imgShow = document.createElement("img");
        imgShow.setAttribute("src",this.imageURL);
        divShow.appendChild(imgShow); 
            
        let title = document.createElement("h3");
        title.textContent="Name :"+this.fullName;
        divShow.appendChild(title);
             
        let titleId = document.createElement("h3");
        titleId.textContent="ID :"+this.employeeID;
        divShow.appendChild(titleId);
             
        let titleDeb = document.createElement("h3");
        titleDeb.textContent="Department :"+this.department;
        divShow.appendChild(titleDeb);
             
        let titleLevel=document.createElement("h3");
        titleLevel.textContent="level :"+this.level;
        divShow.appendChild(titleLevel);
        employeeDiv.appendChild(divShow);
        }