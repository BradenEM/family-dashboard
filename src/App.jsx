import "./App.css";
import Calendars from "./Calendars";

function App() {
  return (
    <>
      <div className="header">
        
      </div>
      <div>
        <div className="calendar">
          <Calendars />
        </div>
        <div>
          <div
            className="tomorrow"
            data-location-id="310011"
            data-language="EN"
            data-unit-system="IMPERIAL"
            data-skin="dark"
            data-widget-type="upcoming"
            // style={{ paddingbottom: "22px", position: "relative" }}
          >
            <a
              href="https://www.tomorrow.io/weather-api/"
              rel="nofollow noopener noreferrer"
              target="_blank"
              //       style="
              //   position: absolute;
              //   bottom: 0;
              //   transform: translateX(-50%);
              //   left: 50%;
              // "
            >
              <img
                alt="Powered by the Tomorrow.io Weather API"
                src="https://weather-website-client.tomorrow.io/img/powered-by.svg"
                width="250"
                height="18"
              />
            </a>
          </div>
        </div>
        <div className="center-content">
          <div className="verse-w-border">
            <h1 className="text-white" style={{padding: "5px"}}>
              A cheerful heart is good medicine, but a crushed spirit dries up the bones.
            </h1>
		  <h3 className="text-white">Proverbs 17:22</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
