import Header from "../../components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function NotFoundPage(props) {

  const context = useContext(GlobalContext);

  const {bananinha} = context

  return (
    <div>
      <Header />
      <h1>Ops! Essa página foi levada pela Equipe Rocket!</h1>
      <h2>{bananinha}</h2>
    </div>
  );
}

export default NotFoundPage;
