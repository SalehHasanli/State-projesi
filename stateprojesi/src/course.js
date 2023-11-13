import angular from "./images/angular.jpg";
import bootstrap5 from "./images/bootstrap5.png";
import ccsharp from "./images/ccsharp.png";
import kompleweb from "./images/kompleweb.jpg";

const courses = {
  angular,
  bootstrap5,
  ccsharp,
  kompleweb,
};

function Course({ coursename, index }) {
  console.log(coursename);
  return (
    <div className="imgcontanier">
      <img className="images" src={courses[coursename]} />
    </div>
  );
}

export default Course;
