
// Execute every snippet into Console

// Invite Fans to a Page
window.inviteDialog = document.querySelector('[role="dialog"] [role="checkbox"]').parentNode.parentNode.parentNode
var t = setInterval(() => {
	window.inviteDialog.scrollTo(0, window.inviteDialog.scrollHeight)
	Array.from( document.querySelectorAll('[role="dialog"] [aria-checked="false"]') ).forEach(e => e.click())
}, 100)

// Stop Scrolling
clearInterval(t)

// Evaluate Memory Usage
Math.round(window.performance.memory.totalJSHeapSize/1024/1024)
