import React from 'react'

export const DisplayCurrentUser = ({currentUser}) => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "red",
        color: 'white',
        textAlign: 'center'
    }
    
    return(
        <div style={{backgroundColor:'orange'}} className="display-board">
            <h4 style={{color: 'black'}}>Current User</h4>
            <div className="number">
				<ul>
					<li>Display Name: {currentUser.displayName}</li>
					<li>UC 6+2: {currentUser.cn}</li>
					<li>UC email: {currentUser.mail}</li>
					
				</ul>
            </div>
            
        </div>
    )
}