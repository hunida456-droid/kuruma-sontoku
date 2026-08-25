export const yen = n => Math.round(Number(n)||0).toLocaleString('ja-JP') + '円';
export const years = n => Number.isFinite(n) ? `${n.toFixed(1)}年` : '回収不可';
export function annualFuelCost(distance, efficiency, price){
  distance=Number(distance); efficiency=Number(efficiency); price=Number(price);
  return efficiency>0 ? distance/efficiency*price : 0;
}
export function annualEvCost(distance, efficiencyKmKwh, electricity){
  distance=Number(distance); efficiencyKmKwh=Number(efficiencyKmKwh); electricity=Number(electricity);
  return efficiencyKmKwh>0 ? distance/efficiencyKmKwh*electricity : 0;
}
export function paybackYears(extraPrice, annualSaving){
  extraPrice=Number(extraPrice); annualSaving=Number(annualSaving);
  return annualSaving>0 ? extraPrice/annualSaving : Infinity;
}
export function annualOwnership({fuel,insurance,tax,parking,maintenance,loan}){
  return [fuel,insurance,tax,parking,maintenance,loan].reduce((a,b)=>a+(Number(b)||0),0);
}
