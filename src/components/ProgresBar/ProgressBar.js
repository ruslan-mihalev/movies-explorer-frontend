import React from 'react';
import './ProgressBar.css';

function ProgressBar() {
  return (
    <div className='progress-bar'>
      <span className='progress-bar__part progress-bar__part_type_full'>1 неделя</span>
      <span className='progress-bar__part progress-bar__part_type_empty'>4 недели</span>
      <span className='progress-bar__part-name'>Back-end</span>
      <span className='progress-bar__part-name'>Front-end</span>
    </div>
  );
}

export default ProgressBar;
