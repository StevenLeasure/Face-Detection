import React from 'react';
import'./ImageLinkForm.css';

 const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
 	return(
 		<div>
 			<p className='b f3'>
 				{'This magic brain will detect faces in your pictures. Give it a try'}
 			</p>
 			<div className='center'>
 				<div className='form pa4 br3 shadow-5'>
 				<input className='f4 pa2 w-100 ' type='tex' onChange={onInputChange} />
 				<button className='w-50 grow f4 link ph3 pv2 dib b black bg-light-blue'
 						onClick={onButtonSubmit}
 				>Detect</button>
 				</div>
 			</div>
 		</div> 
 	);
 }

 export default ImageLinkForm;