import { getIssue } from "issueSlice";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "store";

const GetIssue = () => {
  const dispatch = useDispatch();

  const issues = useSelector((state) => {
    return state.getIssue.issues;
  });

  const status = useSelector((state) => {
    return state.getIssue.status;
  });

  return (
    <>
      <h1>{status}</h1>
      <div>{issues && issues.map((user) => <div>{user.id}</div>)}</div>
      <button
        onClick={() => {
          dispatch(getIssue());
        }}
      >
        데이터 받아오기
      </button>
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <GetIssue />
    </Provider>
  );
}

export default App;
