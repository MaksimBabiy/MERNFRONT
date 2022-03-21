import React, { useState } from 'react'
import { Avatar,Edit } from 'containers'
import { getMessageTime } from 'utils/helpers'
import './profile.scss'
import parseISO from 'date-fns/parseISO'
import { Modal } from 'antd';
import { ContactsFilled,FileImageFilled,LoadingOutlined,MailOutlined,IdcardOutlined,HddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom' 

export default function Profile(props) {
    const { userData,uploadAvatar,isDoneAvatar,setIsDoneAvatar,userId,currentDialogId,setIsVisiable, isVisiable, previewImage,setPreviewImage } = props
        const [modal, setModal] = useState(false)
        console.log(userData)
    return (
            userData !== null  && 
            <>
           <div className="overlay"></div>
           <div className="modal_container">
               <div className="modal_container__main">
               
               {userData.id  &&  
               <div className="modal_container__main-header">
                   <div className="modal_container__main-header-upper">
                       <p>Settings</p>
                       <div className="modal_container__main-header-upper-right">
                   { userId === userData._id && 
                <div>
            <p onClick={() => setModal(!modal)}>
         Edit
        </p>
        <Modal
          visible={modal}
          width="400px"
          onOk={() => {setModal(!modal)}}
          onCancel={() => {setModal(!modal)}}
          footer={''}
          centered
        >
         <Edit setModal={setModal} modal={modal}/>
        </Modal>
                </div>
                }
                <p onClick={() => setIsVisiable(!isVisiable)}>Close</p>
                </div>
                </div>
                <div>
                { isDoneAvatar && <LoadingOutlined className="profile_loader" style={{color: 'black'}}/>}
                </div>
                    <div className="modal_container__main-header-block">
                   <div className="modal_container__main-header-avatar" onClick={() => setPreviewImage(userData.avatar)}>
                    <Avatar user={userData} />
                    </div>
                    <div className="modal_container__main-header-info">
                    <p>{userData.fullname}</p>
                    <p className="modal_container__main-header-info-status">{ !userData.isOnline ? `last seen ${getMessageTime(parseISO(userData.last_seen))}`: 'Online'}</p>
                    </div>
                    { userId === userData._id ? 
                    (
                    <>
                    <input type="file" id="file" onChange={(e) => {
                        setIsDoneAvatar(true)
                        uploadAvatar(e.target.files[0])
                    }}/>
                    <label htmlFor="file" className="btn-3"><FileImageFilled style={{fontSize: '22px'}}/></label> 
                    </>
                    )
                     : 
                     ( <div className="modal_container__main-header-info-redirect">
                         <Link to={`/dialog/${currentDialogId}`} onClick={ () => { setIsVisiable(!isVisiable)}}><ContactsFilled style={{fontSize: '30px'}}/></Link>
                       </div>
                     )}
                     </div>
                </div>}
                <div className="modal_container__main-body">
                    <div className="modal_container__main-body-item">
                        <MailOutlined />
                        <div>{userData.email}</div>
                        <div>Электронная почта</div>
                    </div>
                    <div className="modal_container__main-body-item">
                        <MailOutlined />
                        {userData.bio.startsWith("https://") ?  <a target="_blank" rel="noopener noreferrer" href={userData.bio}>{userData.bio}</a> :
                        <div>{userData.bio}</div>
                            }
                        <div>Bio</div>
                    </div>
                    <div className="modal_container__main-body-item">
                        <IdcardOutlined />
                        <div>{userData.id}</div>
                        <div>Идентификатор</div>
                    </div>
                    <div className="modal_container__main-body-item">
                        <HddOutlined />
                        <div>{userData.createdAt}</div>
                        <div>Дата регистрации</div>
                    </div>
                    {/* <div className="modal_container__main-body-item">
                        <CheckOutlined />
                        <div>{userData.confirmed ? `Да` : `Нет`}</div>
                        <div>Подтвержден</div>
                    </div> */}
                    <hr style={{color: '#ebebeb', marginTop: 20, marginBottom: 20}}/>
                </div>
               </div>
            </div>
            <Modal
           width="650px"
           style={{zIndex: 9999999999}}
           visible={!!previewImage}
           footer={null}
           onCancel={() => setPreviewImage(null)}
            >
          <img src={previewImage} style={{width: '100%'}} alt="prewiew"/>
          </Modal>
            </>
        )
   
}
