import react from "react";
import { useMediaQuery } from "react-responsive";
import App from "./App";
import SpApp from "./SpApp";

export default function GeneralApp() {
  const isDeskTop = useMediaQuery({ minDeviceWidth: 1024 });
  const isSp = useMediaQuery({ maxDeviceWidth: 1023 });
  return (
    <>
      {isDeskTop && <App />}
      {isSp && <SpApp />}
    </>
  );
}
