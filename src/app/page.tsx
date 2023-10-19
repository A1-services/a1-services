import Carousel from "@/components/Carousel";
import Image1 from "assets/deva-williamson-S2jw81lfrG0-unsplash.jpg"
import Image2 from "assets/emile-mbunzama-cLpdEA23Z44-unsplash.jpg"
import Image3 from "assets/joyful-vT5xrj3z1OE-unsplash.jpg"
import HomeCarousel from "./HomeCarousel";

function Home() {
  const items = [
    { title: "one", image: Image1.src, url: "/" },
    { title: "one", image: Image2.src, url: "/" },
    { title: "one", image: Image3.src, url: "/" },
  ]

  return (
    <main className="w-full ">
      <HomeCarousel featuredItems={items} />
    </main>
  );
}

export default Home;
