

document.getElementById("boton_ocultar").addEventListener("click", function()
{
  document.getElementById("txt").style.display = "none";
})

document.getElementById("boton_mostrar").addEventListener("click", function()
{
  document.getElementById("txt").style.display = "flex";
})

document.getElementById("boton_cambiarfoto2").addEventListener("click", function()
{
  document.getElementById("foto").src = "https://scontent.fsde2-1.fna.fbcdn.net/v/t1.6435-9/143249104_1986304764842446_4377538511227955583_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1LIvwCijSg0AX8gTa2F&_nc_ht=scontent.fsde2-1.fna&oh=00_AfAHw_hdKwVltCX-YxoXK8fJp6cb9hsaKzrO8hjFxs2OSg&oe=6525AF13";
})

document.getElementById("boton_cambiarfoto1").addEventListener("click", function()
{
  document.getElementById("foto").src = "https://lh3.googleusercontent.com/a/AAcHTteFURbIwBaL--RlplOIqWKpKnGCXUVy7OFinwP-gF43iQ=s288-c-no";
})


const collection = document.getElementsByClassName("titulo");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "yelow";
}