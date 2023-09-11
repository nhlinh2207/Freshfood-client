import { toast } from 'vue3-toastify';

export const toastSuccess = (toastConfig) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    toast.success(toastConfig.msg, {
        transition: toast.TRANSITIONS.ZOOM,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: toastConfig.duration
    })
}

export const toastError = (toastConfig) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    toast.error(toastConfig.msg, {
        transition: toast.TRANSITIONS.ZOOM,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: toastConfig.duration
    })
}