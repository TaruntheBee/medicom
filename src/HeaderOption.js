import React from 'react'
import './HeaderOption.css'
 
function HeaderOption({avatar,Icon,title}) {
  return (
<div className="headerOption"> 
{Icon && <Icon className='headerOption_icon'/>}
{avatar && <avatar className='headerOption_icon' src={avatar} />}

<h3 className="headerOption_title">(title)</h3>
</div>
  );
}

export default HeaderOption;