const button = document.querySelector('button')!;
let id = 'Max';
function ClickHandler(message: string){
    //let UserName = 'Max';
    console.log('Clicked!' + message);
    
}
function add (n1 : number, n2: number): number
{
    if(n1 + n2 > 0)
    {
        return n1 + n2;
    }
    return 0;
}
if(button)
{
    button?.addEventListener('click', ClickHandler.bind(null, "you are Welcome!"));
}
