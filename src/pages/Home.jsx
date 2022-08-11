import Veggie from "../components/Veggie";
import Popular from "../components/Popular";

export default function Home() {
  return (
    <div className="mx-4 md:mx-[30%]">
      <Popular />
      <Veggie />
    </div>
  );
}
