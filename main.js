// 즉시 실행 함수(전체영역에 영향이 없도록 구분)
(function(window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', () => {
        toggleElements();
    });

    window.addEventListener('resize', () => {
        if(window.innerWidth > 1024) {
            // 윈도우 사이즈를 변경했을 때  1024보다 작으면 Off toggle
            offElements();
        }
    });

    function toggleElements() {
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.remove('on');
        });
    }
})(window, document)