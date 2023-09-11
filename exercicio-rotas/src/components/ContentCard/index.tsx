import ActionButton from "../ActionButton";
import "./style.css";

export default function ContentCard() {
  return (
    <main className="main-container">
      <div className="content-container">
        <div className="content-data">
          <h1>Conteúdo</h1>
        </div>

        <ActionButton />
      </div>
    </main>
  );
}
