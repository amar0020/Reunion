import { useState } from 'react'
import data from '../../MOCK_DATA'
import { Filter } from './Filter'
import "./Home.css"
import { HomeComp } from './HomeComp'
export const Home = ()=>{
    const [data1,setData] =useState(data)
    return ( <div className='home'>
            <Filter pdata={data} sdata={setData} />
            <div className='allData' style={{marginTop:"10px"}}>
                {data1.map((ele)=><HomeComp ele={ele}></HomeComp>)}
            </div>
            
        </div>
    )
}