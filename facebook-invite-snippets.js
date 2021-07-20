
// Execute every snippet into Console

// Common functions
function scrollAndDo(p) {
	window.job = setInterval(() => {
		p.scrollBox.scrollTo(0, p.scrollBox.scrollHeight)
		p.onScroll()
		if(p.scrollBox.offsetHeight + p.scrollBox.scrollTop < p.scrollBox.scrollHeight) {
			return
		}
		if(p.scrollBox.querySelector('div:last-child [data-visualcompletion="loading-state"]')) {
			return
		}
		stopScrolling()
		setTimeout(() => alert('Scrolling complete.'), 1 * 1000)
	}, 100)
}
function stopScrolling() {
	clearInterval( window.job )
}

// Invite Fans of a Page joining a group
scrollAndDo({
	scrollBox: document.querySelector('[role="dialog"]>:nth-child(3)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)'),
	onScroll:  () => Array.from( document.querySelectorAll('[role="dialog"] [aria-checked="false"]') ).forEach( e => e.click() )
})

// Invite Likes to a post to like a Page
scrollAndDo({
	scrollBox: document.querySelector('[role="dialog"] > :nth-child(3)'),
	onScroll:  () => Array.from( document.querySelectorAll('[role="dialog"] [role="button"]:not([aria-disabled="true"])[aria-label="Invita"]') ).forEach( e => e.click() )
})

// Stop Scrolling
stopScrolling()
