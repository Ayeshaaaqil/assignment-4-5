import styles from "./page.module.css";
import Header from "./components/header";

export default function Home() {
  return (
    <section className="p-5">
      <div className="container">
        <h1 style ={{
          color:"red"
        }}
        className="fw-bold text-dark">Home Page</h1>
        <p style={{
          color:"purple"
        }}>
          <b>
        "Flowers are nature's exquisite masterpieces, weaving together vibrant colors, 
         delicate petals, and subtle scents to create breathtaking beauty. With over 350,000 known species,
         they burst forth in every hue, from soft pastels to radiant jewel tones, 
         each one uniquely crafted to attract pollinators, express emotions, 
         or simply delight the senses. Whether swaying gently in gardens, blooming in wild profusion, 
         or carefully arranged in elegant bouquets, flowers have the power to evoke emotions, 
         convey messages, and bring joy to our lives, their fleeting yet eternal beauty 
         a testament to the wonders of the natural world."</b>
         </p>
            
      </div>
    </section>
  );
}