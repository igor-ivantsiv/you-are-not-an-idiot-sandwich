import Form from "../components/Form";
import { useParams } from "react-router-dom";

function EditRecipe({ functionData, setFunctionData }) {

  const { recipeId } = useParams();
  return <>
  <Form functionData={functionData} setFunctionData={setFunctionData} formType ="edit" recipeId={recipeId}/>
  </>;
}

export default EditRecipe;
