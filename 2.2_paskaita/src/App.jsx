import FuncDiv from "./components/FuncDiv";
import ClassDiv from "./components/ClassDiv";

const App = () => {
    return (
        <div className="container">
            <FuncDiv
                header="Func Welcome"
                text="Function components used during this course and in future projects"
            />
            <ClassDiv
                header="Class Welcome"
                text="Class components are no longer used"
            />
        </div>
    );
};

export default App;