import Example from "./components/Example";
import MapRange from "@/app/components/MapRange/MapRange";

export default function Home() {
  return (
    <div className="">
      {/** 맵 예시 코드입니다. 추후 컴포넌트 분리 추천 */}
      <MapRange />
      <Example />
      <Example />
      <Example />
      <Example />
      <Example />
      {/* 여기에 컴포넌트 붙이면 됩니다. */}
    </div>
  );
}
