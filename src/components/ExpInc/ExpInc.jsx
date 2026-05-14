import { ArrowUp, ArrowDown } from 'lucide-react';

const ExpInc = () => {
  return (
   
      <div className="w-full bg-white divide-x divide-[#F0F0F0] rounded-2xl shadow-lg flex justify-between gap-12">
        <div className='w-1/2 p-6'>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-[#1A202C] text-base font-semibold mb-5">Total Income</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[#1A202C] text-[32px] font-bold">$50,530.00</span>
                <span className="text-[#90A3BF] text-sm font-semibold">(USD)</span>
              </div>
            </div>
            <div className="bg-[#F6F7F9] p-3 rounded-lg">
              <ArrowUp className="text-[#7FB519]" size={24} />
            </div>  
          </div>
          <p className="text-[#7FB519] text-xs font-bold">
            20% <span className='text-[#90A3BF] font-semibold'>increase compared to last week</span>
          </p>
        </div>

        <div className='w-1/2 p-6'>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-[#1A202C] text-base font-semibold mb-5">Total Expense</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[#1A202C] text-[32px] font-bold">$19,760.00</span>
                <span className="text-[#90A3BF] text-sm font-semibold">(USD)</span>
              </div>
            </div>
            <div className="bg-[#F6F7F9] p-3 rounded-lg">
              <ArrowDown className="text-[#FF4423]" size={24} />
            </div>  
          </div>
          <p className="text-[#FF4423] text-xs font-bold">
            10% <span className='text-[#90A3BF] font-semibold'>decrease compared to last week</span>
          </p>
        </div>

      </div>
  );
};

export default ExpInc;