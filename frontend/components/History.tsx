import axios from "axios";
import { useEffect, useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { TopBanner } from "./TopBanner";


interface HistoryItem {
    orgName: string; // Replace with actual type of `id`
    amount: number;
    userAdd: string;
  }

function History() {
  const { account } = useWallet();
  const [history, setHistory] = useState<HistoryItem[] | null>(null);;

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/v1/user/history', {
            userAdd: account?.address
        });
        console.log(account?.address)
        setHistory(response.data.alltransaction);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    if (account?.address) {
      fetchHistory();
    }
  }, [account?.address]);

  return (
    <div>
        <TopBanner/>
        <div className='text-7xl font-serif w-full h-[15vh] p-5' ><div>Donation history</div></div>
      {history ? (
        <div >
          {history.map((item:HistoryItem, index:number) => (
            <div key={index} className="w-full flex justify-between items-center h-[15vh] px-20 mt-10">
                <div className="flex justify-between items-center w-full h-[17vh] border border-gray-600 rounded-xl shadow-lg p-8">
                    <div>
                        <div className="text-3xl font-medium">{item.orgName}</div>
                        <div>Wallet address :{item.userAdd}</div>
                    </div>
                    <div className="font-semibold">{item.amount}APT</div>
                </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading history...</p>
      )}
    </div>
  );
}

export default History;
