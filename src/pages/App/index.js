import DynamicForm from "../../components/DynamicForm"
import './index.css'

const App = () => {
  return ( 
    <div className="formInput">
      <DynamicForm
        title={'Dish form'}
      />
    </div>
  );
};

export default App;
