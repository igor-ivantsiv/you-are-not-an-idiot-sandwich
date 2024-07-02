import Form from "../components/Form";

function AddRecipe({ functionData, setFunctionData }) {

  return <>
  <Form functionData={functionData} setFunctionData={setFunctionData} formType ="add"/>
  </>;
}

export default AddRecipe;
