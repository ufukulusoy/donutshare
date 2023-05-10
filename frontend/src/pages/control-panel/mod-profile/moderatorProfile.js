import React, { useState } from 'react';
import DebaterList from '../shared/debaterList';
import AddTopic from '../shared/addTopic';
import { Navbar } from '../../../shared/Navbar';
import ReportedPosts from '../shared/ReportedPosts';
import authService from '../../../service/authService';
import ChangePassword from '../shared/changePassword';

function ModeratorProfile() {

  const [selectedItem, setSelectedItem] = useState('general');
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");


  const handlePasswordChange = (event) => {
    event.preventDefault();
    authService.changePassword(password, newPassword);
  };
 
  return (
    <div className="flex flex-col h-screen dark:bg-zinc-900">
      <Navbar/>

      <div className="flex flex-row flex-1">
        <div className="w-1/6 bg-gray-200 h-full p-4">
          <ul>
            <li className={`mb-4 ${selectedItem === 'general' ? 'bg-gray-300' : ''}`}>
              <a href="#" className="text-gray-800 font-bold hover:text-gray-700 block py-2 px-4 rounded-md"
                onClick={() => setSelectedItem('general')}>Account Settings</a>
            </li>
            <li className={`mb-4 ${selectedItem === 'dblist' ? 'bg-gray-300' : ''}`}>
              <a href="#" className="text-gray-800 font-bold hover:text-gray-700 block py-2 px-4 rounded-md"
                onClick={() => setSelectedItem('dblist')}>Debater List</a>
            </li>
            <li className={`mb-4 ${selectedItem === 'add' ? 'bg-gray-300' : ''}`}>
              <a href="#" className="text-gray-800 font-bold hover:text-gray-700 block py-2 px-4 rounded-md"
                onClick={() => setSelectedItem('add')}>Add Topic</a>
            </li>
            <li className={`mb-4 ${selectedItem === 'reason' ? 'bg-gray-300' : ''}`}>
              <a href="#" className="text-gray-800 font-bold hover:text-gray-700 block py-2 px-4 rounded-md"
                onClick={() => setSelectedItem('reason')}>Reported Reasons</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-8 dark:bg-zinc-900">
          {selectedItem === 'dblist' ? (
            <DebaterList/>
          ) : selectedItem === 'add' ? (
           <AddTopic/>
          ) : selectedItem === 'reason' ? (
            <ReportedPosts/>

          ) : (
          <ChangePassword/>
          )}
    </div>
  </div>
</div>
);
}

export default ModeratorProfile;
