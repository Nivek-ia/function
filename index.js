function racineCarree(nombre) {
    if (nombre < 0) {
      throw new Error("Impossible de calculer la racine carrée d'un nombre négatif");
    }
    return Math.sqrt(nombre);
  }
  
  // Pour pouvoir l'importer dans le test si besoin
  module.exports = racineCarree;
  