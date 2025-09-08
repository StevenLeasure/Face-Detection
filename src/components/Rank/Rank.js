import React from 'react';
// import'./Rank.css';

 const Rank = ({name, entries}) => {
 	return(
 		<div>
 			<div className='center b black f1'>
 				{`${name},`}
 			</div>
 			<div className='center b black f2'>
 				{`your current entry count is...`}
 			</div>
 			
 			<div className='center b black f1'>
 				{entries}
 			</div>
 		</div> 
 	);
 }

 export default Rank;