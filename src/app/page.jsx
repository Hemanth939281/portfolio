import  Home from "./Home/page" 

export default function Main() {

  const Intro = {
    name: "Hemanth Kumar",
    description: "a passionate Full Stack Developer currently pursuing my B.Tech 3rd year at Vishnu Institute of Technology. I love building scalable, efficient, and user-friendly web applications that solve real-world problems."
  }

  return (
    <div>
      <Home {...Intro}/>
    </div>
  );
}
