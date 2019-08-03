function writeInput()
{
    var write = document.getElementById('InputA').value;
    alert(write);
}

function check()
{
    var checkBox = document.getElementById('InputB');

    if(checkBox.checked)
    {
        alert("Casilla marcada !!");
    }
    else
    {
        alert("Casilla no marcada...");
    }
}

function read()
{
    var select = document.getElementById('InputC').value;
    alert(select);
}

function points()
{
    var radio1 = document.getElementById('1');
    var radio2 = document.getElementById('2');
    var radio3 = document.getElementById('3');

    if(radio1.checked)
    {
        alert('Option1');
    }

    if(radio2.checked)
    {
        alert('Option2');
    }

    if(radio3.checked)
    {
        alert('Option3');
    }
}