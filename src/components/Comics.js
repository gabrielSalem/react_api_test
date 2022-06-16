import React from 'react';

import Comic from './Comic';

export default function Comics({items,isLoading}) {
	 return isLoading ? <div className="loading">
									<div className="spin-loading"></div>
									<div className="dot-loading">
										<div className="dot1"></div>
										<div className="dot2"></div>
										<div className="dot2"></div>
									</div>
								</div> : //OUR
								<div className="cards">
									{										
										items.map(item => (
											<Comic key={item.id} item={item}/>
										))
									}
								</div>
}
