import axios from "axios";
import { Await } from "react-router-dom";

const api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
})

// first we used this for api calling in the old method 

// export const fetchPosts= async()=>{
//     return api.get("/posts")
//    
// }


// //this we used for new Method   
// export const fetchPosts= async()=>{
//     const res =await api.get("/posts")
//     return res.status===200 ? res.data: []
   
    
// }


// to new fetch the data and for the pagination
export const fetchPosts = async (pageNumber) => {
  try {
    const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};



// to fetch the indv. data

export const fetchInvPost = async (id) => {
    try {
      const res = await api.get(`/posts/${id}`);
      return res.status === 200 ? res.data : [];
    } catch (error) {
      console.log(error);
    }
  };



  
/// to delete the post
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

/// to update the post
export const updatePost = (id) => {
  return api.patch(`/posts/${id}`, { title: "I have updated" });
};

// infintie scrolling

export const fetchUsers = async ({ pageParam }) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users?per_page=10&page=${pageParam}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};