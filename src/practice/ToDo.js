// import { useState } from "react";

// // MAKING A TO DO
// /* 1. make an array that will fresh the components
//     2. create li for eachToDos in the toDos which is an array of strings */
// // state (data that is changed) is never modified directly! always use modifier function
// function App() {
// 	// setToDo(modifier) modifies toDo(state)
// 	// toDo is connected to the input in the form, so if toDo is modified, input is modified
// 	// empty string by default
// 	const [toDo, setToDo] = useState("");
// 	// create an array of toDos with a default empty array
// 	const [toDos, setToDos] = useState([]);
// 	// with onChange, the value written in the input will show up
// 	const onChange = (event) => setToDo(event.target.value);
// 	const onSubmit = (event) => {
// 		// preventing the event from happening
// 		event.preventDefault();
// 		// if toDo===empty, the function is killed
// 		if (toDo === "") {
// 			return;
// 		}
// 		// setToDos(modifier) must be used to modify toDos(state)
// 		// sending a function: 1. first argument = current state, 2. use current state to create new state => receive currentArray and return new array with the currentArray
// 		// ...arrayName returns the elements inside the array
// 		setToDos((currentArray) => [toDo, ...currentArray]);
// 		// sending a value
// 		// emptying the input of toDo
// 		setToDo("");
// 	};
// 	console.log(toDos);
// 	console.log(toDos.map((eachToDo, index) => <li key={index}>{eachToDo}</li>));
// 	return (
// 		<div>
// 			{/* to include javascript into jsx, {} is needed */}
// 			<h1>My To Dos ({toDos.length})</h1>
// 			<form onSubmit={onSubmit}>
// 				<input
// 					onChange={onChange}
// 					value={toDo}
// 					type="text"
// 					placeholder="Write Your To Do"
// 				/>
// 			</form>
// 			<button>Add to Do</button>
// 			<hr />
// 			<ul>
// 				{/* map allows to put a function inside (), runs the function for each element in an array, then returns whatever result from the function into a new array */}
// 				{/* first argument of the map function((firstArgument)=>) is going to be item being processed */}
// 				{/* in this example, took the toDos array, then transformed eachToDo item in the array into a list */}
// 				{/* when rendering list of the same component, a unique key prop is needed for react to identify every item in a list */}
// 				{toDos.map((eachToDo, index) => (
// 					<li key={index}>{eachToDo}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }
