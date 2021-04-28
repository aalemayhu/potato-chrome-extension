const plantPotato = () => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                const tabId = tabs[0].id;
                chrome.scripting.executeScript(
                        { 
                                target: {tabId: tabId, allFrames: true},
                                function: () => { alert('amazing') },
                        },
                        (ir) => {
                                console.log(ir)
                        }
                )

        })
}
console.log('x1TRIGGERED')
document
        .getElementById('plant-button')
        .addEventListener('click', plantPotato)
