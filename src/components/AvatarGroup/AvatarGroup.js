import React from 'react';
import SelectButton from '../SelectButton/SelectButton';
import FallbackAvatars from '../Avatar/Avatar';
import { dbRef } from '../../api/apiHandler/getDataBase';
import './AvatarGroup.scss';

const AvatarGroup = () => {
  return (
    <div className="wrapper-avatar-group">
      <FallbackAvatars />
      <SelectButton />
    </div>
  );
};

export default AvatarGroup;
