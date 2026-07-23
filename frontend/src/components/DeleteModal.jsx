import { iconLookup, iconPicker } from "../data/icon_data";

const DeleteModal = ({
    isOpen,
    record,
    onConfirm,
    onCancel,
    onClose,
}) => {

    const getIcon = (item) => {
        if (record?.iconKey) {

        const selected = Object.values(iconPicker)
            .flat()
            .find(
                item => item.name.toLowerCase() === record.iconKey.toLowerCase()
            );

        if (selected) {
            const Icon = selected.icon;
            return <Icon size={25} />;
        }
    }

    const text = `${record.description}`.toLowerCase()

    const match = iconLookup.find(item =>
        item.keywords.some(keyword =>
         text.includes(keyword.toLowerCase()   
            )
        )
    );
    // 3. Found a keyword match
        if (match) {
            return match.icon;
        }
    
        // 4. Nothing matched
        return <FaGlobe size={25} />;
    }

    

    if (!isOpen) return null

    return ( 
        <>
        <div className="modal-overlay"
            onClick={onClose}
        />
            <div>
                <div className="feedback-deletecard">
                    <p className="title">
                        Delete Record
                    </p>
                <div className="message">
                    <p>
                        Are you sure you want to delete:
                    </p>
                    <p>
                        <i>{getIcon(record)}</i>
                        <strong>{record?.account}</strong>
                    </p>
                </div>
                    
                    
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
        </>
        
     );

    
        
    }


    


    

 
export default DeleteModal;