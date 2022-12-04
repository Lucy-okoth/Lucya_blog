import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
   const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'lucya', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'lucya', id: 3 }

   ]);

   const [name, setName] = useState("Lucya")


   const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
   }

   useEffect (() =>{
    console.log('use-effect-ran');
    //  console.log(name);
   }, []);
    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
           <BlogList blogs={blogs.filter((blog) => blog.author === "lucya")} title="lucya's Blogs" />
           <button onClick={() => setName("EJ")}>Change Name</button>
           <p>{ name }</p>
        </div>
     );
}
 
export default Home;