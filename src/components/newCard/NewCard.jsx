import React, { useEffect, useState } from "react";
import {
	useCompleteCardMutation,
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

	return (
		<li>
			<div
				className={Challenge ? style.challengeContainer : style.cardContainer}
			>
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
                           <li className={style.Easy}> Easy</li>
								</option>
								<option className={style.normal_list} value="Normal">
									<li>Normal</li>
								</option>
								<option className={style.hard_list} value="Hard">
									<li>Hard</li>
								</option>
							</select>
						)}
					</div>

					<button onClick={handleChangeType}>
						{Challenge ? (
							<Icon
								className={style.trophyIcon}
								name="trophy"
								color="#00d7ff"
								size={15}
							/>
						) : (
							<Icon
								className={style.starIcon}
								name="Star"
								color="#00d7ff"
								size={15}
							/>
						)}
					</button>
				</div>
				<div className={style.titleContainer}>
					{Challenge && (
						<button className={style.isChallenge}>Challenge</button>
					)}

					<input
						type="text"
						value={title}
						onChange={handleInputChange}
						className={isChallenge ? style.chalengeName : style.taskName}
					/>
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
						<button className="example-custom-input">
							<Icon name="calendar" color="#00D7FF" size={14} />
						</button>
					</div>
				</div>
				<div className={style.bottomContainer}>
					<div className={style[selectedGroup]} onClick={handleGroupClick}>
						{selectedGroup}
						{showGroupDropdown && (
							<select
								className={style.difficultyDropdown}
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
					<div className={style.btnContainer}>
						<button onClick={handleCompleted}>
							<Icon
								className={style.doneIcon}
								name="done"
								color="#24d40c"
								size={14}
							/>
						</button>

						<button onClick={() => deleteCard(id)}>
							<Icon
								className={style.clearIcon}
								name="clear"
								color="#DB0837"
								size={10}
							/>
						</button>

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
					</div>
				</div>
			</div>
		</li>
	);
}

export default EditCard;
