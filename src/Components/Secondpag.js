import { useNavigate } from "react-router-dom";
export const Secondpag = () => {
    const navigate = useNavigate();
    
    const goToThirdPage = () => {
        navigate('/third');
    };
    
    const navig = useNavigate();
    const backPage = () => {
        navig('/');
    };
    
    return (
        <div className="secondPage">
            <h1>Project type</h1>
            <div>Dont panic - You can also customise this type in settings</div>

            <button className="time">Time & Material</button>
            <button className="fix">Fixed Free</button>
            <button className="bill">Non Billable</button>
            <h3>Hourly</h3>
            <div className="hour">We need hourly rates to track your project's billable amount</div>
            <select className="form-select2" name="client">
            <option value="Hour">Project hourly rate</option>
                <option value="rate1">Rate 1</option>
                <option value="rate2">Rate 2</option>
                <option value="rate3">Rate 3</option>
            </select>

            <h3>Budget</h3>
            <div className="bud">We need hourly rates to track your project's billable amount</div>
            <select className="form-select3" name="client">
            <option value="Hour">Hour's per person</option>
                <option value="hour1">Hour 1</option>
                <option value="hour2">Hour 2</option>
                <option value="hour3">Hour 3</option>
            </select>

           <div> <input className="check1"type="checkbox" name="budget"/>Budget reacts every month</div> 
           <div>
            <input className="check2" type="checkbox" name="budget"/>Send email alerts if project exceeds
           <input type="number" name="rate"/>% of Budget</div>

           <span className="firstButton" onClick={backPage}> &lt;Back</span>            
            <button className="secondButton" onClick={goToThirdPage}>Next</button>
          

        </div>
    )
}