import i1 from "../assets/1.jpg";
import i2 from "../assets/2.jpg";
import i3 from "../assets/3.jpg";
import i4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot,within a time frame</p>
       
       <DestinationData
       className="first-des"
       heading="Vrindavan,Uttar Pradesh"
       text="
       Vrindavan, a sacred town in Uttar Pradesh, India, is revered for its association with Lord Krishna. Pilgrims and tourists flock to its numerous temples, including the iconic Banke Bihari and ISKCON temples. The Yamuna River's ghats and the vibrant atmosphere during festivals like Holi attract visitors seeking spiritual and cultural experiences. The town's charm lies in its rich mythology, traditional music, dance, and the serene ambiance that reflects the divine essence of Krishna's playful abode.
       " 
       img1={i1}
       img2={i2}
       />

<DestinationData
       className="first-des-reverse"
       heading="Mount Everest,Himalayas"
       text="Mount Everest Base Camp, a popular tourist spot, offers a stunning view of the world's highest peak. Situated in the Himalayas, the camp in Nepal serves as a starting point for trekkers and climbers. Visitors can experience local Sherpa culture, enjoy breathtaking landscapes, and trek to higher altitudes for panoramic views. While the ascent to the summit requires advanced mountaineering skills, reaching the base camp is a challenging and rewarding adventure for many enthusiasts." 
       img1={i3}
       img2={i4}
       />


    </div>
  );
};

export default Destination;
