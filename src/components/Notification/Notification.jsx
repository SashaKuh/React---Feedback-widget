import {StyledNotification} from './Notification.styled';

export const Notification = ({ message }) => {
    return(
        <StyledNotification>
        <p>{message}</p>
        </StyledNotification>
    )
};

