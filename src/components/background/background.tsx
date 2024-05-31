import './background.css';

export default function Background() {
  const elCount = 7;

  return (
    <div className="background">
      {(new Array(elCount)).map((v, i) => (<div key={`blob_${i}`} />))}
    </div>
  );
}