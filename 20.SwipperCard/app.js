window.addEventListener('DOMContentLoaded', (e) => { 
    
    const $trackers = document.querySelectorAll('.mouse__position__tracker');
    $trackers.forEach(function ($tracker) { 
        $tracker.addEventListener('click', function (e) { 
            let $card = this.closest('.card__wrapper').querySelector('.card');
            $card.classList.toggle('flipped--card');
        });
    });
});
