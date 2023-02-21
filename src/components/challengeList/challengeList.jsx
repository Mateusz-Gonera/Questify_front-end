import React, { useState } from 'react';
import Modal from '../modal/modal.jsx';

export function ChallengeList() {
  const [challenges, setChallenges] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
  }

  const handleAddChallenge = (challenge) => {
    setChallenges([...challenges, challenge]);
  }

  return (
    <div>
      <button onClick={handleModalOpen}>Add Challenge</button>
      {isModalOpen && <Modal onClose={handleModalClose} onAddChallenge={handleAddChallenge} />}
      <ul>
        {challenges.map((challenge, index) => (
          <li key={challenge.id}>{challenge.name} ({challenge.category}, {challenge.difficulty})</li>
        ))}
      </ul>
    </div>
  );
}

export default ChallengeList;