import addMessage from "./addMsg";

//Map state to props
const mapStateToProps = (state) => {
    return {
        messages: state
    }
}

//Map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message) => {
            dispatch(addMessage(message));
        }
    }
}

export {mapStateToProps, mapDispatchToProps};