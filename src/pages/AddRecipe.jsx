import Form from "../components/Form";

function AddRecipe({ functionData, setFunctionData }) {

  return     <section className="mainContent">
      <div className="h1div">
        <h1>Add a new recipe</h1>
        </div>
  <Form functionData={functionData} setFunctionData={setFunctionData} formType ="add"/>
  </section>;
}

export default AddRecipe;
