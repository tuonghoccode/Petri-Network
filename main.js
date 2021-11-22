class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

function question_1() {
    let wait_form = document.querySelector(".wait-input");
    let inside_form = document.querySelector(".inside-input");
    let done_form = document.querySelector(".done-input");

    wait_form.value = wait_form.value.replace(/\D/g, "");
    inside_form.value = inside_form.value.replace(/\D/g, "");
    done_form.value = done_form.value.replace(/\D/g, "");
    if (wait_form.value.length!=0)
        document.querySelector('.wait').innerHTML = wait_form.value;
    else wait_form.value=0;
    if (inside_form.value.length!=0)
        document.querySelector('.inside').innerHTML = inside_form.value;
    else inside_form.value=0;

    if (done_form.value.length!=0)
        document.querySelector('.done').innerHTML = done_form.value;
    else done_form.value=0;

    document.querySelector(".current_1").innerHTML=`Current Marking: [${wait_form.value}.wait,${inside_form.value}.inside,${done_form.value}.done]`

    var wait_token = new Node(wait_form.value);
    var inside_token = new Node(inside_form.value);
    var done_token = new Node(done_form.value);
    var start_trans = new Node(0);
    var change_trans = new Node(0);

    wait_token.next = start_trans;
    start_trans.prev = wait_token;
    start_trans.next = inside_token;
    inside_token.prev = start_trans;
    inside_token.next = change_trans;
    change_trans.prev = inside_token;
    change_trans.next = done_token;
    done_token.prev = change_trans;

    document.querySelector('.start-1').addEventListener('click',function(){
        if (start_trans.prev.data>=1){
            start_trans.prev.data--;
            document.querySelector('.current_1').innerText=`Current Marking: [${wait_token.data}.wait,${inside_token.data}.inside,${done_token.data}.done]`
            inside_token.data++;
        document.querySelector('.start-1').classList.add("fired");
        }
        document.querySelector('.wait').innerHTML = wait_token.data;
        setTimeout(function(){
        document.querySelector('.start-1').classList.remove("fired");
            document.querySelector('.inside').innerHTML = inside_token.data;
            document.querySelector(".current_1").innerHTML=`Current Marking: [${wait_token.data}.wait,${inside_token.data}.inside,${done_token.data}.done]`
        },800)
    
    })
    document.querySelector('.change-1').addEventListener('click',function(){
        if (change_trans.prev.data>=1){
            change_trans.prev.data--;
            document.querySelector('.current_1').innerHTML=`Current Marking: [${wait_token.data}.wait,${inside_token.data}.inside,${done_token.data}.done]`
            done_token.data++;
        document.querySelector('.change-1').classList.add("fired");
        }
        document.querySelector('.inside').innerHTML = inside_token.data;
        setTimeout(function(){
        document.querySelector('.change-1').classList.remove("fired");
            document.querySelector('.done').innerHTML = done_token.data;
            document.querySelector(".current_1").innerHTML=`Current Marking: [${wait_token.data}.wait,${inside_token.data}.inside,${done_token.data}.done]`
        },800)

    })
}

function question_2() {
    let free_form = document.querySelector(".free-input");
    let docu_form = document.querySelector(".docu-input");
    let busy_form = document.querySelector(".busy-input");

    free_form.value = free_form.value.replace(/\D/g, "");
    docu_form.value = docu_form.value.replace(/\D/g, "");
    busy_form.value = busy_form.value.replace(/\D/g, "");
    
    
    if (free_form.value.length!=0)
        document.querySelector('.free').innerHTML = free_form.value;
    else free_form.value = 0
    if (docu_form.value.length!=0)
        document.querySelector('.docu').innerHTML = docu_form.value;
    else docu_form.value = 0

    if (busy_form.value.length!=0)
        document.querySelector('.busy').innerHTML = busy_form.value;
    else busy_form.value = 0
    
    let free_token = free_form.value;
    let docu_token = docu_form.value;
    let busy_token = busy_form.value;
     document.querySelector(".current_2").innerHTML=`Current Marking: [${free_token}.free,${busy_token}.busy,${docu_token}.docu]`
    document.querySelector('.end').addEventListener('click',function(){
        if (docu_token>=1){
            docu_token--;
            document.querySelector('.current_2').innerHTML=`Current Marking: [${free_token}.free,${busy_token}.busy,${docu_token}.docu]`
            free_token++;
        document.querySelector('.end').classList.add("fired");
        }

        document.querySelector('.docu').innerText = docu_token;
        setTimeout(function(){
        document.querySelector('.end').classList.remove("fired");
            document.querySelector('.free').innerHTML = free_token;
            document.querySelector(".current_2").innerHTML=`Current Marking: [${free_token}.free,${busy_token}.busy,${docu_token}.docu]`
        },800)
    })
    document.querySelector('.start-2').addEventListener('click',function(){
        if (free_token>=1){
            free_token--;
            document.querySelector('.current_2').innerHTML=`Current Marking: [${free_token}.free,${busy_token}.busy,${docu_token}.docu]`
            busy_token++;
        document.querySelector('.start-2').classList.add("fired");
        }

        document.querySelector('.free').innerText = free_token;
        setTimeout(function(){
        document.querySelector('.start-2').classList.remove("fired");
            document.querySelector('.busy').innerHTML = busy_token;
            document.querySelector(".current_2").innerHTML=`Current Marking: [${free_token}.free,${busy_token}.busy,${docu_token}.docu]`
        },800)
    })
    document.querySelector('.change').addEventListener('click',function(){
        if (busy_token>=1){
            busy_token--;
            document.querySelector('.current_2').innerHTML=`Current Marking: [${free_token}.free,${busy_token}.busy,${docu_token}.docu]`
            docu_token++;
        document.querySelector('.change').classList.add("fired");
        }

        document.querySelector('.busy').innerText = busy_token;
        setTimeout(function(){
        document.querySelector('.change').classList.remove("fired");
            document.querySelector('.docu').innerHTML = docu_token;
            document.querySelector(".current_2").innerHTML=`Current Marking: [${free_token}.free,${busy_token}.busy,${docu_token}.docu]`
        },800)
    })


}


