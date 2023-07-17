import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Task } from "@/components/Task";
import { TaskINPUT } from "@/components/TaskINPUT";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header></Header>

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskINPUT></TaskINPUT>
        {/* task */}
        <Task title="Read a book"></Task>

        {/* task */}
        <Task title="Take a shower"></Task>

        {/* task */}
        <Task title="Sleep"></Task>
      </div>

      {/* //footer section */}
      <Footer
        year="2023"
        fullName="Thanaschai Chanabua"
        studentID="650610769"
      ></Footer>
    </div>
  );
}
