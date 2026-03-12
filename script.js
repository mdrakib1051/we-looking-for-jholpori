// খাম খোলা
function openLetter() {
    document.getElementById('mainEnvelope').classList.toggle('open');
}

// সালামি মেনু দেখানো
function openSalami(event) {
    event.stopPropagation(); // যাতে ক্লিক করলে খাম বন্ধ না হয়
    document.getElementById('salamiMenu').style.display = 'flex';
}

// টাকা দেখানো (Alert এর বদলে আপনি চাইলে আগের মতো ইমেজ ব্যবহার করতে পারেন)
function showTaka(amount) {
    document.getElementById('salamiMenu').style.display = 'none';
    alert("অভিনন্দন! আপনি " + amount + " টাকা ঈদ সালামি পেয়েছেন। ঈদ মোবারক!");
}

// মিউজিক কন্ট্রোল
const playBtn = document.getElementById('playBtn');
const audio = document.getElementById('bgMusic');

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play().catch(e => console.log("Audio play failed", e));
        playBtn.innerHTML = '<i class="fas fa-pause"></i> Pause Music';
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i> Play Music';
    }
});
