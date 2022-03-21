import React from 'react';
import { Input } from 'antd';
import { Button } from 'components'
import './edit.scss'
const Edit = ({value,handleChangeInput,handleChangeData, modal, setModal}) => {
    return ( 
        <div className="edit">
            <h4>Edit profile</h4>
            <div className="pd">
            <Input placeholder="fullname" name="fullname" value={value.fullname} onChange={handleChangeInput}/>
            <Input placeholder="email" name="email" value={value.email} onChange={handleChangeInput}/>
            <Input placeholder="bio" name="bio" value={value.bio} onChange={handleChangeInput}/>
            <div className="edit__btn">
            <Button onClick={() => {
                 handleChangeData()
                 setModal(!modal)
             }}>Edit</Button>
            </div>
            </div>
        </div>
     );
}
 
export default Edit;