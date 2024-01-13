import EditableInput from "./EditableInput"

function Hero(props) {
    if(props.editable === true) {
        return (
            <div className="hero">
                <div className="hero-name">
                    Name : <EditableInput type="text" editable={true} classname="hero-name" name="hero-name" initValue="Name"/>
                </div>

                <div className="hero-phone">
                    Phone : <EditableInput type="tel" editable={true} classname="hero-phone" name="hero-phone" initValue="0000000000"/>
                </div>

                <div className="hero-email">
                    Email : <EditableInput type="email" editable={true} className="hero-email" name="hero-email" initValue="abc@abc.com" />
                </div>
            </div>
        )
    } else {
        return (
            <div className="hero">
                <div className="hero-name">
                    <span></span><EditableInput type="text" editable={false} className="hero-name" name="hero-name" initValue="Name"/>
                </div>

                <div className="hero-phone">
                    <span></span><EditableInput type="tel" editable={false} classname="hero-phone" name="hero-phone" initValue="0000000000"/>
                </div>

                <div className="hero-email">
                    <span></span><EditableInput type="email" editable={false} className="hero-email" name="hero-email" initValue="abc@abc.com" />
                </div>
            </div>
        )
    }
}

export default Hero