class Course {
    constructor(title,instructor,image){
        this.title = title;
        this.instructor = instructor;
        this.image = image; 
    }
}

class UI{
    addCouseToList(course){
        const list = document.getElementById('course-list');
        var html = `
            <tr>
                <td><img src='img/${course.image}' class='card-img-top'></td>
                <td>${course.title}</td>
                <td>${course.instructor}</td>
                <td><a href='#' class='btn btn-danger btn-sm delete'>Delete</a></td>
            </tr>
        `;
    
        list.innerHTML += html;
    }

    clearControls(){
        const title = document.getElementById('title').value = '';
        const instructor = document.getElementById('intructor').value = '';
        const image = document.getElementById('image').value = '';
    }

    deleteCourse(element){
        if(element.classList.contains('delete')){
            element.parentElement.parentElement.remove();
        };
    }

    showAlert(message,className){
        const row = document.querySelector('.row');
    
        var alert = `
            <div class='alert alert-${className}'>
                ${message}
            </div>
        `;
    
        //beforeBegin, afterBegin, beforeEnd, afterEnd
        row.insertAdjacentHTML('beforebegin',alert);
    
        setTimeout(() => {
            document.querySelector('.alert').remove();
        },3000)
    }
}

document.getElementById("new-course").addEventListener("submit",function(e){
    
    const title = document.getElementById('title').value;
    const instructor = document.getElementById('intructor').value;
    const image = document.getElementById('image').value;

    //create course object
    const course = new Course(title,instructor,image);

    //create UI
    const ui = new UI();

    if(title === '' || instructor === '' || image === ''){
        ui.showAlert('Please complete the form','warning');
    }else{
        //add course to list
        ui.addCouseToList(course);

        //clear controls
        ui.clearControls();

        ui.showAlert('The course has been added','success');
    }
    

    e.preventDefault();
});

document.getElementById('course-list').addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteCourse(e.target);
    ui.showAlert('The course has been deleted','danger');
});