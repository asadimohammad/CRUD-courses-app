let subContent = document.querySelector(".sub_content");
let tblCourses = document.querySelector(".tbl_list_data");
let frmAddCourses = document.querySelector(".frm_add_data");
let btnAddData = document.querySelector(".btn_add_data");
let btnListData = document.querySelector(".btn_list");

let BASE_URL = "https://wins-api-v1.liara.run/api";
let coursesArr = [];
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWUxZmVmMDg2YjczMTJjN2M0NDY1YTUiLCJlbWFpbCI6ImFzYWRpQGdtYWlsLmNvbSIsImlhdCI6MTcxNDIxODEzMSwiZXhwIjoxNzE0MjIxNzMxfQ.i-0jn1lq_mkK93Pln1b3y-pMhk3lY1YkY1isDVboTNI'

eventListeners();
function eventListeners() {
  btnListData.addEventListener("click", showListData);
  btnAddData.addEventListener("click", addData);
}

function showListData() {
    tblCourses.querySelector("table tbody").innerHTML=''
  fetch(BASE_URL + "/courses")
    .then((res) => res.json())
    .then((res) => {
      coursesArr = res.courses;
      coursesArr.map((course) => {
        let tblTem = `
        <tr id=${course.id}>
            <td>${course.title}</td>
            <td>${course.category}</td>
            <td>${course.level}</td>
            <td>${course.duration}</td>
            <td>${course.price}</td>
            <td class="actions">
                <button class="edit_user">ویرایش</button>
                <button class="delete_user">حذف</button>
            </td>
        </tr>
        `;
        tblCourses.style.display = 'block'
        frmAddCourses.style.display = 'none'
        tblCourses.querySelector("table tbody").innerHTML += tblTem;
      });
    });
}

function addData() {
    tblCourses.style.display = 'none'
    frmAddCourses.style.display = 'block'
    let saveBtn = frmAddCourses.querySelector('.btn-save-data')
    saveBtn.addEventListener('click' , (e) => {
        e.preventDefault()
        let newCourse = {
            title: frmAddCourses.querySelector('.title').value,
            category: frmAddCourses.querySelector('.category').value,
            level: frmAddCourses.querySelector('.level').value,
            description: frmAddCourses.querySelector('.desc').value,
            chapter: frmAddCourses.querySelector('.chapter').value,
            duration: frmAddCourses.querySelector('.duration').value,
            price: frmAddCourses.querySelector('.price').value,
            coverImg: frmAddCourses.querySelector('.img').value,
            createdAt: frmAddCourses.querySelector('.date').value,
        }
        console.log(newCourse);

        fetch(BASE_URL + '/courses' , {
            method: "POST",
            body: JSON.stringify(newCourse),
            headers:{
                'Authorization' : `Bearer ${token}`
            }
        })
    })
}
