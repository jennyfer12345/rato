const clickedButtons = [];

function buttonClick(btnNumber) {
  const upImg = document.querySelector(
    'img[src="/imagem/btn' + btnNumber + '-up.gif"]'
  );

  const downimagem = document.querySelector(
    'img[src="/imagem/btn' + btnNumber + '-down.gif"]'
  );

  const check = document.querySelector(
    'img[src="/imagem/checkmark' + btnNumber + '.gif"]'
  );

  if (upImg && downimagem) {
    upImg.classList.add("hidden");

    downimagem.classList.remove("hidden");

    check.classList.remove("hidden");

    setTimeout(function () {
      upImg.classList.remove("hidden");

      downimagem.classList.add("hidden");
    }, 100);

    if (!clickedButtons.includes(btnNumber)) {
      clickedButtons.push(btnNumber);
    }

    if (clickedButtons.length === 11) {
      showTestButton();
    }
  }
}

function showTestButton() {
  const testButton = document.querySelector('img[src="/imagem/continue.gif"]');

  if (testButton) {
    testButton.classList.remove("hidden");
  }
}
