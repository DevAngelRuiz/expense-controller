export type Category = {
    //coloca-se [tag: string] p facilitar e ser possivel add qqr categoria, tipo várias, como: food, healthy, salary entre outras
    
    [tag: string]:{
        title: string;
        color: string;
        expense: boolean
    }
}