document.addEventListener('DOMContentLoaded', function () {
	let sidenav = document.querySelectorAll('.sidenav');
	let instances_sidenav = M.Sidenav.init(sidenav);

	let modal = document.querySelectorAll('.modal');
	let instances_modal = M.Modal.init(modal);
	
	let gallery = document.querySelectorAll('.materialboxed');
	let instances_gallery = M.Materialbox.init(gallery);
});
