

const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');

btnHam.addEventListener('click',function(){if(btnHam.className !== "")
{
	btnHam.style.dispaly = "none";
	btnTimes.style.dispaly = "block";
	navBar.classList.add("show-nav");
}
})

btnTimes.addEventListener('click',function(){
	if(btnHam.className !== "")
	{
     this.style.dispaly = "none";
     btnHam.style.dispaly = "block";
     navBar.classList.remove("show-nav");
	}
})