import React from 'react';
import Card from'./Card';


 // map loop, forEach too
 const CardList = ({ robots }) => {
	return (
	  <div>
		{
	// Loop is better way to do that, with map.
	robots.map((user, i) => {
		return (
		  <Card
			key={i}
			id={robots[i].id}
			name={robots[i].name}
			email={robots[i].email}
			/>
		);
	  })
	}
  </div>
);
}

export default CardList;