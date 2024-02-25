// using the react-router-dom components to move to pages
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
// MOVIE APP
// app.js will render a router (router = component that will be looking at the url and show us the components of the url), not show movies
// function App() {
// 	return (
// 		<Router>
// 			{/* switch will look for a route (url) and will render a component one at a time (in this case) */}
// 			<Routes>
// 				{/* when user is in "/movie" path, detail route will be rendered */}
// 				<Route path="/movie/:id" element={<Detail />}>
// 					<Detail />
// 				</Route>
// 				{/* when user is in "/" path, home route will be rendered */}
// 				<Route path="/" element={<Home />}>
// 					<Home />
// 				</Route>
// 			</Routes>
// 		</Router>
// 	);
// }

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/movie/:id",
			element: <Detail />,
		},
	]);
	return <RouterProvider router={router} />;
};

export default App;
