

function Registration() {

    return (
        
        <div style={{width: '100%', height: '100vh', backgroundColor: "rgba(0, 0, 0, 0.85)", display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{width: '366px', height: '439px', backgroundColor: '#FFFFFF', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <img style={{width: '140px'}} src="./img/Group 18542.png" alt="logo"/>
                        <input className="welcome_input" placeholder="ЛОГИН"/>
                        <input className="welcome_input" placeholder="Пароль"/>
                        <input className="welcome_input" placeholder="Повторите пароль"/>
                        {/* <button type="button" className="welcome__button-login" onClick={() => console.log('---')}>Зарегистрироваться</button> */}
                    </div>
                </div>
    )
}
 
export default Registration;