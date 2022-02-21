import * as React from "react";
import Card from "./components/card/card";
import Layout from "./components/layout/layout";

interface Windfarm {
  sitename: string;
  windspeed: number;
  temperature: number;
  activepower: number;
  maxpower: number;
  turbineevents: {
    ST: number;
    WA: number;
    AV: number;
    NC: number;
  };
}

function App() {
  const [windfarmData, setWindfarmData] = React.useState<Windfarm[]>([]);
  console.log("windfarmData", windfarmData);

  React.useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((response) => response.json())
      .then((data) => setWindfarmData(data));
  });

  return (
    <Layout>
      <>
        {windfarmData.map((windfarm) => {
          return (
            <Card
              siteName={windfarm.sitename}
              windSpeed={windfarm.windspeed}
              temperature={windfarm.temperature}
              activePower={windfarm.activepower}
              maxPower={windfarm.maxpower}
              stEvent={windfarm.turbineevents.ST}
              avEvent={windfarm.turbineevents.AV}
              ncEvent={windfarm.turbineevents.NC}
              waEvent={windfarm.turbineevents.WA}
            />
          );
        })}
      </>
    </Layout>
  );
}

export default App;
