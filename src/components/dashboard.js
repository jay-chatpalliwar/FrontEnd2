import {useLocation} from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import Calendar from 'react-calendar';
import {useState} from 'react';
export default function Dashboard() {
    const location = useLocation();
    // console.log(location)
    const [currclass,setCurrclass] = useState("Sem 5 CSE")
    const data = useSelector((state) => state.name.name);
    console.log("name is ",data);
    const name = data.payload || "Jay Chatpalliwar"
    return (
        <div className="dashboard flex flex-col h-[590px] w-screen mx-5 my-8 overflow-hidden">

            <div className='flex flex-row justify-between font-bold items-center mr-4'>
            <div className='text-2xl text-slate-800'>
            Welcome, {name}
            </div>
            <div>
                {currclass}
            </div>
            </div>
            <div
             className='w-screen h-screen flex flex-row justify-center items-center decoration-transparent'
            >
            <div>
            <div>
                <span>Overview</span>
                <div>
                    <div>
                        Continue to upgrade your knowledge and experience
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
                
            </div>
            {/* <Calendar className="react-calendar"></Calendar> */}
            </div>


            <div>
        charts
            </div>

            <div>
        rest of the Dashboard
            </div>



        </div>
    )
}