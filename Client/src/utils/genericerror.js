export const genericerror=(error)=>{
    if(error.response.status===401){
        localStorage.clear();
        window.location.href="/login"
    }
}