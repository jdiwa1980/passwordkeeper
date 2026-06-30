const DeleteModal = ({
    isOpen,
    record,
    onConfirm,
    onCancel,
}) => {

    if (!isOpen) return null

    return ( 
        <div>
            <div className="nes-container">
                <p className="title">
                    Delete Record
                </p>
                <p>
                    Are you sure you want to delete:
                </p>
                <p>
                    <strong>{record?.account}</strong>
                </p>
                <div className="modal-buttons">
                    <button className="nes-btn"
                            onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button className="nes-btn"
                            onClick={onConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default DeleteModal;