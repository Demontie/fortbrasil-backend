export function calcDistance(latShop, lngShop, latAtual, lngAtual) {
  const raio = 6371;
  const dLat = (latAtual - latShop) * (Math.PI / 180);
  const dLon = (lngAtual - lngShop) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(latShop * (Math.PI / 180)) *
      Math.cos(latAtual * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = raio * c;

  return d;
}
export const foo = Math.PI + Math.SQRT2;
