export default function BiText({ en, as = 'div' }) {
  const Component = as;

  return (
    <Component className="bi-text">
      <div className="bi-text-en">{en}</div>
    </Component>
  );
}
