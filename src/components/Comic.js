import React,{ useState } from 'react'
import Modal from "react-modal";
import useGeolocation from "./GeoLocalization";


export default function Comic({item}) {
	const [modalIsOpen, setIsOpen] = useState(false);
	function openModal() {
		setIsOpen(true);
	} 
	function closeModal() {
		setIsOpen(false);
	}
	
	let descriptionComic = Buffer.byteLength(item.description) > 0 ? item.description : "HQ sem descrição";
	const location = useGeolocation(); 

	function selectHQ(){
		// if(location.loaded && location.error.lenght == 0){}
	}
 
	return (		
		<div className='card'>
			<samp className={"a"+item.id}>Processo de envioda da HQ <small>{item.title}</small></samp>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel={item.title}
				overlayClassName="modal-overlay"
				className="modal-content"
				>
					<h3>{item.title}</h3>
					<p>{descriptionComic}</p>
					<button onClick={closeModal}>Close</button>
			</Modal>
	
			<img src={item.thumbnail.path+'/portrait_fantastic.jpg'} />
			<p>{item.title}</p>
			<div className="buttons">
				<button onClick={openModal} title="Ver detalhes"> 
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15.8787 4.87866H3.87872V6.87866H15.8787V4.87866Z" fill="currentColor" />
						<path d="M15.8787 8.87866H3.87872V10.8787H15.8787V8.87866Z" fill="currentColor" />
						<path d="M3.87872 12.8787H11.8787V14.8787H3.87872V12.8787Z" fill="currentColor" />
						<path fill-rule="evenodd" clip-rule="evenodd" d="M13.7574 12.7573C12.5858 13.9289 12.5858 15.8284 13.7574 17C14.681 17.9236 16.0571 18.1191 17.1722 17.5864L18.7071 19.1213L20.1213 17.7071L18.5864 16.1722C19.1191 15.057 18.9236 13.681 18 12.7573C16.8284 11.5858 14.9289 11.5858 13.7574 12.7573ZM15.1716 15.5858C15.5621 15.9763 16.1953 15.9763 16.5858 15.5858C16.9763 15.1952 16.9763 14.5621 16.5858 14.1716C16.1953 13.781 15.5621 13.781 15.1716 14.1716C14.7811 14.5621 14.7811 15.1952 15.1716 15.5858Z" fill="currentColor" />
					</svg>
				</button>

				<button title="Selecionar endereço de entrega" onClick={selectHQ()}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z" fill="currentColor" /><path d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z" fill="currentColor" /><path d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z" fill="currentColor" /></svg>
				</button>				
			</div>
		</div>
	)
}