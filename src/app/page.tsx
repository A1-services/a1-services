import Image1 from "assets/image1.jpg"
import Image2 from "assets/image2.jpg"
import Image3 from "assets/image3.jpg"
import Image4 from "assets/image4.jpg"
import Image5 from "assets/image5.jpg"
import HomeCarousel from "./HomeCarousel";

function Home() {
  const items = [
    { title: "Gregory", image: Image1.src, url: "/", price: 63 },
    { title: "Max", image: Image2.src, url: "/", price: 16 },
    { title: "Maria", image: Image3.src, url: "/", price: 100 },
    { title: "Sophie", image: Image4.src, url: "/", price: 7 },
    { title: "Mathilda", image: Image5.src, url: "/", price: 32 },
  ]

  return (
    <main className="w-full ">
      <HomeCarousel featuredItems={items} />
    </main>
  );
}

export default Home;
