import Veggie from "../components/Veggie";
import Popular from "../components/Popular";

export default function Home() {
  // console.log(import.meta.env.VITE_API_KEY);
  return (
    <>
      <Popular />
      <Veggie />
    </>
  );
}
