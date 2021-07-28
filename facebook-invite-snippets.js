
// Execute every snippet into Console

// Common functions
function autoscroll() {
	try {
		var scrollBox = Array.from( document.querySelectorAll('[role="dialog"] [role="progressbar"][data-visualcompletion="loading-state"]') ).pop().parentNode.parentNode.parentNode.parentNode
	} catch(e) {
		console.log('unidentified box to scroll')
		return
	}
	window.job = setInterval(() => {
		if(scrollBox.offsetHeight + scrollBox.scrollTop == scrollBox.scrollHeight) {
			return
		}
		scrollBox.scrollTo(0, scrollBox.scrollHeight)
		if(scrollBox.querySelector('[role="progressbar"][data-visualcompletion="loading-state"]')) {
			// keep scrolling
			return
		}
		clearInterval( window.job )
		setTimeout(() => console.log('Scrolling complete.'), 1 * 1000)
	}, 100)
}
function stopAutoscroll() {
	clearInterval( window.job )
}

// Autoscroll
autoscroll()

// Group
Array.from( document.querySelectorAll('[role="dialog"] [aria-checked="false"]:not([aria-disabled="true"])') ).map( e => e.click() ).length // Group

// Post
Array.from( document.querySelectorAll('[role="dialog"] [role="button"]:not([aria-disabled="true"])[aria-label="Invita"]') ).map( e => e.click() ).length // Post

// Stop Scrolling
stopAutoscroll()
