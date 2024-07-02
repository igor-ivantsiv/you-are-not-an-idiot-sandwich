import Form from "../components/Form";
import { useParams } from "react-router-dom";

function EditRecipe({ functionData, setFunctionData }) {

  const { recipeId } = useParams();


  return <section className="mainContent">
  <div className="h1div">
    <h1>Edit an existing recipe</h1>
    </div>
  <Form functionData={functionData} setFunctionData={setFunctionData} formType ="edit" recipeId={recipeId}/>
  </section>;
}

export default EditRecipe;
