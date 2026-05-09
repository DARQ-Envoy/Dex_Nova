import { useState } from 'react';
import { useWallet } from './WalletContext';

export default function WalletModal() {
  const { setAddress } = useWallet();
  const [error, setError] = useState(null);
  const [connecting, setConnecting] = useState(false);

  const connect = async () => {
    setError(null);
    if (!window.ethereum) {
      setError('MetaMask not detected. Install the MetaMask browser extension and reload.');
      return;
    }
    setConnecting(true);
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts && accounts.length > 0) {
        setAddress(accounts[0]);
        document.getElementById('walletModalCloseBtn')?.click();
      } else {
        setError('No accounts returned from MetaMask.');
      }
    } catch (err) {
      setError(err?.message || 'Failed to connect to MetaMask.');
    } finally {
      setConnecting(false);
    }
  };

  return (
    <div className="modal fade" id="walletModal" tabIndex="-1" aria-labelledby="walletModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="walletModalLabel">Connect a Wallet</h5>
            <button id="walletModalCloseBtn" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <button
              type="button"
              onClick={connect}
              disabled={connecting}
              className="default-btn border-radius-5"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {connecting ? 'Connecting…' : 'Connect MetaMask'}
            </button>
            {error && (
              <p style={{ color: '#d33', marginTop: '12px', marginBottom: 0, fontSize: '0.9rem' }}>
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
