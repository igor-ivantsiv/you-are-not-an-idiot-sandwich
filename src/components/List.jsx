import ListItem from "./ListItem.jsx";

function List({ functionData, handleDelete }) {
  return functionData.map((eachRecipe) => {
    return (
      <ListItem
        key={eachRecipe.id}
        recipe={eachRecipe}
        handleDelete={handleDelete}
      />
    );
  });
}
export default List;
