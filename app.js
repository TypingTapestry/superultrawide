allSize = allPics.length;
$('.image img').each(function() {
	var x = Math.floor(allSize * Math.random());
	if ($(this).hasClass('allImages')) {
		$(this).attr('src', allPics[x]);
	};
});

photoSize = photoPics.length;
$('.image img').each(function() {
	var y = Math.floor(photoSize * Math.random());
	if ($(this).hasClass('photoImages')) {
		$(this).attr('src', photoPics[y]);
	};
});

artSize = artPics.length;
$('.image img').each(function() {
	var z = Math.floor(artSize * Math.random());
	if ($(this).hasClass('artImages')) {
		$(this).attr('src', artPics[z]);
	};
});

const downloadAll = async () => {
    let link = document.createElement('a');
    document.documentElement.append(link);

    const imgArr = document.querySelectorAll('img');
    for (let i = 1; i < imgArr.length; i++) {
        await fetch(imgArr[i].src)
            .then(res => res.blob())
            .then(blob => {
                let objectURL = URL.createObjectURL(blob);
                link.setAttribute('download', `image_${i}.jpg`);
                link.href = objectURL;
                link.click();
            });
    };
};

document.querySelector('#downloadSet').addEventListener('click', downloadAll);