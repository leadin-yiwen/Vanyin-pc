$(function() {

	$(".swiperbanner").hover(function() {
		myBanner.stopAutoplay()
	}).mouseleave(function() {
		myBanner.startAutoplay()
	})

	$(".swiperdesign").hover(function() {
		myDesign.stopAutoplay()
	}).mouseleave(function() {
		myDesign.startAutoplay()
	})

	$(".swiperprint").hover(function() {
		myPrint.stopAutoplay()
	}).mouseleave(function() {
		myPrint.startAutoplay()
	})

	$(".swiperecno").hover(function() {
		myEcno.stopAutoplay()
	}).mouseleave(function() {
		myEcno.startAutoplay()
	})
$(".printmenubox").mouseleave(function() {
		ClosePrintMenu("index");
	})
})

var myBanner = new Swiper('.swiperbanner', {
	loop: true,
	autoplay: 3000,
	speed: 1000,
	autoplayDisableOnInteraction: false,
	pagination: ".pagination",
	paginationType: 'custom',
	paginationClickable: true,
});
var myDesign = new Swiper('.swiperdesign', {
	effect: 'fade',
	loop: true,
	speed: 1000,
	autoplay: 2000,
	autoplayDisableOnInteraction: false,
	pagination: ".paginationdesign",
	paginationClickable: true,
});
var myPrint = new Swiper('.swiperprint', {
	effect: 'fade',
	loop: true,
	speed: 1000,
	autoplay: 2000,
	autoplayDisableOnInteraction: false,
	pagination: ".paginationprint",
	paginationClickable: true,
});
var myEcno = new Swiper('.swiperecno', {
	loop: true,
	speed: 1500,
	autoplay: 4000,
	autoplayDisableOnInteraction: false,
	slidesPerView: 4,
	slidesPerGroup: 4,
	spaceBetween: 48,
	slidesPerView: 'auto',
	loopedSlides: 7,
	paginationClickable: true,
});