function question_3() {
    let free_form = document.querySelector(".free-input3");
    let docu_form = document.querySelector(".docu-input3");
    let busy_form = document.querySelector(".busy-input3");
    let wait_form = document.querySelector(".wait-input3");
    let done_form = document.querySelector(".done-input3");
    let inside_form = document.querySelector(".inside-input3");

    free_form.value = free_form.value.replace(/\D/g, "");
    docu_form.value = docu_form.value.replace(/\D/g, "");
    busy_form.value = busy_form.value.replace(/\D/g, "");
    wait_form.value = wait_form.value.replace(/\D/g, "");
    done_form.value = done_form.value.replace(/\D/g, "");
    inside_form.value = inside_form.value.replace(/\D/g, "");

    if (free_form.value.length!=0)
        document.querySelector('.free-3').innerHTML = free_form.value;
    else free_form.value = 0
    
    if (docu_form.value.length!=0)
        document.querySelector('.docu-3').innerHTML = docu_form.value;
    else docu_form.value = 0

    if (busy_form.value.length!=0)
        document.querySelector('.busy-3').innerHTML = busy_form.value;
    else busy_form.value = 0
    
    if (wait_form.value.length!=0)
        document.querySelector('.wait-3').innerHTML = wait_form.value;
    else wait_form.value = 0
    
    if (done_form.value.length!=0)
        document.querySelector('.done-3').innerHTML = done_form.value;
    else done_form.value = 0
        
    if (inside_form.value.length!=0)
        document.querySelector('.inside-3').innerHTML = inside_form.value;
    else inside_form.value = 0    


    let free_token = free_form.value;
    let docu_token = docu_form.value;
    let busy_token = busy_form.value;
    let wait_token = wait_form.value;
    let done_token = done_form.value;
    let inside_token = inside_form.value;
    document.querySelector(".current_3").innerHTML=`Current Marking: [${wait_token}.wait,${free_token}.free,${inside_token}.inside,${busy_token}.busy, ${done_token}.done,${docu_token}.docu]`;
    document.querySelector('.end-3').addEventListener('click',function(){
        if (docu_token>=1){
            docu_token--;
            document.querySelector('.current_3').innerHTML=`Current Marking: [${wait_token}.wait,${free_token}.free,${inside_token}.inside,${busy_token}.busy, ${done_token}.done,${docu_token}.docu]`
            free_token++;
        document.querySelector('.end-3').classList.add("fired");
        }
        document.querySelector('.docu-3').innerText = docu_token;
        setTimeout(function(){
        document.querySelector('.end-3').classList.remove("fired");
            document.querySelector('.free-3').innerHTML = free_token;
            document.querySelector(".current_3").innerHTML=`Current Marking: [${wait_token}.wait,${free_token}.free,${inside_token}.inside,${busy_token}.busy, ${done_token}.done,${docu_token}.docu]`
        },800)
    })

    document.querySelector('.start-3').addEventListener('click',function(){
        if (free_token>=1 && wait_token>=1){
            free_token--;
            wait_token--;
            document.querySelector('.current_3').innerHTML=`Current Marking: [${wait_token}.wait,${free_token}.free,${inside_token}.inside,${busy_token}.busy, ${done_token}.done,${docu_token}.docu]`
            busy_token++;
            inside_token++;
        document.querySelector('.start-3').classList.add("fired");
        }
        document.querySelector('.free-3').innerText = free_token;
        document.querySelector('.wait-3').innerText = wait_token;
        setTimeout(function(){
        document.querySelector('.start-3').classList.remove("fired");
            document.querySelector('.busy-3').innerHTML = busy_token;
            document.querySelector('.inside-3').innerHTML = inside_token;
            document.querySelector(".current_3").innerHTML=`Current Marking: [${wait_token}.wait,${free_token}.free,${inside_token}.inside,${busy_token}.busy, ${done_token}.done,${docu_token}.docu]`
        },800)
    })
    document.querySelector('.change-3').addEventListener('click',function(){
        if (busy_token >= 1 && inside_token >= 1){
            busy_token--;
            inside_token--;
            document.querySelector('.current_3').innerHTML=`Current Marking: [${wait_token}.wait,${free_token}.free,${inside_token}.inside,${busy_token}.busy, ${done_token}.done,${docu_token}.docu]`
            done_token++;
            docu_token++;
        document.querySelector('.change-3').classList.add("fired");
        }
        document.querySelector('.busy-3').innerText = busy_token;
        document.querySelector('.inside-3').innerText = inside_token;
        setTimeout(function(){
        document.querySelector('.change-3').classList.remove("fired");
            document.querySelector('.done-3').innerHTML = done_token;
            document.querySelector('.docu-3').innerHTML = docu_token;
            document.querySelector(".current_3").innerHTML=`Current Marking: [${wait_token}.wait,${free_token}.free,${inside_token}.inside,${busy_token}.busy, ${done_token}.done,${docu_token}.docu]`
        },800)
    })
}
