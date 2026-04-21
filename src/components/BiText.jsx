import './BiText.css';

export default function BiText({ en, hi, as = 'div' }) {
  const Component = as;
  
  return (
    <Component className="bi-text">
      <div className="bi-text-en">{en}</div>
      <div className="bi-text-hi">{hi}</div>
    </Component>
  );
}
