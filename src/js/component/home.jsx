import React, { useState } from "react";

const To_doList = () => {
	
	const [taskList, setTaskList] = useState(["mob the floor", "dish the washes", "Clean the house", "vacumm the carpet", "wash the dog"]);
	const [inputValue, setInputValue] = useState("")


	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue != "") {
			setTaskList([...taskList, inputValue]);
			setInputValue("");
		}
	};

	const deleteTask = (i) => {
		setTaskList(taskList.filter((_, index) => {
			return index != i
		}))
	}

	return (
		<div className="container d-flex flex-column">
			<div className="text-center">
				<h1><strong>ToDo's List Lex Brunett</strong></h1>
			</div>
			<form onSubmit={handleSubmit}>
				<input
					onChange={(e) => { setInputValue(e.target.value) }}
					value={inputValue}
					type="text"
					placeholder="Any tasks at the moment, add a task"
				/>
				<ul className="list-group">
					{taskList.map((task, index) => (
						<li key={index} className="list-group-item d-flex justify-content-between">
							<span>
								{task}
							</span>
							<button
								type="button"
								className="btn-close"
								onClick={() => {deleteTask(index)}
								}>
							</button>
						</li>
					))}
				</ul>
			</form>
		</div>
	);
};

export default To_doList;
