import { useNavigate } from "react-router-dom";

function AboutUs() {
  let Navigate = useNavigate();
  return (
    <div>
      <address>
        <h3>janardhan</h3>
        <div>vr palli</div>
        <div>tdp</div>
      </address>
      <button onClick={() => Navigate(-1)}>go pack previous page</button>
    </div>
  );
}
export default AboutUs;
