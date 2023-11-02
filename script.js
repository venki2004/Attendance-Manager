document.querySelector('.addCourse').addEventListener('click',addCourse);
function addCourse() {
     //input value
     var textBox=document.querySelector('input');
     var name=textBox.value;
     if(!name) { alert('Enter a course name!!!');
         return;
    };
    //container creation
     var newCourse=document.createElement('div');
    newCourse.style.height='300px';
    newCourse.style.width='1000px';
    document.body.appendChild(newCourse);
    //course name
    var courseName=document.createElement('h2');
    courseName.innerHTML=name;
    newCourse.appendChild(courseName);
    //no of classes attended
    var attended=document.createElement('h4');
    attended.innerHTML='No of classes Attended : <span class="attended">0</span>';
    newCourse.appendChild(attended);
    //no of classes missed
    var missed=document.createElement('h4');
    missed.innerHTML='No of classes Missed : <span class="missed">0</span>';
    newCourse.appendChild(missed);
    //Attendance
    var attendance=document.createElement('h4');
    attendance.innerHTML='Attendance : <span class="attendance">0</span>';
    newCourse.appendChild(attendance);
    //plus button
    var plus=document.createElement('button');
    plus.innerHTML='+';
    newCourse.appendChild(plus);
    //minus button
    var minus=document.createElement('button');
    minus.innerHTML='-';
    newCourse.appendChild(minus);
    //addEventListenertoplus
    plus.addEventListener('click',(e)=>{
        var course=e.target.parentElement;
        var a=Number(course.querySelector('.attended').innerHTML);
        var b=Number(course.querySelector('.missed').innerHTML);
        course.querySelector('.attended').innerHTML=String(a+1);
        var percent=Number(course.querySelector('.attendance').innerHTML);
        percent=((a+1)*100)/(a+b+1);
        course.querySelector('.attendance').innerHTML=String(percent);

    })
    //addEventListenertominus
    minus.addEventListener('click',(e)=>{
        var course=e.target.parentElement;
        var a=Number(course.querySelector('.missed').innerHTML);
        course.querySelector('.missed').innerHTML=String(a+1);
        var b=Number(course.querySelector('.attended').innerHTML);
        var percent=Number(course.querySelector('.attendance').innerHTML);
        if(b===0) percent=0;
        else percent=(b*100)/(a+b+1);
        course.querySelector('.attendance').innerHTML=String(percent);

    })

}


