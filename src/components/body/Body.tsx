import Greet from "./Greet";
import TimeGauge from "./TimeGauge";

export const Body = () => {
  return (
    <div className="h-[85%] rounded-lg">
      <Greet name="Pakistan" msgcount={0} isLoggedIn={false} />
      <TimeGauge />
    </div>
  );
}
