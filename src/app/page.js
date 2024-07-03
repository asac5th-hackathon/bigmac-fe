import Example from "./components/Example";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import Title from "./components/Title";
import LocationSearch from "./components/LocationSearch";
export default function Home() {
  return (
    <div className="px-8">
      <Title />
      <div className="pt-4 text-xl font-bold space-y-0">
         <div>합리적인 소비를 위한</div>
         <div>준비를 시작해볼까요?</div>
      </div>
      <LocationSearch />
    </div>
  );
}
