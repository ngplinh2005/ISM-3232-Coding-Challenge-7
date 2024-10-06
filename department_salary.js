// Task 1: Create a Department Structure

const company = {
    departments: [
        {
            departmentName: "Sales",
            employees: [
                {
                    name: "Alice Johnson",
                    salary: 65000,
                    subordinates: [
                        {
                            name: "Bob Smith",
                            salary: 50000,
                            subordinates: []
                        },
                        {
                            name: "Carol Lee",
                            salary: 52000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: "David Wilson",
                    salary: 70000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: "Engineering",
            employees: [
                {
                    name: "Eve Davis",
                    salary: 85000,
                    subordinates: [
                        {
                            name: "Frank Brown",
                            salary: 60000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: "Grace Thompson",
                    salary: 75000,
                    subordinates: [
                        {
                            name: "Heidi White",
                            salary: 58000,
                            subordinates: []
                        },
                        {
                            name: "Ivy Green",
                            salary: 62000,
                            subordinates: []
                        }
                    ]
                }
            ]
        },
        {
            departmentName: "Marketing",
            employees: [
                {
                    name: "Jack Black",
                    salary: 70000,
                    subordinates: []
                },
                {
                    name: "Kathy Adams",
                    salary: 72000,
                    subordinates: [
                        {
                            name: "Liam Taylor",
                            salary: 48000,
                            subordinates: []
                        }
                    ]
                }
            ]
        }
    ]
}

// Task 2: Create a Recursive Function to Calculate Total Salary for a Department

// Recursive function to calculate total salary for a department
function calculateDepartmentSalary(department) {
    let totalSalary = 0
    
    for (let employee of department.employees) {
        totalSalary += employee.salary
        
        for (let subordinate of employee.subordinates) {
            totalSalary += calculateEmployeeSalary(subordinate)
        }
    }

    return totalSalary
}
// Recursive function to calculate salary for subordinates
function calculateEmployeeSalary(employee) {
    let totalSalary = employee.salary
    
    for (let subordinate of employee.subordinates) {
        totalSalary += calculateEmployeeSalary(subordinate)
    }

    return totalSalary
}

for (let department of company.departments) {
    const departmentTotalSalary = calculateDepartmentSalary(department)
    console.log(`Total Salary for the ${department.departmentName} department: $${departmentTotalSalary}`)
}

// Task 3: Create a Function to Calculate the Total Salary for All Departments

function calculateCompanySalary(company) {
    let totalSalary = 0
    
    for (let department of company.departments) {
        totalSalary += calculateDepartmentSalary(department)
    }

    return totalSalary
}

const totalCompanySalary = calculateCompanySalary(company)
console.log(`Total Salary for the entire company: $${totalCompanySalary}`)
