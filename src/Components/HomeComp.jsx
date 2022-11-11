import "./HomeComp.css"
import { AiOutlineHeart} from "react-icons/ai";
import { IoBedSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";

import {TbChartArea} from "react-icons/tb";



export const HomeComp = ({ele})=>{
    const url = 'https://media.istockphoto.com/id/174931894/photo/traditional-house-in-a-rural-setting.jpg?s=612x612&w=0&k=20&c=5xakqj4hL6IaADHL8uUE6d7T0J_ir46-a_Q8-a4XJ_s='
    
    return (
        <div key={ele.id} className="homecss">
            <img height={"200px"} width="250px" style={{borderRadius:"5px",display:"block"}} src={url} alt="" />
            <div className="price">
                <p style={{color:"blue"}}>${ele.price}/<span style={{color:"gray"}}>month</span></p>
                <AiOutlineHeart></AiOutlineHeart>
            </div>
            <h3 style={{marginTop:"10px"}}>{ele.name}</h3>
            <p style={{marginTop:"5px",color:"gray",fontSize:"15px"}}>{ele.address}</p>

            <div className="details">
                <div style={{display:"flex"}}>
                    <IoBedSharp style={{color:"gray"}}></IoBedSharp>
                    <p style={{color:"gray",fontSize:"15px",marginLeft:"3px"}}>{ele.bed_no} beds</p>
                </div>
                <div style={{display:"flex"}}>
                    <FaBath style={{color:"gray"}}></FaBath>
                    <p style={{color:"gray",fontSize:"15px",marginLeft:"3px"}}>{ele.bathroom} Bathroom</p>
                </div>
                <div style={{display:"flex"}}>
                    <TbChartArea style={{color:"gray"}}></TbChartArea>
                    <p style={{color:"gray",fontSize:"15px",marginLeft:"3px"}}>{ele.barea}*{ele.larea}</p>
                </div>
            </div>
        </div>
    )
}