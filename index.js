console.log("Hello World");

// interactive quiz
function loadQuiz(){
    const questions=[
        {question:"who was the president of Nigeria in 2019 ?", answer:"Mohammed Buhari"},
        {question:"what is a black man called in the states ?", answer:"nigga"},
        {question:"how many centimeters are there in a metre ?",answer:"100"},
        {question:"how many days makes february in a leap year ?", answer:"29"},
        {question:"at what degree centigrade/celsius does water boil ?", answer:"100"},
        {question:"how many days make a year ?", answer:"365"},
    ];
    let name=prompt("what is your name");
    let score=0;
    for (i=0;i<questions.length;i++) {
        let userAns=prompt(questions[i].question);
        if((userAns.trim()==questions[i].answer) )
            (score+=1, alert("correct"))
        else if (userAns.trim()!==questions[i].question)
            (alert("incorrect answer") );
            

        
    };
    
    
    let score1=(score/questions.length) * 100;
    alert(`${name} your scored ${score1}% in this quiz`);


    return 0

}

// Number Guessing Game
function clearOutput2() {
    result = document.getElementById("GuessingGameOutput");
    if (result.innerHTML === "Attempts: ") {
        alert("The guessing game output is already clear.");
        return;
    } else {
        document.getElementById("GuessingGameOutput").innerHTML = "Attempts: ";
    }
}
function loadGuess(){
    console.log("Starting the guessing game...");
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Random number is: " + randomNumber); 
    let attempts = 0;

    while (true) {
        input = prompt("Guess a number between 1 and 10:");
        input = Number(input);
        if (input === null) {
            alert("Game Cancelled");
            return;
        }
        if (typeof input !== 'number' || input < 1 || input > 10) {
            alert("Please enter a valid number between 1 and 10.");
            continue;
        }
        if (input === randomNumber) {
            attempts++;
            alert("Congratulations! You guessed the number correctly");
            break;
        }
        if (input < randomNumber) {
            alert("Too low! Try again.");
        }
        if (input > randomNumber) {
            alert("Too high! Try again.");
        }
        if (input !== randomNumber) {
            attempts++;
        }
    }

    result = document.getElementById("GuessingGameOutput");
    result.innerHTML = "Attempts: " + attempts + "<br>Random Number: " + randomNumber;
}

// Excercise three Solution
let todo = []; 

// to-do list
  'use strict'

    let my_list=[];
    let current_task,task_no, task_index,attempts,max_attempts;
    
    const create_list= () => {
        max_attempts=100;
        for (attempts=0;attempts<max_attempts;attempts++){
            current_task=prompt("what do u want to add to your list");
            if (!current_task) break;
            my_list.push(current_task);
            
        };
        // console.log(my_list);
    };

    const add_list=()=>{
        max_attempts=10;
        for (attempts=0;attempts<max_attempts;attempts++){
        current_task=prompt("what do u want to add to your list");
        task_no= +prompt("what is the position of the task you are adding");
            // alert(typeof(task_no));
            task_index= task_no - 1;
            if (!task_no) break;
            
            my_list.splice(task_index,1,current_task);
        }
        console.log(my_list)
    }
    
    // alert(`${typeof(my_list)}`)
    const del_list= () =>{
            task_no= +prompt("what is the position of the task you want to delete");
            // alert(typeof(task_no))
            task_index= task_no - 1;
            my_list.splice(task_index,1);
            view_list();
    }


    const view_list=()=>{
        
            alert(`this is your list:${my_list}`);
            console.log(my_list);
    }
    const main=()=>{
        let choice;
        do{
            choice=prompt("what do you want to do? \n1. create tasks\n2. delete task\n3. view list\n4. add task\n5. exit");
            switch (choice) {
                case "1":
                    create_list();
                    break;
                case "2":
                    del_list();
                    break;
                case "3":
                    view_list();
                    break;
                case "4":
                    add_list();
                    break;
                case "5":
                    alert("Goodbye");
                    break;
                default:
                    alert("invalid choice.please choose 1, 2, 3, 4 or 5");

            }
        } while(choice!="5");
    };
    // main();
