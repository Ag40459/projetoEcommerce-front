import { useState } from "react";

function useNavBarProvider() {
    const [openCloseModalMenu400, setOpenCloseModalMenu400] = useState(true);
    const [openClodesEye, setOpenClodesEye] = useState(true);
    const [captchaFilled, setCaptchaFilled] = useState(false);




    return {
        openCloseModalMenu400,
        setOpenCloseModalMenu400,
        openClodesEye,
        setOpenClodesEye,
        captchaFilled,
        setCaptchaFilled
    }
}

export default useNavBarProvider;