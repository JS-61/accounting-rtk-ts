import {useState} from "react";

interface ChangePasswordProps {
    close: () => void;
}

const ChangePassword = ({close}: ChangePasswordProps) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleClickSave = () => {
        if (newPassword !== confirmPassword) {
            alert(`ChangePassword  ${oldPassword}`);
            close();
        } else {
            alert("Password changed successfully.");
        }

    }

    function handleClickClear() {
        setNewPassword('');
        setNewPassword('');
        setConfirmPassword('');
    }

    return (
        <>
            <label>Old password:
                <input
                type="password"
                onChange={(e) => setOldPassword(e.target.value)}
                value={oldPassword}/>
            </label>
            <label>New password:
                <input
                    type="password"
                    onChange={(e) => setNewPassword(e.target.value)}
                    value={newPassword}/>
            </label>
            <label>Confirm password:
                <input
                    type="password"
                    onChange={(e) =>  setConfirmPassword(e.target.value)}
                    value={confirmPassword}/>
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={close}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};
export default ChangePassword;