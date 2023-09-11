import { HttpClient } from "@/plugins/httpClient";
import { toast } from 'vue3-toastify';

export const commonMixin = {
    computed: {
        isAuthenticated() {
          return this.$store.getters["authen/getToken"] || "";
        },
        $httpClient() {
          return new HttpClient("http://localhost:8080");
        },
    },
    methods: {
      showErrorMsg(msg){
        window.scrollTo({ top: 0, behavior: "smooth" });
        toast.error(msg, {
          transition: toast.TRANSITIONS.ZOOM,
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500
        });
      },

      showSuccessMsg(msg){
        window.scrollTo({ top: 0, behavior: "smooth" });
        toast.success(msg, {
          transition: toast.TRANSITIONS.ZOOM,
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500
        })
      }
    },
}