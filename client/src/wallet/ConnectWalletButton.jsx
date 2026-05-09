import { useWallet } from './WalletContext';

const truncate = (addr) => `${addr.slice(0, 6)}…${addr.slice(-4)}`;

export default function ConnectWalletButton({ className = '', label = 'Connect Wallet' }) {
  const { address, disconnect } = useWallet();

  if (address) {
    return (
      <a
        href="#"
        role="button"
        className={className}
        title="Click to disconnect"
        onClick={(e) => { e.preventDefault(); disconnect(); }}
      >
        {truncate(address)}
      </a>
    );
  }

  return (
    <a
      href="#walletModal"
      role="button"
      className={className}
      data-bs-toggle="modal"
      data-bs-target="#walletModal"
    >
      {label}
    </a>
  );
}
