import { toast } from 'vue3-toastify';

export const toastSuccess = (toastConfig) => {
    toast.success(toastConfig.msg, {
        transition: toast.TRANSITIONS.ZOOM,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: toastConfig.duration
    })
}

export const toastError = (toastConfig) => {
    toast.error(toastConfig.msg, {
        transition: toast.TRANSITIONS.ZOOM,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: toastConfig.duration
    })
}