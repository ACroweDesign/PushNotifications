if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration);
    } ).catch(error => {
        console.log("SW registration failed!")
        console.log(error)
    })
} else {
    alert("not available")
}

navigator.serviceWorker.getRegistration().then(reg => {
    reg.pushManager.subscribe({
        userVisibleOnly: true
    }).then(sub => {
        // send sub.toJSON() to server
    });
});

function showNotification() {
    const notification = new Notification("New message from Hair By Jill Crowe!", {
        body: "new availablity coming this month!",
        icon: "https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/228912527_957989381647393_6200042251426789414_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oGp5Od_pRM0AX_PAQLI&_nc_ht=scontent-mia3-1.xx&oh=49881932db449d859da34abf431e6fa8&oe=615C7E72"
    });

    notification.onclick = (e) => {
        window.location.href = "https://www.jillcrowehair.com"
    }
}

function showNotification2() {
    const notification = new Notification("New message from Hair By Jill Crowe!", {
        body: "You need a network connection to proceed!",
        icon: "Images/hbjclogo512.png",
        vibrate: [200, 100, 200, 100, 200, 100, 400],
        image: "Images/Images/hbjclogo512.png"

    });

    notification.onclick = (e) => {
        window.location.href = "https://www.jillcrowehair.com"
    }
}

console.log(Notification.permission);

if(Notification.permission === "granted") {
    showNotification();
} else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        if(permission === "granted"){
            showNotification()
        }
        showNotification();
    })
}

const offline = document.getElementById('offline');

offline.addEventListener('click', showNotification2);
