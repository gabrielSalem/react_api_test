import React, { useState}  from 'react'

const  Search = ({search}) => {
  const [element,setElement] = useState('');

  const onSearch = (element) => {
    setElement(element);
    search(element);
  }

  return (
    <form>
				<input 
              autoFocus
              spellcheck="false"
              className="search"
              onChange={(e) => onSearch(e.target.value)}
              value={ element }
              placeholder='Procure sua HQ'/>
		</form>
  )
}

export default Search;