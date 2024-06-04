import { useNavigate } from "react-router-dom";
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React,{useState} from 'react';
export const Firstpage = () => {
    
    const [selectedDate,setDate] = useState(null);
    const [selectedDat,setDat] = useState(null);

    const navigate = useNavigate();
    
    const goToSecondPage = () => {
        navigate('/next');
    };
    return (
        
        <form className="form">
            <h1>Create a project</h1>
            
            <div className="project">Project name</div>
            <input className="proinput" type="text" placeholder="Enter a project name here" />

            <div className="client">Client</div>
            
            <select className="form-select" name="client">
            <option value="Clients">Select a client</option>
                <option value="Client A">Client-A</option>
                <option value="Client B">Client-B</option>
                <option value="Client C">Client-C</option>
            </select>
             
             <div className="date">Date
             <Datepicker selected={selectedDate} onChange={data=>setDate(data)}/>
             </div>
             <div className="date1">
             <Datepicker selected={selectedDat} onChange={data1=>setDat(data1)}/>
             </div>
           
            <div className="notes">Notes</div>
            <textarea placeholder="Optional" style={{ width: '400px', height: '70px' }}></textarea>
            <button className="fbutton" onClick={goToSecondPage}>Next</button>
           
        </form>
        
    )
};
/*after section
<div className="dates">Dates</div>
            <input className="fdate" type="number" placeholder="25/10/2019" />-
            <input className="sdate"type="number" placeholder="28/11/2019"/>*/