let allEmployee = [] ;

function employee(employeeID,fullName,department,level,imageURL){
   
    this.employeeID = employeeID ;
    this.fullName   = fullName   ;
    this.department = department ;
    this.level      = level      ;
    this.imageURL   = imageURL   ; 
    allEmployee.push(this);

}
    
employee.prototype.salary = function(start , end )
{
        let salry = Math.floor( (Math.random() *( end - start + 1 )) + start );
        salry*= 0.75;
    
        return salry ;
    
    }
    employee.prototype.render = function()
    {
        document.write(`<h1>${this.fullName}</h1>`);
        document.write(`<h1>${this.salary(1000,1500)}</h1>`)
    }
    let ghazi = new employee("1000","Ghazi Samer","administration","senior");
    let lana  = new employee("1001","Lana Ali ","finance","senior") ;
    let tamara = new employee("1002","Tamara Ayoup","marketing","senior");
    let safi = new employee("1003","Safi Waled","administration","mid-senior");
    let omar = new employee("1004","Omar Zaid","development","senior");
    let rana = new employee("1005","Rana Saleh","development","junior");
    let hadi = new employee("1006","Hadi Ahmad","finance","mid-senior");
    
    for (let i =0; i < allEmployee.length ; i++ ){
        allEmployee[i].render();

    }



