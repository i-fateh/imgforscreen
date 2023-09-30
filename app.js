document.addEventListener('DOMContentLoaded', function () {
    var srcElement = document.getElementById('src');
    var imgElement = document.getElementById('myImg');
  
    if (srcElement && imgElement) {
      var imgSrc = imgElement.currentSrc;
      // Exclure les 21 premiers caractères de la source de l'image
      var truncatedSrc = imgSrc.substring(33);
  
      srcElement.textContent = `Your screen is "${window.innerWidth}"px. So I get this image source 👉🏻 ${truncatedSrc}`;
    } else {
      console.log("Les éléments avec les ID 'src' et 'myImg' n'ont pas été trouvés.");
    }
  });