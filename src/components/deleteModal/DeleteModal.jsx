import styles from "./deleteModal.module.css";

const DeleteModal = ({ closeMod, deleteMod, handle }) => {
    const { id } = handle;
    return (
      <div className={styles.modal__wrapper}>
        <div
          className={styles.cancel__modal}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <p className={styles.question}>Delete this Quest?</p>
  
          <div className={styles.choice}>
            <button
              type="button"
              className={styles.cancel__btn}
              onClick={() => closeMod()}
            >
              CANCEL
            </button>
            <span>|</span>
            <button className={styles.delete__btn} onClick={() => deleteMod(id)}>
              DELETE
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export { DeleteModal };