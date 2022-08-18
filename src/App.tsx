import { FormProvider } from './context/FormContext';
import {Router} from './router'
function App() {
  return (    
    <FormProvider>
      <Router/>  
    </FormProvider>    
  );
}

export default App;
