let nameHero, xp, lvlHero;

nameHero = "Ellen";
xp = Math.floor(Math.random() * 10000);

if (xp <= 1000) {
    lvlHero = 'Ferro'
} else if (xp <= 2000) {
    lvlHero = 'Bronze'
} else if (xp <= 5000) {
    lvlHero = 'Prata'
} else if (xp <= 7000) {
    lvlHero = 'Ouro'
} else if (xp <= 8000) {
    lvlHero = 'Platina'
} else if (xp <= 9000) {
    lvlHero = 'Ascendente'
} else if (xp <= 10000) {
    lvlHero = 'Imortal'
} else {
    lvlHero = 'Radiante'
}

console.log("O Herói " + nameHero + " está no nível " + lvlHero + ", possuindo " + xp + " de xp.");