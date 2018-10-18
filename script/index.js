// Здесь мы добавляем новую строку в таблицу задач
function add_tr() {
    var new_string = document.createElement("tr");
    var col_1 = document.createElement("td");
    var col_2 = document.createElement("td");
    var col_3 = document.createElement("td");
    
    // Устанавливаем значения полей по умолчанию
    col_1.textContent = "Новая задача";
    col_1.onclick = change_task_name;
    col_1.onkeyup = check_button;
    col_1.onblur = set_task_name;
    col_1.className = "left_col";
    
    col_2.textContent = "Влияю";
    col_2.onclick = change_my_influsion;
    col_2.className = "left_col"
    
    col_3.onclick = change_comment;
    col_3.onkeyup = check_button;
    
    new_string.appendChild(col_1);
    new_string.appendChild(col_2);
    new_string.appendChild(col_3);
    
    document.getElementsByTagName("tbody")[0].appendChild(new_string);

    task_circle = document.getElementById("task_circle");
    influsion_circle = document.getElementById("influsion_circle");

    add_radius(task_circle);
}


// Эта функция срабатывает при щелчке на поле с именем задачи
function change_task_name(){
    // мы подставляем в ячейку таблицы поле ввода
    var bufer = document.createElement("input");
    bufer.placeholder = this.textContent;
    
    this.textContent = "";
    this.appendChild(bufer);
    
    bufer.focus();              // Делаем поле ввода активным
    bufer.onblur = blur_input;  // Устанавливаем событие на потерю фокуса полем ввода
    this.onclick = null;        // Очищаем событие по клику на поле
}

// Функция проверяет какая кнопка была нажата в поле ввода
function check_button(){
    if(event.keyCode == 13){ // Это клавиша ввода
        set_task_name(this);
    }
}

// потеря фокуса полем ввода
function blur_input(){      
    set_task_name(this.parentElement);
}

function set_task_name(par){
    par.textContent = par.children[0].value;
    par.onclick = change_task_name;
}

function blur_spisok(){
    set_influsion(this.parentElement);
}

function set_influsion(par){
    par.textContent = par.children[0].value;
    par.onclick = change_my_influsion;
}

function change_my_influsion(){
    var spisok = document.createElement("select");
    var punkt_1 = document.createElement("option");
    var punkt_2 = document.createElement("option");
    var punkt_3 = document.createElement("option");
    
    spisok.onblur = blur_spisok;
    
    punkt_1.value = "Влияю";
    punkt_1.textContent = "Влияю";
    
    punkt_2.value = "Влияю косвенно";
    punkt_2.textContent = "Влияю косвенно";
    
    punkt_3.value = "Не влияю";
    punkt_3.textContent = "Не влияю";
    
    spisok.appendChild(punkt_1);
    spisok.appendChild(punkt_2);
    spisok.appendChild(punkt_3);
    
    this.textContent = "";
    this.appendChild(spisok);
}

function change_comment(){
    // мы подставляем в ячейку таблицы поле ввода
    var bufer = document.createElement("input");
    bufer.placeholder = this.textContent;
    
    this.textContent = "";
    this.appendChild(bufer);
    
    bufer.focus();              // Делаем поле ввода активным
    bufer.onblur = blur_input;  // Устанавливаем событие на потерю фокуса полем ввода
    this.onclick = null;        // Очищаем событие по клику на поле
}

function add_radius(circ){
    var col_str = docment.getElementsByTagName("td");
    circ.style.width = col_str.length() * 10 + "px";
}