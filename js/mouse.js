
var fs = 20; 
function spider()
{
    var x = window.event.clientX;
    var y = window.event.clientY; 
    document.getElementById('web').style.top = y + 2; 
    document.getElementById('web').style.left = x + 5;
    

    if(window.event.ctrlKey)
        {
            fs++; 
            document.getElementById('web').style.fontSize = fs; 
        }
    if(window.event.altKey)
        {
            fs--; 
            document.getElementById('web').style.fontSize = fs;
        }
}
function wizards()
{
    if(document.getElementById('web').style.display == "none")
    {document.getElementById('web').style.display = "block";}

    else
        {document.getElementById('web').style.display = "none";}; 
}
function worm()
{
    document.getElementById('web').innerHTML = document.getElementById('txt').value;
}
function red()
{
    document.getElementById('web').style.backgroundColor = "red"; 
}
function blue()
{
    document.getElementById('web').style.backgroundColor = "blue"; 
}
function pink()
{
    document.getElementById('web').style.backgroundColor = "pink"; 
}
// function magic()
// {
//     document.getElementById('web').style.display = "block"; 
// }

function myFunction()
{
    document.getElementById("myDropdown").classList.toggle("show");
}