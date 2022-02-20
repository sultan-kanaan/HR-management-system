
let tabel = document.getElementById("table");
let countEmploeey = JSON.parse(localStorage.getItem("employee"));

function renderHeader(){
    let tr = document.createElement("tr");
    table.appendChild(tr);
    
    let thName = document.createElement("th");
    thName.textContent = "Department Name";
    tr.appendChild(thName);
    
   let  thEmp = document.createElement("th");
    thEmp.textContent = "# of Emploees";
    tr.appendChild(thEmp);
   
    let thSal = document.createElement("th");
    thSal.textContent = "Total salary";
    tr.appendChild(thSal);
    
   let  thAvg = document.createElement("th");
    thAvg.textContent = "Average salary";
    tr.appendChild(thAvg);


}
renderHeader();

function renderTabelBody (){


let emploeeyDevelopment    = 0;
let totalemploeey          = 0;
let totalSalary            = 0; 
let salaryOfD              = 0;
let salaryOfA              = 0;
let emploeeyAdministration = 0;
let emploeeyFinance        = 0;
let SalaryOfF              = 0;
let emploeeyMarketing      = 0;
let SalaryOfM              = 0;
for (let i = 0; i < countEmploeey.length; i++) {
    if (countEmploeey[i].department === "Development") {
        emploeeyDevelopment ++ ;
        totalemploeey ++ ;
        salaryOfD += countEmploeey[i].salary;
        totalSalary  += countEmploeey[i].salary;
    }
    else if (countEmploeey[i].department === "Administration") {
        emploeeyAdministration ++ ;
        totalemploeey ++ ;
        salaryOfA += countEmploeey[i].salary;
        totalSalary  += countEmploeey[i].salary;
    }
    else if (countEmploeey[i].department === "Finance") {
        emploeeyFinance ++ ;
        totalemploeey ++ ;
        SalaryOfF += countEmploeey[i].salary;
        totalSalary  += countEmploeey[i].salary;

    }
    else {
        emploeeyMarketing ++ ;
        totalemploeey ++ ;
        SalaryOfM += countEmploeey[i].salary;
        totalSalary  += countEmploeey[i].salary;

    }
}
let arr = ["Development",emploeeyDevelopment,salaryOfD,salaryOfD/emploeeyDevelopment];

    let tr = document.createElement("tr");
    tabel.appendChild(tr);
    for (let i = 0; i < arr.length; i++) {

        let td1 = document.createElement("td");
        td1.textContent = `${arr[i]}`;
        tr.appendChild(td1);

    }

    let arr2 = ["Administration",emploeeyAdministration,salaryOfA,salaryOfA/emploeeyAdministration]
    
    let tr2 = document.createElement("tr");
    tabel.appendChild(tr2);
    for (let i = 0; i < arr.length; i++) {

        let td2 = document.createElement("td");
        td2.textContent = `${arr2[i]}`;
        tr2.appendChild(td2);
    }

    let arr3 = ["Finance",emploeeyFinance,SalaryOfF,SalaryOfF/emploeeyFinance];
   
    let tr3 = document.createElement("tr");
    tabel.appendChild(tr3);
    for (let i = 0; i < arr.length; i++) {

        let td3 = document.createElement("td");
        td3.textContent = `${arr3[i]}`;
        tr3.appendChild(td3);
    }

    let arr4 = ["Marketing",emploeeyMarketing,SalaryOfM,SalaryOfM/emploeeyMarketing]

    let tr4 = document.createElement("tr");
    tabel.appendChild(tr4);

    for (let i = 0; i < arr.length; i++) {

        let td4 = document.createElement("td");
        td4.textContent = `${arr4[i]}`;
        tr4.appendChild(td4);
    }


    let arr5 = ["Total",totalemploeey,totalSalary,totalSalary/totalemploeey];

    let tr5 = document.createElement("tr");
    table.appendChild(tr5);
    for (let i = 0; i < arr.length; i++) {

        let td5 = document.createElement("td");
        td5.textContent = `${arr5[i]}`;
        tr5.appendChild(td5);
    }

}


renderTabelBody();
