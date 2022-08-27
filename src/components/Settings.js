import React from 'react';
import { useState } from 'react';
import SettingsSelector from './SettingsSelector';

import SubMenu from './SubMenu';

const Settings = (props) => {
  const [subMenu, setSubMenu] = useState("user")

  const onMenuSwap = (menuTag) => {
    setSubMenu(menuTag)
  }

  return (
    <div>
      <div className='split split-tiny left'>
        <SettingsSelector onMenuSwap={onMenuSwap} />
      </div>
      <div className='split split-huge right'>
        <SubMenu menuTag={subMenu} users={props.users} setUsers={props.setUsers} />
      </div>
      
    </div>
  )
}

export default Settings