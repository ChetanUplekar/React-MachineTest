import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function Task() {
    const[tasks, setTask] = useState([]);
    const [insertData, setData] = useState("");
    const url = "https://jsonplaceholder.typicode.com/posts/"
    
        fetch(url)
        .then(response=> response.json())
        .then(data =>{
            setTask(data)
        });
 

        function submit(e){
            e.target.parentNode.parentNode.remove();
        }
        const changeHandler = (e) => {
            setData(e.target.value);
          };

    const addtoList=()=>{
        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        var cell_one = row.insertCell(0);
        var cell_two = row.insertCell(1);
        var cell_three = row.insertCell(2);
        var cell_four = row.insertCell(3);
        var btn = document.createElement("input");
        btn.setAttribute("type", "button");
        btn.setAttribute("value", "Delete");
        btn.setAttribute("class", "btn btn-danger");
        btn.addEventListener("click" , function deleteRow(e) {
        e.target.parentNode.parentNode.remove();
    });
        cell_one.innerHTML = table.rows.length-1;
        cell_two.innerHTML = insertData;
        cell_three.innerHTML = "False";
        cell_four.appendChild(btn)
    }
    return (
        <div className="container text-left mt-5">
            <h3 className="text-center mt-4 mb-4">Tasks</h3>
            <div className="text-center">
            <input className="form-control" onChange={changeHandler} type="text" placeholder="Enter the task"></input>
            <button className="btn btn-primary my-4" onClick={addtoList}>Add task</button>
            </div>
            {/* {tasks.map(post=>( <p>{post.id} {post.title}</p>))}  */}
            <table id="myTable" className="table table-bordered">
                <tr>
                    <th>Sr.No</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                {tasks.map(post=>(
                    <tr>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>False</td>
                        <td><button type="button" className="btn btn-danger" onClick={submit}>Delete</button></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}




