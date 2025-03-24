import Logo from "../Logo/Logo";
import TextoHeader from "../Elementos/Textos/TextoHeader/TextoHeader";
import { Stetico } from './Style';

const Header = () => (
    <Stetico>
        <Logo/>
        <TextoHeader/>
    </Stetico>
)

export default Header;