AOS.init()

lightbox.option({
	'alwaysShowNavOnTouchDevices': true,
	'wrapAround': true
})

var musik = ''
var audio = document.querySelector('.audio')
if (musik) 
{
	audio.src = musik
}

function mulai() 
{
	audio.play()
	window.scrollTo(0, 0)
	var mail_section = $('#mail-section')
	$('#mail').attr('src', 'assets/img/mail.gif')
	setTimeout(function() {
		mail_section.css('opacity', 0)
		$('body').removeClass('overflow-hidden')
	}, 2000)
	setTimeout(function() {
		mail_section.removeClass('d-flex')
		mail_section.addClass('d-none')
	}, 4000)
}

function wa(isi) 
{
	open("https://wa.me/6282386447472?text=Makasih ya abang udah inget hari ulang tahun adek, adek sayang sama abang, di hari spesial ini adek mau " + isi)
}

async function makeawish() 
{
	var {
		value: kado
	} = await swal.fire({
		imageUrl: 'assets/img/make_a_wish.png',
		title: 'Di hari spesial ini, kamu mau apa?',
		imageWidth: 400,
		imageHeight: 400,
		confirmButtonColor: '#2fe965',
		confirmButtonText: 'Kirim ✈',
		input: 'text',
		showCancelButton: false
	})

	if (kado) {
		await swal.fire({
			imageUrl: 'assets/img/icon_wa.png',
			title: 'Kirim jawabannya ke wa abang ya?',
			confirmButtonColor: '#2fe965',
			confirmButtonText: 'Kirim ✈'
		})
		wa(kado)
	} else {
		await swal.fire({
			icon: 'error',
			title: 'Diisi dong Cantik, Jangan dikosongin gitu aja!!!'
		})
		makeawish()
	}
}