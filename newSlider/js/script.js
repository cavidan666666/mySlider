
var sliderIndex = 1;

function showDiws(n)
{
var sekiller = document.getElementsByClassName("menimSliderim");
var i;

if(n > sekiller.length)
{
   sliderIndex = 1;
}
if(n < 1)
{
  sliderIndex = sekiller.length;
}

for(i = 0; i< sekiller.length;i++)
{
  sekiller[i].style.display = "none";
}
sekiller[sliderIndex - 1].style.display = "block";
};
showDiws(sliderIndex);

function pusDiv(n)
{
  showDiws(sliderIndex += n);
};