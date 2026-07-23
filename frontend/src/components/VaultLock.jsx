import { FaLock } from "react-icons/fa";

const VaultLock = ({ onUnlock }) => {
    return ( 
        <div className="vault-lock">
            <FaLock size={60} />

            <h2>Vault Locked</h2>

            <section class="nes-container vault">
                
                    <section class="vault-message">
                        <div className="rikko">
                            <i class="nes-bcrikko"></i>
                        </div>
                        
                        {/* <!-- Balloon --> */}
                        <div class="nes-balloon from-left">
                            <p>🔒 The vault is locked.
                            Press Unlock when you're ready..</p>
                        </div>
                    </section>
                
            </section>
            <button className="nes-btn is-primary"
                    onClick={onUnlock}
            >
                Unlock
            </button>
        </div>
     );
}
 
export default VaultLock;