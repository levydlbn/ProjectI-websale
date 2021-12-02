import React from "react";
import { Link } from "react-router-dom";

import '../static/css/footer.css'
import '../static/css/base.css'

import iconFooter from '../static/image/20150827110756-dathongbao.png'

const Footer = () => {

    const listPages = [{
            title: 'HƯỚNG DẪN KHÁCH HÀNG',
            page1: 'Các hình thức mua hàng',
            page2: 'Chính sách bảo mật thông tin',
            page3: 'Hình thức thanh toán'
        },
        {
            title: 'CHÍNH SÁCH ƯU ĐÃI',
            page1: 'Quy định đổi trả - hoàn tiền',
            page2: 'Chính sách vận chuyển',
            page3: 'Chính sách bảo hành'
        },
        {
            title: 'SPORT.COM.VN',
            page1: 'Hệ thống 24/7',
            page2: 'Chính sách quy trình xử lý khiếu nại',
            page3: 'Quan điểm kinh doanh'
        },
        {
            title: 'TỔNG ĐÀI TRỢ GIÚP',
            page1: 'TƯ VẤN BÁN HÀNG',
            page2: 'M.BẮC: 0965.163.098 - M.NAM: 0342.234.456',
            page3: 'Thời gian: Tất cả các ngày trong tuần (24h/7)'
        }
    ]

    return ( <
        div className = "footer grid" >
        <
        div className = "footer-container grid wide" >
        <
        div className = "footer__above row col c-12" > {
            listPages.map((item) => ( <
                div key = { item.title }
                className = "footer__above-item col c-3" >
                <
                div className = "footer__above-item-header" >
                <
                Link to = "/"
                className = "footer__above-item-header-title" > { item.title } < /Link> <
                /div> <
                div className = "footer__above-item-body" >
                <
                Link to = "/"
                className = "footer__above-list-page" > { item.page1 } < /Link> <
                Link to = "/"
                className = "footer__above-list-page" > { item.page2 } < /Link> <
                Link to = "/"
                className = "footer__above-list-page" > { item.page3 } < /Link> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div> <
        div className = "footer__below" >
        <
        div className = "footer__below-content col c-12" >
        <
        h2 > HỆ THỐNG BÁN HÀNG THỂ THAO 24 / 7 < /h2> <
        h3 > -Showroom Hà Nội: Số 2 ngõ 143 Kim Mã - Ba Đình - Hà Nội < /h3> <
        h3 > Hotline: 234236655 3028 - 0904 555 756 - 0981 247 888 < /h3> <
        h3 > -Showroom Hải Phòng: Số 89 ngõ Lâm Tường - Tô Hiệu - Lê Chân - HP < /h3> <
        h3 > Hotline: 234 3858 235 - 098 468 1600 - 0868 515 789 < /h3> <
        h3 > -Email: banhangthethao247 @gmail.com - Facebook: 247 sport.vn < /h3> <
        a href = "http://online.gov.vn/" >
        <
        img src = { iconFooter }
        className = "footer__below-icon" / >
        <
        /a> <
        /div> <
        /div> <
        /div>
    )
}

export default Footer