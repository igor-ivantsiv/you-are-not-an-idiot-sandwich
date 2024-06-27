import List from "../components/List.jsx";

function HomePage({ functionData, handleDelete }) {
  return (
    <>
      <h1>My recipes</h1>
      <List functionData={functionData} handleDelete={handleDelete} />
    </>
  );
}

export default HomePage;
