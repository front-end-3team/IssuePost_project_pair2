import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from 'routes/routing';
import { store } from 'store';
import { Mobile, PC } from 'mediaQuery/MediaQuery';

// const GetIssue = () => {
//     const dispatch = useDispatch();

//     const issues = useSelector((state) => {
//         return state.getIssue.issues;
//     });

//     const status = useSelector((state) => {
//         return state.getIssue.status;
//     });

//     console.log(issues);

//     return (
//         <>
//             <h1>{status}</h1>
//             <div>
//                 {issues && issues.map((user) => <img src={user.user.followers_url} alt="img" />)}
//             </div>
//             <button
//                 onClick={() => {
//                     dispatch(getIssue());
//                 }}
//             >
//                 데이터 받아오기!
//             </button>
//         </>
//     );
// };

function App() {
    return (
        <>
            <Mobile>
                <Provider store={store}>
                    <RouterProvider router={router} />
                </Provider>
            </Mobile>
            <PC>
                <Provider store={store}>
                    <RouterProvider router={router} />
                </Provider>
            </PC>
        </>
    );
}

export default App;
