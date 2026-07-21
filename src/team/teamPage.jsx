import { f1Teams } from "../data/f1Data";
import "./team.css";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function TeamPage() {
  const { teamId } = useParams();
  const team = f1Teams.find((t) => t.id === teamId);
  if (!team) {
    return <p>Equipe não encontrada</p>;
  }

  const driversText = team.drivers.map((d) => d.driverName).join(" e ");

  return (
    <div id="body-team" style={{ "--teamColor": team.color }}>
      <Header />

      <main id="principal-team">
        <section id="team-detail">
          <div id="title">
            <h1> {team.teamName}</h1>
            <h3>{driversText}</h3>
          </div>
          <img id="car" src={team.carImage} />
        </section>
        <section id="driver-detail">
          {team.drivers.map((driver) => (
            <div key={driver.number}>
              <div id="d-cont">
                <div id="d-infos">
                  <h2>
                    {driver.driverName.split(" ")[0]}
                    <br />
                    {driver.driverName.split(" ")[1]}
                  </h2>
                  <div>
                    <p>Country </p>
                    <p className="d-info">{driver.driverCountry}</p>
                  </div>
                  <div>
                    <p>Born </p>
                    <p className="d-info">{driver.birthDate}</p>
                  </div>
                </div>

                <div id="d-center">
                  <h1 id="d-number">{driver.number}</h1>
                  <div id="d-img-cont">
                    <img id="d-image" src={driver.driverImage} />
                  </div>
                </div>
              </div>

              <div id="d-stats">
                <div>
                  <p>Podiums</p>
                  <h2>{driver.podiums}</h2>
                </div>
                <div>
                  <p>Victories</p>
                  <h2>{driver.raceWins}</h2>
                </div>
                <div>
                  <p>Poles Position</p>
                  <h2>{driver.polePositions}</h2>
                </div>
                <div>
                  <p>Championship</p>
                  <h2>{driver.championshipWins}</h2>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
