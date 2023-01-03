import axios from 'axios';

var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/95.15.195.62
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek
function kartOlustur(obje){

	const cardDiv = document.createElement("div");
	const bayrakImg = document.createElement("img");
	const cardInfo = document.createElement("div");
	const h3IpAdresi = document.createElement("h3");
	const pUlke = document.createElement("p");
	const pEnlemBoylam = document.createElement("p");
	const pSehir = document.createElement("p");
	const pSaatDilimi = document.createElement("p");
	const pParaBirimi = document.createElement("p");
	const pIsp = document.createElement("p");

	cardDiv.classList.add("card");
	cardInfo.classList.add("card-info");
	h3IpAdresi.classList.add("ip");
	pUlke.classList.add("ulke");

	bayrakImg.src = obje.ülkebayrağı ;
	h3IpAdresi.textContent = obje.sorgu ;
	pUlke.textContent = obje.ülke +"(" + obje.ülkeKodu +")" ;
	pEnlemBoylam.textContent = "Enlem: " + obje.enlem + "Boylam: "+obje.boylam ;
    pSaatDilimi.textContent = obje.saatdilimi ;
    pParaBirimi.textContent = obje.parabirimi ;
    pIsp.textContent = obje.isp ;

	cardDiv.appendChild(bayrakImg);
	cardDiv.appendChild(cardInfo);
	cardInfo.appendChild(h3IpAdresi);
	cardInfo.appendChild(pUlke);
	cardInfo.appendChild(pEnlemBoylam);
	cardInfo.appendChild(pSehir);
	cardInfo.appendChild(pSaatDilimi);
	cardInfo.appendChild(pParaBirimi);
	cardInfo.appendChild(pIsp);

	

	return cardDiv;
}

const cardsDiv = document.querySelector(".cards") ;

const connection = async function(){
	await ipAdresimiAl();
	axios .get("https://apis.ergineer.com/ipgeoapi/"+benimIP) .then((response)=>{
	cardsDiv.appendChild(kartOlustur(response.data))
}).catch((error)=>{
	console.log("Eror: "+error)
});
}
connection();