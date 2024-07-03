import { Slider } from "@/components/ui/slider";
import Button from "./Button";

const Radius = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-1 bg-black/50">
        <div className="font-extrabold">서울 마포구 마포대로 122</div>
        <div>서울 마포구 마포대로 122 프론트원 4층</div>
      </div>

      <div className="py-8">
        <div className="flex flex-col justify-center items-center gap-1 my-4">
          <div className="text-xl">반경</div>
          <div className="text-3xl font-semibold">5km</div>
        </div>

        <div className="flex justify-center items-center gap-4 whitespace-nowrap py-8">
          <span className="font-semibold">100m</span>
          <Slider defaultValue={[33]} max={100} step={1} />
          <span className="font-semibold">모든지역</span>
        </div>

        <Button text={"저장하기"} type={"BOTTOM"}></Button>
      </div>
    </>
  );
};

export default Radius;
