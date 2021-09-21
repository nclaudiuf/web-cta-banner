// Importing JavaScript
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.

// Option 1
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency

import lozad from 'lozad';

const observer = lozad(); // lazy load
observer.observe();

labelAnimation();

function labelAnimation() {
	const labels = document.querySelectorAll('.label-animated');

	if (labels !== undefined) {
		labels.forEach(label => {
			label.innerHTML =
				'<div><span>' + label.textContent.trim('').split('').join('</span><span>');
			label
				.querySelectorAll('span')
				.forEach(character =>
					character.textContent === ' '
						? character.classList.add('label-spacer')
						: ''
				);
		});
	}
}
