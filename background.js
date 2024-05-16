chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (changeInfo.status === 'complete') {
		chrome.scripting.executeScript({
			target: { tabId: tabId },
			function: async () => {
				const url = chrome.runtime.getURL('/src');
				const images = [
					`${url}/one.webp`,
					`${url}/two.webp`,
					`${url}/three.webp`,
					`${url}/four.webp`,
					`${url}/five.webp`,
					`${url}/six.webp`,
				];

				const popupDiv = document.createElement('img');
				const randomIndex = Math.floor(Math.random() * images.length);
				popupDiv.src = images[randomIndex];
				popupDiv.style.maxHeight = '30vh';
				popupDiv.style.objectFit = 'contain';

				popupDiv.style.position = 'fixed';
				popupDiv.style.bottom = '1em';
				popupDiv.style.right = '1em';
				popupDiv.style.background = '#ffffff';
				popupDiv.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0.5)';
				popupDiv.style.zIndex = '99999';

				document.body.appendChild(popupDiv);
			},
		});
	}
});
