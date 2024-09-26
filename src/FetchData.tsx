// import { useEffect, useState } from "react";

// interface compo{
//     name:{
//         first: string;
//         last: string;
//         title: string;
//     }
//     email: string[];
//     gender: string[];
// }

// const FetchData: React.FC=()=>{
//      const [post,setPost]=useState<compo[]>();
//      const [loading,setLoading] = useState<boolean>(true);
//      const [error,setError] = useState<string|null>(null);


//      useEffect(()=>{
//      const FetchDataa=async ()=>{
//         try{
//             const response=await fetch("https://randomuser.me/api/?results=20");
//             console.log("fetched data",response);
//             if(!response.ok){
//                 throw new Error("Failed to fetch");
//             }
//             const data=await response.json();
//             console.log("data",data);
//                 setPost(data.results)
//                 // console.log("'data.res",data.results);
//                 // console.log("Data from API",post);
            
//         }catch{
//             setError('Failed to fetch the data');
//         }finally{
//             setLoading(false)
//         }
//     };

  
//     FetchDataa();
//    },[]); 


//    //conditional rendering
//    if(loading) return <p>Loading...</p>;
//    if(error) return <p>Error.....</p>

//     return(
//         <>
//       <h2>Posts</h2>
//       <ul>
//         {
//             post?.map(post=>(
//                 <div>
//                 <li >(Title -{post.name.title} ) </li>
//                 <li >(Gender of an user -{post.gender}) </li>
//                 <li>(First name- {post.name.first } ) </li>
//                 <li>(Last name- {post.name.last}) </li>
//                 <li>(Email Address- { post.email})</li>
//                 </div>
//             ))
//             }
//       </ul>

//         </>
//     )
// }

// export default FetchData;