export default function CardProgram(props) {
  return (
    <>
      <div className="bg-white rounded-2 mb-3 p-4">
        <h3>{props.judul}</h3>
        <p>{props.deskripsi}</p>
      </div>
    </>
  );
}
