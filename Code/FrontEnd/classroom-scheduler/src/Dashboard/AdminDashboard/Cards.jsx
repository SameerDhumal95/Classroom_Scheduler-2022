import React,{Component} from "react";
import Card from './CardUI';
import img1 from '../../Assets/images/student.png'  
import img2 from '../../Assets/images/Teacher.jpg'
import img3 from '../../Assets/images/s.png';
import img4 from '../../Assets/images/Assignments.jpg';

class Cards extends Component{
    render(){ 
        return(
        <div className="container-fluid d-flex justify-content-center">
        <div className="row">
            <div className="col-md-3">
                <Card imgsrc={img1} title="Students" textt2="List of Students that have registered in Classroom Schedular app" count="Total Count 117"/>
            </div>
            <div className="col-md-3">
                <Card imgsrc={img2} title="Teachers"  textt2="Number of Teachers associated with the course " count="Total Count 10"/>
            </div>
            <div className="col-md-3">
                <Card imgsrc={img3} title="Subjects"  textt2="Number of Subjects to be taught during the course " count="Total Count 8"/>
            </div>
             <div className="col-md-3">
                <Card imgsrc={img4} title="Assignments"  textt2="Number of asiignments given during the course " count="Total Count 120"/>
            </div>
        </div>
        </div>
      );
    }
    
}

export default Cards;