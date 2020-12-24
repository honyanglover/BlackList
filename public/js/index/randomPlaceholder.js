window.onload = () => {
    const placeholders = ['실험이 시작되었습니다', '절망의 끝까지 도달한 폰에게 모든 영광을'];
    const randomIndex = Math.floor(Math.random() * placeholders.length);
    document.getElementById('inputSearchbar').placeholder = placeholders[randomIndex];
};