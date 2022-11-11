import "./Filter.css"
import data from "../../MOCK_DATA"
import { useRef } from "react"
export const Filter = ({pdata,sdata})=>{
    const data1 = [...data]
    const change = useRef({hprice:0,lprice:0,date:"",location:"",type:""})

    const handleChange = (e)=>{
        change.current[e.target.name]=e.target.value
    }
    const handleClick = ()=>{
        console.log("hello")
        let resultData = [...pdata]
        let lprice = Number(change.current.lprice)
        let hprice = Number(change.current.hprice)

        console.log(resultData)
        if(change.current.location==="All" || change.current.location!=="") resultData=resultData.filter((ele)=>ele.country===change.current.location)
        if(change.current.type!=="All" || change.current.type!=="") resultData=resultData.filter((ele)=>ele.house_type==change.current.type)
        // if(change.current.lprice>0) {resultData=resultData.filter((ele)=>{

        //     var price = Number(ele.price)
        //     console.log(price>=lprice)
        //     return price>=lprice
        // })
        // console.log(resultData)
        // if(change.current.hprice) resultData=resultData.filter((ele)=>ele.price<=change.current.hprice)
        console.log(resultData)
        
        sdata(resultData)
    }
    return ( <>
        <div className="filter">
            <h1>Search property to rent</h1>
            <input type="text" placeholder="Search with Searhbar" />
        </div>

        <div className="filterprop">
            <div className="fil1">
                <div style={{background:"white"}}>Location</div>
                <div>
                <select name={"location"} id="" onChange={(e)=>handleChange(e)}>
                    <option>{"All"}</option>
                    {data.filter((value, index, self) =>
                        index === self.findIndex((t) => (
                            t.country === value.country
                        ))).map((ele)=><option value={ele.country}>{ele.country}</option>)}
                    </select>
                </div>
            </div>
            <div className="fil1">
                <div style={{background:"white"}}>When</div>
                <div>
                        <input name="date" onChange={(e)=>handleChange(e)} type="date" style={{border:"1px solid",padding:"5px"}} />
                </div>
            </div>

            <div className="fil1">
                <div style={{background:"white"}}>Price</div>
                <div style={{display:"flex"}}>
                        <select name="lprice" id="" onChange={(e)=>handleChange(e)}>
                            <option>{0}</option>
                            {data1.sort((a,b)=>a.price-b.price).filter((ele,i)=>i<Math.floor(data1.length/2)).map((ele)=><option value={ele.price}>{ele.price}</option>)}
                        </select>
                        <span style={{marginTop:"3px"}}>-</span>
                        <select name="hprice" id="" onChange={(e)=>handleChange(e)}>
                            {data1.sort((a,b)=>a.price-b.price).filter((ele,i)=>i>Math.floor(data1.length/2)).map((ele)=><option value={ele.price}>{ele.price}</option>)}
                        </select>
                </div>
            </div>

            <div className="fil1">
                <div style={{background:"white"}}>Property type</div>
                <div>
                <select name="type" id="" onChange={(e)=>handleChange(e)}>
                    {['All','cottage','bunglow','semi-detached','terrace','detached','Flat'].map((ele)=><option value={ele}>{ele}</option>)}
                    </select>
                </div>
            </div>
            <button className="search" onClick={handleClick}>Search</button>
            
        </div>
    </>
        
    )
}