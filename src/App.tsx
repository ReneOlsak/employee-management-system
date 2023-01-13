import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";
import AuthRoute from "./components/AuthRoute";
import ContactForm from "./pages/ContactForm";

initializeApp(config.firebaseConfig);

export interface AppProps {}

const App: React.FunctionComponent<AppProps> = (props) => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <HomePage />
              </AuthRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact-form" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
