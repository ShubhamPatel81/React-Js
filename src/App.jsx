import {
  useNavigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Toggle from "./Code/Toggle";
import CkeckBox from "./Code/CkeckBox";
import RadioAndSelect from "./Code/RadioAndSelect";
import Loop from "./Code/Loop";
import PropsClock from "./Code/PropsClock";
import UseEffectHoot from "./Code/UseEffectHook";
import UseEffectHooK from "./Code/UseEffectHook";
import UseRefHook from "./Code/useRefHool";
import UncontrolledComponent from "./Code/UncontrolledComponent";
import PassFunctionComponent from "./Code/PassFunctionComponent";
import ForWardRef from "./Code/ForWardRef";
import UseFormStatusHook from "./Code/useFormStatusHook";
import UseTransitionHook from "./Code/UseTransitionHook";
import DrivedState from "./Code/DrivedState";
import UseActionHook from "./Code/UseActionHook";
import UseIdHook from "./Code/UseIdHook";
import Frafment from "./Code/Frafment";
import ContextApi from "./Code/ContextApi/ContextApi";
import useToggle from "./Code/CustomHook/useToggle";
import ToggleComponent from "./Code/CustomHook/ToggleComponent";
import TailwindCSS from "./Code/TailwindCSS";

function App() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="App ">
      <div className="button-group mb-10 px-4">
        <button onClick={() => navigate("/toggle")}>Go to Toggle Page</button>
        <button onClick={() => navigate("/checkBox")}>
          Go to CheckBox Page
        </button>
        <button onClick={() => navigate("/radio")}>Go to Radio Page</button>
        <button onClick={() => navigate("/loop")}>Go to Looping Page</button>
        <button onClick={() => navigate("/clock")}>Go to Clock Page</button>
        <button onClick={() => navigate("/useRef")}>Go to UseRef Page</button>
        <button onClick={() => navigate("/useEffect")}>
          Go to UseEffect Page{" "}
        </button>
        <button onClick={() => navigate("/uncontrolledComponent")}>
          Go to uncontrolled Component Page{" "}
        </button>
        <button onClick={() => navigate("/passComponent")}>
          Go to Pass Component Function Page{" "}
        </button>
        <button onClick={() => navigate("/forwardRef")}>
          Go to forwardRef Page{" "}
        </button>
        <button onClick={() => navigate("/useFormStatus ")}>
          Go to useFormStatus Hook Page{" "}
        </button>
        <button onClick={() => navigate("/useTransactionHook ")}>
          Go to useTransactionHook Page{" "}
        </button>
        <button onClick={() => navigate("/drivedState ")}>
          Go to Drived State Page{" "}
        </button>
        <button onClick={() => navigate("/useActionHook ")}>
          Go to UseActionHook Page{" "}
        </button>
        <button onClick={() => navigate("/useIdHook ")}>
          Go to useIdHook Page{" "}
        </button>
        <button onClick={() => navigate("/fragment ")}>
          Go to Fragment Page{" "}
        </button>
        <button onClick={() => navigate("/contextApi ")}>
          Go to Context API Page{" "}
        </button>
        <button onClick={() => navigate("/customHook ")}>
          Go to customHook Page{" "}
        </button>
        <button onClick={() => navigate("/tailwindcss ")}>
          Go to Tailwind css Page{" "}
        </button>
        <button onClick={() => navigate("/api ")}>
          Go to API Page{" "}
        </button>
      </div>

      <Routes>
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/checkBox" element={<CkeckBox />} />
        <Route path="/radio" element={<RadioAndSelect />} />
        <Route path="/loop" element={<Loop />} />
        <Route path="/clock" element={<PropsClock />} />
        <Route path="/useEffect" element={<UseEffectHooK />} />
        <Route path="/useRef" element={<UseRefHook />} />
        <Route
          path="/uncontrolledComponent"
          element={<UncontrolledComponent />}
        />
        <Route path="/drivedState" element={<DrivedState />} />
        <Route path="/passComponent" element={<PassFunctionComponent />} />
        <Route path="/forwardRef" element={<ForWardRef />} />
        <Route path="/useFormStatus" element={<UseFormStatusHook />} />
        <Route path="/useTransactionHook" element={<UseTransitionHook />} />
        <Route path="/useActionHook" element={<UseActionHook />} />
        <Route path="/useIdHook" element={<UseIdHook />} />
        <Route path="/fragment" element={<Frafment />} />
        <Route path="/contextApi" element={<ContextApi />} />
        <Route path="/customHook" element={<ToggleComponent />} />
        <Route path="/tailwindcss" element={<TailwindCSS />} />
        <Route path="/api" element={<TailwindCSS />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
