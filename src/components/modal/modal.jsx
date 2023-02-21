import React, { useState } from 'react';

function Modal(props) {
  const [cardName, setCardName] = useState('');
  const [category, setCategory] = useState('Uncategorized');
  const [difficulty, setDifficulty] = useState('Easy');

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data (e.g. send it to the server)
    // ...
    // Close the modal window
    props.onClose();
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <label>
            Card name:
            <input type="text" value={cardName} onChange={handleCardNameChange} />
          </label>
          <label>
            Category:
            <select value={category} onChange={handleCategoryChange}>
              <option value="Uncategorized">Uncategorized</option>
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
              <option value="Study">Study</option>
            </select>
          </label>
          <label>
            Difficulty:
            <select value={difficulty} onChange={handleDifficultyChange}>
              <option value="Easy">Easy</option>
              <option value="Normal">Normal</option>
              <option value="Hard">Hard</option>
            </select>
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;

// import React, { useState } from 'react';
// import Modal from './Modal';

// function MyComponent() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleModalOpen = () => {
//     setIsModalOpen(true);
//   }

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   }

//   return (
//     <div>
//       <button onClick={handleModalOpen}>Open Modal</button>
//       {isModalOpen && <Modal onClose={handleModalClose} />}
//     </div>
//   );
// }

// export default MyComponent;