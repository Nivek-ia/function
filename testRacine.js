const racineCarree = require('./index');

function testRacineCarree() {
  const valeurTest = 16;
  const attendu = 4;

  const resultat = racineCarree(valeurTest);

  if (resultat === attendu) {
    console.log("✅ Test réussi : racineCarree(16) === 4");
  } else {
    console.error(`❌ Test échoué : racineCarree(16) === ${resultat}, attendu ${attendu}`);
  }

  // Test avec valeur négative
  try {
    racineCarree(-9);
    console.error("❌ Test échoué : aucune erreur pour un nombre négatif");
  } catch (e) {
    console.log("✅ Test réussi : erreur détectée pour racineCarree(-9)");
  }
}

testRacineCarree();
