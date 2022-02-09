import React from 'react'
import './css/footer.css'
import IconShop from '../../static/image/shop-icon.png'
import IconPhone from '../../static/image/phone_PNG48987.png'
import IconThank from '../../static/image/hinh-anh-dong-cam-on-dep-cho-slide-powerpoint-1536x1073.gif'

const Footer = () => {
    return (
        <div className='admin_footer'>
          <div className='admin_footer-container'>
            <div className='admin_footer-left'>
                <p>Vui lòng !</p>
                <p>Thao tác cẩn thận</p>
                <img src={IconThank} className='admin_footer-left-icon' alt='sdfsdf'/>
            </div>
            <div className='admin_footer-center'>
                <p className='admin_footer-center-text'>Sport</p>
                <img src={IconShop} className='admin_footer-center-img' alt='sdfsdf'/>
                <p className='admin_footer-center-text'>Shop</p>
            </div>
            <div className='admin_footer-right'>
                <button className='admin_footer-right-btn'>Hỗ trợ</button>
                <div className='admin_footer-right-phone'>
                    <img src={IconPhone} className='admin_footer-right-phone-icon' alt='sdfsdf'/>
                    <p>0987654321</p>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Footer
