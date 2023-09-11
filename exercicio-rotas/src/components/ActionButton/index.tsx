import "./style.css";

type Props = {
  label: string;
};

export default function ActionButton({ label }: Props) {
  return <button>{label}</button>;
}
