export default function CardProgram(props) {
  return (
    <>
      <div className="bg-white p-3 mb-4 rounded-3 mb-4 h-100">
        <h3>{props.judul}</h3>
        <p>{props.deskripsi}</p>
      </div>
    </>
  );
}
