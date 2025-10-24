<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Ver feira no app</title>
  <script>
    function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }

    const fairId = getQueryParam('id');

    if (fairId) {
      const deepLink = `bwepo://feira/${fairId}`;
      const androidStore = 'https://play.google.com/store/apps/details?id=com.matheusener.bwepo';
      const iosStore = 'https://apps.apple.com/br/app/bwepo/id6743187782';

      const isAndroid = /android/i.test(navigator.userAgent);
      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (isAndroid) {
        window.location.href = deepLink;
        setTimeout(() => {
          window.location.href = androidStore;
        }, 2000);
      } else if (isIOS) {
        document.addEventListener('DOMContentLoaded', () => {
          const button = document.createElement('button');
          button.innerText = 'Abrir no app';
          button.style.padding = '1rem';
          button.style.fontSize = '1.2rem';
          button.style.borderRadius = '8px';
          button.style.background = '#ff40a0';
          button.style.color = 'white';
          button.style.border = 'none';
          button.style.cursor = 'pointer';

          button.onclick = () => {
            window.location = deepLink;
            setTimeout(() => {
              window.location = iosStore;
            }, 2000);
          };

          document.body.innerHTML = '<p>Para continuar, toque no botão abaixo:</p>';
          document.body.appendChild(button);
        });
      } else {
        document.addEventListener('DOMContentLoaded', () => {
          document.body.innerHTML = "<p>Por favor, abra este link em um dispositivo móvel.</p>";
        });
      }
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        document.body.innerHTML = '<p>Erro: Feira não encontrada. Verifique o link.</p>';
      });
    }
  </script>
</head>
<body>
  <p>Carregando...</p>
</body>
</html>
