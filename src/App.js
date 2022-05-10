import Page from './Page';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Page/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
