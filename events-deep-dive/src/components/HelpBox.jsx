import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h1>{title}</h1>
      <h2>{text}</h2>
    </article>
  );
}

export default HelpBox;
