import { useNavigate } from "react-router-dom";
function Home() {
  let Navigate = useNavigate();
  return (
    <div>
      <h2>thi is single page application</h2>

      <button onClick={() => Navigate("/AboutUs")}>AboutUs</button>
    </div>
  );
}
export default Home;
