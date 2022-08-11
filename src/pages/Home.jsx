import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Category from "../components/Category";

export default function Home() {
  return (
    <div className="mx-4 md:mx-[20%]">
      <Category />
      <Popular />
      <Veggie />
    </div>
  );
}
