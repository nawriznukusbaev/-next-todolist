import {useRouter} from "next/router";
import { GetServerSideProps } from 'next';


const UserPage = ({user,posts}) =>{
    console.log(posts);
    return (
      <div style={{display:'flex', justifyContent:"center", alignItems:"center",height:"100vh", flexDirection:'column'}}>
          <p style={{fontSize:"30px"}}>{user.name}</p>
          <div style={{display:"flex",flexDirection:'column',justifyContent:"left", width:"1000px",padding:'25px', border:'solid 0.1px black', backgroundColor:"orange"}}>
                <p style={{fontSize:'25px'}}>Phone: {user.phone}</p>
                <p style={{fontSize:'25px'}}>Address: {user.address.city},{user.address.street_address}</p>
          </div>
          <p style={{fontSize:"30px"}}>Posts</p>
          <div style={{display:"flex",flexDirection:'column',justifyContent:"left", width:"1000px",padding:'25px', border:'solid 0.1px black', backgroundColor:'deepskyblue '}}>
              <ul style={{listStyle:'none'}}>
                  {
                      posts.map((post)=>{
                          return <li style={{height:'30px', color:"white",fontSize:"25px",border:"solid 0.1px black", padding:'5px'}}>{post.title}</li>
                      })
                  }
              </ul>
          </div>

      </div>
    )


}
export async function getServerSideProps({query}) {
    console.log(query);
    const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${query.user_id}`)
    const dataUser = await resUser.json();
    const resPosts = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const dataPosts = await resPosts.json();

    return { props:
            { user:dataUser,
              posts:dataPosts.filter((data)=>data.userId===+query.user_id)
            }
    }
}
export default UserPage;