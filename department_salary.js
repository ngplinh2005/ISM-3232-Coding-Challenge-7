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
