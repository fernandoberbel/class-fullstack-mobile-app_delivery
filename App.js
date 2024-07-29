import Routes from "./src/routes";
import RoutesAuth from "./src/routesAuth";

const isUserAuth = false;

export default function App() {
  return isUserAuth ? <RoutesAuth /> : <Routes />;
}
