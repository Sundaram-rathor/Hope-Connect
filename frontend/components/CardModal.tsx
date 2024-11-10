// CardModal.js
import TransferMoney from './TransferMoney';

const CardModal = ({ cardData, onClose }: any) => {
  if (!cardData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full max-h-screen overflow-y-auto">
        <button onClick={onClose} className="text-gray-500 float-right mb-4">Close</button>
        <h2 className="text-2xl font-bold mb-4">{cardData.title}</h2>
        <img src={cardData.imgUrl} alt={cardData.title} className="w-full h-48 object-cover mb-4" />
        <p className="mt-4">{cardData.description}</p>
        <p className='font-bold mt-5'>Fund Needed: {cardData.fundNeeded} $</p>
        <p className='font-bold'>Fund Raised: {cardData.fundRaised} $</p>
        
        {/* Make TransferMoney scrollable with the rest of the content */}
        <div className="mt-4">
          <TransferMoney walletAdd={cardData.walletAdd} orgName={cardData.title} />
        </div>
      </div>
    </div>
  );
};

export default CardModal;
