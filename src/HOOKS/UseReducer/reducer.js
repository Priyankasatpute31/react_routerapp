const reducer=(count,action)=>{
    if(action.type==="INC")
    {
        return count=count+1;
    }
    else{
        let num=0;
        count>=1? num=count-1:(num=0);
        return num;
    }
    return count;
}
export default reducer;