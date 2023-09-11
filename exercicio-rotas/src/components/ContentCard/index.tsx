import { Link } from "react-router-dom";
import ActionButton from "../ActionButton";
import "./style.css";

type Props = {
  conteudo: string;
  btnLabel: string;
  rota: string;
};

export default function ContentCard({ conteudo, btnLabel, rota }: Props) {
  return (
    <main className="main-container">
      <div className="content-container">
        <div className="content-data">
          <h1>{conteudo}</h1>
        </div>

        <Link to={rota}>
          <ActionButton label={btnLabel} />
        </Link>
      </div>
    </main>
  );
}
