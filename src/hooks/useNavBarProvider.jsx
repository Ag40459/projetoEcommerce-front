import { useState } from "react";

function useNavBarProvider() {
    const [openCloseModalMenu400, setOpenCloseModalMenu400] = useState(true);

    return {
        openCloseModalMenu400,
        setOpenCloseModalMenu400
    }
}

export default useNavBarProvider;