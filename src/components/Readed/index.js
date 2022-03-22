import React from 'react';


const Readed = ({isMe,isReaded}) => {

    return (
        isMe && (isReaded ? (
            <img 
            alt={`123`}
            src="https://res.cloudinary.com/df79xnsj1/image/upload/v1647949588/1231_t9ubhx.svg"
            className="message__icon-readed"
            />
        ) : 
        <img 
            src="https://res.cloudinary.com/df79xnsj1/image/upload/v1647949708/noChecked_t38rx3.svg" 
            alt={`123`}
            className=" message__icon-readed message__icon-readed--no"
            />
           )
    )
    
    }


export default Readed;