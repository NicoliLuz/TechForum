import SignSignUp from "../componentes/SignSignup";

function SignSignup() {

    const rootElement = document.getElementById('mainId');
    if (rootElement) {
        ReactDOM.render(<SignSignUp />);
    }
}