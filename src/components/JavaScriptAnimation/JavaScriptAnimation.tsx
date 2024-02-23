import './JavaScriptAnimation.css';



const JavaScriptAnimation = () => {

    const name = "Programing Hero";

    const nameArr = name.split('');

    return (
        <div className='main2'>
            <div className='container'>
                {
                    nameArr.map((item,i) => (
                        <span className='alphabet' style={{transitionDelay: `${i * 30}ms`}}>{item}</span>
                        ))
                }
            </div>
        </div>
    );
};

export default JavaScriptAnimation;