import '../styles/components.css'
import vk from '../assets/vk.svg'
import yt from '../assets/yt.png'
const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footer">
                <div>   
                    <p className='Jura' style={{fontSize:"18px"}}>Свяжитесь с нами:</p>
                    <p className='Jura' style={{fontSize:"18px"}}>is2@mail.ru<br/></p>
                </div>
                <div>
                    <p className='Jura' style={{fontSize:"18px"}}>Ссылки</p>
                    <a href='https://vk.com/mospolytech'>
                        <img src={vk} alt="Группа вконтакте" style={{width:"30px", height:"30px"}}/>
                    </a>
                    <a href='https://www.youtube.com/@ЦентрСАПР-разработки/featured'>
                        <img src={yt} alt="Канал в youtube" style={{width:"34px", height:"36px", marginLeft:"10px"}}/>
                    </a>
                </div>
            </div>
            <div style={{width:"100%", height:"40px", backgroundColor:"white", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <p className='Jura' style={{fontSize:"18px"}}>@Лаборатория САПР, 2025</p>
            </div>
        </div>
        
    )
}
export default Footer;