import React, {useEffect, useState} from 'react';
import ModalAbout from "react-modal";
import axios from 'axios';

import './App.css';
import Search from './components/Search'
import Comics from './components/Comics';

const hash = '98bb87697b09976687672fd921a3d771';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading,setLoading] = useState(true);
  const [query,setQuery] = useState('');
  const [aboutIsOpen, setIsOpenAbout] = useState(false);
	
  function openAbout() {
	  setIsOpenAbout(true);
	} 
	function closeAbout() {
	  setIsOpenAbout(false);
	}

  useEffect(() => {
    const  fetch = async() => {
		let result;
      if(query === ''){
      	result = await axios(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1165cfe06e6a952d7f758b159f99ca63&hash=${hash}`);
      }else{
			result = await axios(`http://gateway.marvel.com/v1/public/comics?titleStartsWith=${query}&ts=1&apikey=1165cfe06e6a952d7f758b159f99ca63&hash=${hash}`);
      }
		setItems(result.data.data.results);
		setLoading(false);
    };
    fetch()
  },[query]);

  return (
	  <div className="App">		 
      <header>
			<a href="#sideBar" onClick={openAbout}>
				<ModalAbout
					isOpen={aboutIsOpen}
					onRequestClose={closeAbout}
					contentLabel="about"
					overlayClassName="modal-overlay-about"
					className="modal-content-about"
					>
						<h6>[ Esc para fechar ]</h6>
						<h2>Gabriel SA</h2>
						<h4>Developer Full Stack</h4>
						Links:
						<a href="https://www.linkedin.com/in/gabriel-sa-825054213/" target="_blank">
							<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fopenvisualfx.com%2Fwp-content%2Fuploads%2F2019%2F10%2Flinkedin-icon-logo-png-transparent.png&f=1&nofb=1" width="24px"/>
							Linkedin
						</a>
						<a href="https://github.com/gabrielSalem" target="_blank">
							<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fgithub%2Fgithub_PNG28.png&f=1&nofb=1" width="26px"/>
							Github
						</a>
				</ModalAbout>
				<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	         	<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4H21V20H3V4ZM9 6H19V18H9V6Z" fill="currentColor"/>
	      	</svg>
	      </a>
			<Search search={(q)=>setQuery(q)}/>
		</header>
    <Comics items={items} isLoading={isLoading}/>
    </div>
  );

}
export default App;

