let coursesWrapper = document.querySelector(".courses_list");

let BASE_URL = "https://wins-api-v1.liara.run/api";
let coursesArr = [];

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", getAllCourses);
}

function getAllCourses() {
  fetch(BASE_URL + "/courses")
    .then((res) => res.json())
    .then((res) => {
      coursesArr = res.courses;
      coursesArr.map((course) => {
        let courseTeme = `
            <div class="course d-flex flex-col jc-sb">
            <img class="course_cover" src="./images/c1.jpeg" alt="" />
            <div class="content px-2 py-3 d-flex flex-col gap-4">
              <div class="title">${course.title}</div>
              <div class="category">
                <span>دسته بندی: </span>
                <span>${course.category}</span>
              </div>
              <div class="details d-flex jc-sb">
                <div class="duration">
                  <span>مدت دوره: </span>
                  <span>${course.duration} ساعت</span>
                </div>
                <div class="price">
                  <span>هزینه دوره: </span>
                  <span>${course.price} هزار تومان</span>
                </div>
              </div>
            </div>
            <button>جزئیات دوره</button>
          </div>
            `;

            coursesWrapper.innerHTML += courseTeme
      });
    });
}
