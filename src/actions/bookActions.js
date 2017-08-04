

export const test = () => {
    console.log("Hello World!!!");

    //alert("Yupee!!");

    return{
        type:"USER_SELECTED",
        payload:"Accime"
    }
};

export const sad = () => {
    console.log("I am sad");

    //salert("You texted and mention that you are said!!");
    return{
        type:"STATUS",
        payload:'Esterling'
    }
}