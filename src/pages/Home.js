import "../style/Styles.css";
import Slideshow from "../components/slideshow";

export default function Home() {
  return (
    <div>
      <div className="home-promo">
        <h1 className="home-land">
          all of your star wars favourites now streaming on disney +
        </h1>
        <Slideshow />
        {/* https://www.youtube.com/watch?v=q00ldTrywLU */}
      </div>
    </div>
  );
}