addTask = () => {
    let task = prompt("Enter a task:").toLocaleLowerCase();
    if (task === null) {
        alert("Task input cancelled.");
        return;
    }
    if (task.trim() === "") {
        alert("Please enter a task.");
        return;
    }
    if (todo.includes(task)) {
        alert("This task already exists in your todo list.");
        return;
    }

    todo.push(task);
    console.log("Task added: " + task);
    console.log("Your Todolist items: " + todo.join(", "));
}

deleteTask = () =>{
    let tasktodelete = prompt("Enter the task you want to delete:").toLocaleLowerCase();
    if (tasktodelete === null) {
        alert("Task deletion cancelled.");
        return;
    }
    if (tasktodelete.trim() === "") {
        alert("Please enter a task to delete.");
        return;
    }
    if (!todo.includes(tasktodelete)) {
        alert("This task does not exist in your todo list.");
        return;
    }
    const indexofitem = todo.indexOf(tasktodelete);
    todo.splice(indexofitem, 1);
    alert(`Task "${tasktodelete}" removed.`);
    console.log("Updated Todolist:", todo);
}

displayTasks = () => {
    if (todo.length === 0) {
        alert("Your todo list is empty.");
        console.log("Todo list is empty.");
        return;
    }
    let taskList = "Your Todo List:\n";
    todo.forEach((task, index) => {
        taskList += `${index + 1}. ${task}\n`;
    });
    alert(taskList);
    console.log("Your Todo list:", todo.toString());
}

ClearTodo = () =>{
    if (todo.length === 0) {
        console.log("Todo list is empty.");
        alert("Your todo list is already empty.");
        return;
    }
    todo.length = 0; 
    alert("Your todo list has been cleared.");
    console.log("Todo list cleared.");
}

//Excercise 4 Solution
function startTip(){
    bill = prompt("Enter your bill amount");
    if (isNaN(bill) || bill.trim() === "") {
        console.log("Enter a valid number")
        alert("Enter a valid number")
        return
    }
    tippercentage = prompt("Enter Tip Percentage (0 - 100%)")
    if (isNaN(tippercentage) || tippercentage.trim() === "") {
        console.log("Enter a valid number")
        alert("Enter a valid number")
        return
    }
    
    newbill = Number(bill);
    tip = Number(tippercentage);
    if (tip > 100){
        alert("Tip value Exceeded");
        return
    }

    tip_amount = (tip * 0.01) * newbill;
    total_amount = newbill + tip_amount;
    alert("Tip amount is: " + tip_amount + "\n" + "Your Total amount is: " + total_amount);
}

// Excercise 5 solution
function loginSimulation(){
    credentials = [
        user1 = {
            username: "user1",
            password: "password1"
        },
        user2 = {
            username: "user2",
            password: "password2"
        },
        user3 = {
            username: "user3",
            password: "password3"
        },
        user4 = {
            username: "user4",
            password: "password4"
        }
    ]

    console.log("Login info" + credentials);
        
    username = prompt("Enter your username:");
    password = prompt("Enter your password:");

    if (username === null || password === null) {
        alert("Login cancelled.");
        return;
    }

    if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
        return;
    }

    let userFound = false;
    for (let i = 0; i < credentials.length; i++){
        if (credentials[i].username === username && credentials[i].password === password) {
            userFound = true;
            alert("Access Granted! Welcome " + username + "!");
            console.log("Access Granted for user: " + username);
            break;
        }
        else{
            userFound = false;
            console.log("Access Granted for user: " + username);
            alert("Login failed! Incorrect username or password.");
            break;
        }
    }
}

//Excercise 6 Solutions
function startBudgetTracker(){
    income = prompt("Enter your monthly income:");
    if (isNaN(income) || income.trim() === "") {
        alert("Please enter a valid income amount.");
        return;
    }

    items_number = prompt("How many items do you want to add to your budget tracker?");
    if (isNaN(items_number) || items_number <= 0) {
        alert("Please enter a valid number of items.");
        return;
    }

    for (let i=0; i < items_number; i++){
        items = prompt(`Enter your Item ${i+1} Price: `);
        if (isNaN(items) || items.trim() === "") {
            alert("Please enter a valid item price.");
            i--; 
            continue;
        }
        if (i === 0) {
            total = Number(items);
        } else {
            total += Number(items);
        }   
    }
    

