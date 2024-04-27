let subContent = document.querySelector(".sub_content");
let tblCourses = document.querySelector(".tbl_list_data");
let frmAddCourses = document.querySelector(".frm_add_data");
let btnAddData = document.querySelector(".btn_add_data");
let btnListData = document.querySelector(".btn_list");

let BASE_URL = "https://wins-api-v1.liara.run/api";
let coursesArr = [];

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
}
