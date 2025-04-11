import {redirectTo} from "@/services/redirectTo";
import {useStore} from "vuex";
import {useI18n} from "vue-i18n";
import {showToast} from "@/services/customToast";
import Cookies from "js-cookie";

export function checkUserLogin(){
    const store = useStore();
    const { t } = useI18n()
    // let getUserLogin = localStorage.getItem("user-info")
    let getUserLogin = Cookies.get('tokenOfUser')
    if (!getUserLogin){
        setTimeout(()=>{
            showToast(t('you_are_not_login'), 'error');
        }, 1000);
        redirectTo(store,"Signin")
    }


}