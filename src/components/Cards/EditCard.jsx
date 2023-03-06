import React, { useEffect, useState } from "react";
import {
	useCompleteCardMutation,
	useCreateCardMutation,
	useDeleteCardMutation,
	useEditCardMutation,
} from "../../redux/api/questifyApi";
import CardComplete from "../CardComplete/CardComplete";
import Loader from "../../utils/loader/Loader";
import Icon from "../Icon";
import style from "./Cards.module.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import moment from "moment/moment";
import { DeleteModal } from "../deleteModal/DeleteModal";

function EditCard({
	difficulty,
	category,
	title: initialTitle,
	dueDate,
	dueTime,
	isChallenge,
	type,
	id,
	hideCard,
	isDone = false,
	isShowCreate,
	isCreateForm,

}) {

	const [deleteCard] = useDeleteCardMutation();
	const [editCard, { isLoading, error }] = useEditCardMutation();
	const [isComplete] = useCompleteCardMutation();

	const [title, setTitle] = useState(initialTitle);
	const [selectedDifficulty, setSelectedDifficulty] = useState(difficulty);
	const [selectedGroup, setSelectedGroup] = useState(category);
	const [showDifficultyDropdown, setShowDifficultyDropdown] = useState(false);
	const [showGroupDropdown, setShowGroupDropdown] = useState(false);
	const [isTask, setIsTask] = useState(type);
	const [Challenge, setChallenge] = useState(isChallenge);
	const [isCompleted, setIsCompleted] = useState(isDone);
	const [startDate, setStartDate] = useState(new Date());
	const [changeDate, setChangeDate] = useState(dueDate);
	const [changeTime, setChangeTime] = useState(dueTime);
	const [showModal, setShowModal] = useState(false);


	const handleClick = () => {
		setShowModal(true);
	};

	const handleDelete = () => {
		deleteCard(id);
		setShowModal(false);
      
	};
	const handleCancel = () => {
		setShowModal(false);
      hideCard();
	};
	const handleSubmit = async (event) => {
		try {
			const result = await editCard({
				id,
				title,
				difficulty: selectedDifficulty,
				category: selectedGroup,
				type: isTask,
				time: changeTime,
				date: changeDate,
			});
			console.log(result);
			hideCard();
		} catch (err) {
			console.log(err);
		}
	};
	const handleInputChange = (event) => {
		setTitle(event.target.value);
	};

	const handleDifficultyClick = () => {
		setShowDifficultyDropdown(!showDifficultyDropdown);
	};

	const handleDifficultyChange = (event) => {
		setSelectedDifficulty(event.target.value);
		setShowDifficultyDropdown(false);
	};
	const handleGroupChange = (event) => {
		setSelectedGroup(event.target.value);
		setShowGroupDropdown(false);
	};
	const handleGroupClick = () => {
		setShowGroupDropdown(!showGroupDropdown);
	};
	const handleCompleted = () => {
		setIsCompleted(true);
	};
	const cancelComplete = () => {
		setIsCompleted(false);
	};
	const handleChangeType = () => {
		Challenge ? setIsTask("Task") : setIsTask("Challenge");
		Challenge ? setChallenge(false) : setChallenge(true);
	};
	//Calendar
	useEffect(() => {
		const hour = startDate.getHours();
		const minute = startDate.getMinutes();
		const time = moment({ hour, minute }).format("HH:mm");
		setChangeTime(time);
		const year = startDate.getFullYear();
		const month = startDate.getMonth();
		const day = startDate.getDate();
		const newDate = moment({ year, month, day }).format("yyy-MM-DD");
		setChangeDate(newDate);
	}, [startDate]);

	// Change date to string Today or Tomorrow
	const today = new Date();
	const tomorrow = new Date(today);
	tomorrow.setDate(tomorrow.getDate() + 1);
	const formatDate = (date) => {
		if (date.toDateString() === today.toDateString()) {
			return "Today";
		} else if (date.toDateString() === tomorrow.toDateString()) {
			return "Tomorrow";
		} else {
			return date.toLocaleDateString("en-US", {
				year: "numeric",
				month: "short",
				day: "numeric",
			});
		}
	};

	const [addCard] = useCreateCardMutation();
	const handleCreateCard = () => {
		const newCard = {
			title: title,
			difficulty: selectedDifficulty,
			category: selectedGroup,
			type: isTask,
			date: changeDate,
			time: changeTime,
		};
		addCard(newCard);
		isCreateForm();
	};

	return (
		<div className={isShowCreate ? style.createStyle : null}>
			<div
				className={Challenge ? style.challengeContainer : style.cardContainer}
			>
				{showModal && (
					<div className={style.modalBackground}>
						<div className={style.modal}>
							<p>Delete this Quest ?</p>
							<div className={style.modalButtons}>
								<button onClick={handleCancel} className={style.btnCancel}>
									CANCEL
								</button>
								<div className={style.btnEdit}> </div>
								<button onClick={handleDelete} className={style.btnDelete}>
									DELETE
								</button>
							</div>
						</div>
					</div>
				)}
				{isCompleted && (
					<CardComplete
						title={title}
						close={() => isComplete(id)}
						cancel={() => cancelComplete()}
					/>
				)}

				<div className={style.difficultyContainer}>
					<div className={style.difficultyLevel}>
						<div className={style[selectedDifficulty]}> </div>
						<h3 className={style.levelName} onClick={handleDifficultyClick}>
							{selectedDifficulty}
						</h3>
						{showDifficultyDropdown && (
							<select
								className={style.difficultyDropdown}
								value={selectedDifficulty}
								onChange={handleDifficultyChange}
								size="3"
							>
								<option className={style.easy_list} value="Easy">
									{/*<span className={style.Easy}> </span>*/}
									Easy
								</option>
								<option className={style.normal_list} value="Normal">
									{/*<span className={style.Normal}> </span>*/}
									Normal
								</option>
								<option className={style.hard_list} value="Hard">
									{/*<span className={style.Hard}> </span>*/}
									Hard
								</option>
							</select>
						)}
					</div>

					<button className={style.starIcon} onClick={handleChangeType}>
						{Challenge ? (
							<Icon
								className={style.trophyIcon}
								name="trophy"
								color="#B9C3C8"
                        
							/>
						) : (
							<Icon
								className={style.starIcon}
								name="Star"
								color="#B9C3C8"
							/>
						)}
					</button>
				</div>
				<div className={style.titleContainer}>
					<form>
						{Challenge ? (
							<button className={style.isChallenge}>Edit Challenge</button>
						):(
							<p className={style.isTask}>{isShowCreate ? ("CREATE NEW QUEST") : ("EDIT QUEST")}</p>
						)
                  }
						<input
							type="text"
							placeholder="Task title"
							value={title}
							onChange={handleInputChange}
							className={Challenge ? style.chalengeName : style.taskName}
						/>
					</form>
					<div className={style.date}>
						<DatePicker
							className={style.datePicker}
							selected={startDate}
							dropdownMode="select"
							dateFormat="yyyy-MM-dd, HH:mm"
							timeFormat="HH:mm"
							timeIntervals="5"
							showTimeSelect="true"
							value={startDate}
							withPortal
							onChange={(date) => setStartDate(date)}
						/>
						<Icon
							name="calendar"
							color="#00D7FF"
							size={14}
							className={style.calendarIcon}
						/>
					</div>
				</div>
				<div className={style.bottomContainer}>
					{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div
						className={style[selectedGroup]}
						style={{ cursor: "pointer" }}
						onClick={handleGroupClick}
					>
						{selectedGroup}
						{showGroupDropdown && (
							<select
								className={style.categoryDropdown}
								value={selectedGroup}
								onChange={handleGroupChange}
								size="6"
							>
								<option value="Stuff">Stuff</option>
								<option value="Family">Family</option>
								<option value="Health">Health</option>
								<option value="Learning">Learning</option>
								<option value="Leisure">Leisure</option>
								<option value="Work">Work</option>
							</select>
						)}
					</div>

					{isShowCreate ? (
						<div className={style.showCreateContainer}>
							<button onClick={isCreateForm} className={style.cancel}>
								<Icon
									className={style.clearIcon}
									name="clear"
									color="#DB0837"
									size={10}
								/>
							</button>
							{/*<div className={style.btnEdit}> </div>*/}
							<button type="button" onClick={handleCreateCard}>
								<span className={style.createBTN}>CREATE</span>
							</button>
						</div>
					) : (
						<div className={style.btnContainer}>
							<button type="submit" disabled={isLoading} onClick={handleSubmit}>
								{isLoading ? (
									<Loader />
								) : (
									<Icon
										className={style.saveIcon}
										name="save"
										color="#00d7ff"
										size={10}
									/>
								)}
							</button>
							<div className={style.btnEdit}> </div>
							<button onClick={() => setShowModal(true)}>
								<Icon
									className={style.clearIcon}
									name="clear"
									color="#DB0837"
									size={10}
								/>
							</button>
							<div className={style.btnEdit}> </div>
							<button onClick={handleCompleted}>
								<Icon
									className={style.doneIcon}
									name="done"
									color="#24d40c"
									size={14}
								/>
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default EditCard;
