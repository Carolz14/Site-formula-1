import { f1Teams } from "../data/f1Data";
import { useState } from "react";
import "./home.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function HomePage() {
  const [openCard, setOpenCard] = useState(null);

  return (
    <>
      <div id="div-body">
        <Header />

        <main id="principal-home">
          <section id="principal-texto">
            <div>
              <h1>What is Formula 1?</h1>
              <p>
                Launched in 1950, Formula 1 is a motorsport category in which 10
                teams and 20 drivers compete to win the Constructors' and
                Drivers' championships, respectively. Today, an annual season
                visits more than 20 locations around the world, racing on
                various existing circuits.
              </p>
            </div>
          </section>

          <section id="equipes">
            <h1 id="titulo-equipe">Teams</h1>

            <div className="wrapper">
              <div className="container">
                {f1Teams.map((team) => (
                  <div
                    key={team.id}
                    className={`card ${openCard === team.id ? "open" : ""}`}
                    style={{ backgroundImage: `url(${team.logoImage})` }}
                    onClick={() =>
                      setOpenCard(openCard === team.id ? null : team.id)
                    }
                  />
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
