import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/8.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
       <p>Discover Unique Destinations</p>
       <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to Jaipur,Rajasthan"
          text="Jaipur, the 'Pink City' of Rajasthan, India, captivates with its vibrant heritage and majestic architecture. The City Palace, Hawa Mahal, and Amer Fort showcase the grandeur of Rajput history. Bustling markets, like Johari Bazaar, offer a kaleidoscope of colors and traditional crafts, making Jaipur a captivating blend of history and culture."
          />
          <TripData
          image={Trip2}
          heading="Trip to Varanasi,Uttar Pradesh"
          text="Varanasi, one of the oldest continuously inhabited cities, holds profound spiritual significance on the banks of the Ganges River. The ghats, like Dashashwamedh and Manikarnika, host ancient rituals. Temples, narrow alleys, and the spiritual aura make Varanasi a timeless destination where traditions, culture, and devotion converge along the sacred riverbanks."
          />
          <TripData
          image={Trip3}
          heading="Trip to Kochi,Kerala"
          text="Kochi, in Kerala, India, is a captivating blend of history and modernity. The historic Fort Kochi, with its colonial architecture and Chinese fishing nets, contrasts with the contemporary vibe of the city. The vibrant spice markets, Mattancherry Palace, and multicultural influences make Kochi a dynamic and culturally rich destination on the southwest coast."
          />
        
       </div>
    </div>
  );
}

export default Trip;
