import { GetServerSideProps } from 'next';
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {useForm } from "react-hook-form";
import {addNote, selectNodes} from "../redux/slices/todoSlice";
const Index = () =>{
    const dispatch = useDispatch();
    const nodes=useSelector(state=>state.nodes.value);

    const {register, handleSubmit}=useForm();
    const onSubmit = (data)=>{
      dispatch(addNote(data));
    }
  console.log(nodes);
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
            <p style={{fontSize:"30px", color:'black', fontWeight:"bold"}}>TodoList</p>
            <div style={{display:'flex',flexDirection:'column',width:'1200px', alignItems:"center",  justifyContent:'center'}}>
                <div style={{display:'flex',flexDirection:'column',width:'500px', alignItems:"center",  justifyContent:'center'}}></div>
                <form onSubmit={handleSubmit(onSubmit)} method="post">
                    <input style={{height:"36px",width:"400px",fontSize:"20px"}} type="text" id="last" name="last" {...register("description")}/>
                    <button style={{height:"40px",width:"80px",fontSize:"24px",marginTop:"6px",marginLeft:"10px"}} type="submit">Add</button>
                </form>
                {nodes.map((item)=>{
                    return (<div key={item} style={{display:'flex',flexDirection:'row',width:'500px', alignItems:"center", marginTop:"10px", justifyContent:'center',border:"1px solid green"}}>
                        <div style={{height:"40px", width:"345px",marginBottom:"5px",padding:'5px'}}>
                            <p>{item.description}</p>
                        </div>
                        <button style={{height:"30px",width:"70px",fontSize:"20px",marginLeft:"5px"}} type="submit">Edit</button>
                        <button style={{height:"30px",width:"70px",fontSize:"20px",marginLeft:"5px",marginRight:"5px"}} type="submit">Delete</button>
                    </div>)
                })}



            </div>
        </div>
    )
}




export default Index;