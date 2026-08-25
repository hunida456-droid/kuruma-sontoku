import {yen,years,annualFuelCost,annualEvCost,paybackYears,annualOwnership} from './calculators.mjs';
const $=s=>document.querySelector(s); const val=id=>Number($('#'+id)?.value||0);
function bind(){
 const type=document.body.dataset.tool;
 if(type==='fuel') calcFuel(); if(type==='ownership') calcOwnership(); if(type==='gas-hv') calcGasHv(); if(type==='hv-ev') calcHvEv(); if(type==='replace') calcReplace();
 document.querySelectorAll('input,select').forEach(el=>el.addEventListener('input',()=>bindOnce(type)));
}
function bindOnce(type){if(type==='fuel')calcFuel();if(type==='ownership')calcOwnership();if(type==='gas-hv')calcGasHv();if(type==='hv-ev')calcHvEv();if(type==='replace')calcReplace()}
function set(id,text){const el=$('#'+id); if(el) el.textContent=text}
function calcFuel(){const annual=annualFuelCost(val('distance'),val('efficiency'),val('fuelprice'));set('annual',yen(annual));set('monthly',yen(annual/12));set('perkm',`${(annual/Math.max(val('distance'),1)).toFixed(1)}円/km`)}
function calcOwnership(){const fuel=annualFuelCost(val('distance'),val('efficiency'),val('fuelprice'));const total=annualOwnership({fuel,insurance:val('insurance'),tax:val('tax'),parking:val('parking')*12,maintenance:val('maintenance'),loan:val('loan')*12});set('total',yen(total));set('monthly',yen(total/12));set('fuel',yen(fuel));set('parkingyear',yen(val('parking')*12))}
function calcGasHv(){const gas=annualFuelCost(val('distance'),val('gasEff'),val('fuelprice'));const hv=annualFuelCost(val('distance'),val('hvEff'),val('fuelprice'));const saving=gas-hv;const pb=paybackYears(val('extra'),saving);set('gas',yen(gas));set('hv',yen(hv));set('saving',yen(saving));set('payback',years(pb));set('tenyear',yen(saving*10-val('extra')))}
function calcHvEv(){const hv=annualFuelCost(val('distance'),val('hvEff'),val('fuelprice'));const ev=annualEvCost(val('distance'),val('evEff'),val('electricity'));const saving=hv-ev;const pb=paybackYears(val('extra'),saving);set('hv',yen(hv));set('ev',yen(ev));set('saving',yen(saving));set('payback',years(pb));set('tenyear',yen(saving*10-val('extra')))}
function calcReplace(){const old=annualFuelCost(val('distance'),val('oldEff'),val('fuelprice'))+val('oldMaintenance');const newer=annualFuelCost(val('distance'),val('newEff'),val('fuelprice'))+val('newMaintenance');const saving=old-newer;const net=val('purchase')-val('tradein');const pb=paybackYears(net,saving);set('old',yen(old));set('new',yen(newer));set('net',yen(net));set('saving',yen(saving));set('payback',years(pb))}
bind();
