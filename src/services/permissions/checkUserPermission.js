import {redirectTo} from "@/services/redirectTo";
import {useStore} from "vuex";
import {showToast} from "@/services/customToast";
import {useI18n} from "vue-i18n";

export function checkUserRole(role) {
    const store = useStore();
    const { t } = useI18n();

    if (store.state[role]) {
        return true; // User has permission to access
    } else {
        setTimeout(() => {
            showToast(t('you_are_not_allowed'), 'error');
        }, 1000);
        redirectTo(store, "NotAuthorized");
    }
}




/*
export function checkUserIsAdmin(){
    const store = useStore();
    const { t } = useI18n()

    if (store.state.isAdmin) {
        return true; // User has permission to access
    }else {
        setTimeout(()=>{
            showToast(t('you_are_not_allowed'), 'error');
        }, 1000);
        redirectTo(store, "NotAuthorized")
    }

}

export function checkUserIsManager(){
    const store = useStore();
    const { t } = useI18n()

    if (store.state.isManager){
        console.log("I am manager by the way")
        return true;
    }else {
        setTimeout(()=>{
            showToast(t('you_are_not_allowed'), 'error');
        }, 1000);
        redirectTo(store, "NotAuthorized")
    }

}

export function checkUserIsPos(){
    const store = useStore();
    const { t } = useI18n()

    if (store.state.isPOS){
        return true;
    }else {
        setTimeout(()=>{
            showToast(t('you_are_not_allowed'), 'error');
        }, 1000);
        redirectTo(store, "NotAuthorized")
    }

}
*/

