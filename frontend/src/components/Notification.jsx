import { useState } from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useNavigate  } from 'react-router-dom';

function Notifications() {
  const [activeTab, setActiveTab] = useState('notifications'); // Track active tab

  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate(`/Settings?activeTab=Notifications`);
  };

  return (
    <section>

      <div>
        <div className="mx-3 my-0 relative">
          <div className="border-b pt-2 pb-3 px-0 text-left overflow-hidden w-full overflow-x-auto whitespace-nowrap flex justify-between">
            {/* Notifications Tab */}
            <div>
              <a
                className={`text-base pt-[5px] pb-3 px-[5px] cursor-pointer 
                  ${activeTab === 'notifications' ? 'text-red-700 border-red-700 border-b-2' : 'hover:text-red-700 hover:border-b-2 hover:border-red-700'}`}
                onClick={() => setActiveTab('notifications')}
              >
                Notifications <span className="pl-2">0</span>
              </a>

              {/* Messages Tab */}
              <a
                className={`text-base pt-[5px] pb-3 px-[5px] cursor-pointer pl-5
                  ${activeTab === 'messages' ? 'text-red-700 border-red-700 border-b-2' : 'hover:text-red-700 hover:border-b-2 hover:border-red-700'}`}
                onClick={() => setActiveTab('messages')}
              >
                Messages <span className="pl-2">0</span>
              </a>
            </div>
            <div className='relative top-2 h-[30px] text-xl hover:text-[#ffee58] hover:bg-neutral-800 rounded-2xl p-1'>
            <button className='relative top-[-1px]' onClick={handleSettingsClick}>
              <IoSettingsOutline />
            </button>
            </div>
          </div>

          {/* Conditional Rendering of Sections */}
          <div className="mt-4">
            {activeTab === 'notifications' && (
              <div className="p-4 border rounded-md">
                <h2 className="text-lg font-semibold">Notifications</h2>
                <p>No new notifications at the moment.</p>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="p-4 border rounded-md">
                <h2 className="text-lg font-semibold">Messages</h2>
                <p>No new messages available.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Notifications;
