import img2 from "../assets/Maskgroup.png";

const Dashboard = () => {
  let color = {
    color: 'white',
    fontWeight: 700
  }
  return (
    <div className="dash">
      <div className="dash-inner">
        <h1 style={color}>
          GOOD MORNING <br /> Musa
        </h1>
        <img className="img2" src={img2} alt="" />
      </div>
      <div className="appointment">
        <p>NO APPOINMENTS YET</p>
      </div>
    </div>
  );
};

export default Dashboard;
