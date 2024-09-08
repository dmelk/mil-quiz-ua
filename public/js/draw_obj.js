function selectObjType() {
  const objType = document.getElementById('objTypeSelect').value;
  if (objType === '') {
    hideItemFields();
    hideUnitFields()
    return;
  }
  if (objType === 'item') {
    hideUnitFields();
    showItemFields();
    return;
  }
  if (objType === 'unit') {
    hideItemFields();
    showUnitFields();
  }
}

function hideUnitFields() {
  document.getElementById('groundTroopSelectDiv').classList.add('hidden');
  document.getElementById('unitSizeSelectDiv').classList.add('hidden');
  document.getElementById('unitModifierDiv').classList.add('hidden');
}

function showUnitFields() {
  document.getElementById('groundTroopSelectDiv').classList.remove('hidden');
  document.getElementById('unitSizeSelectDiv').classList.remove('hidden');
  document.getElementById('unitModifierDiv').classList.remove('hidden');
}

function hideItemFields() {
  document.getElementById('itemNameSelectDiv').classList.add('hidden');
  document.getElementById('itemTowSelectDiv').classList.add('hidden');
  document.getElementById('itemSizeSelectDiv').classList.add('hidden');
}

function showItemFields() {
  document.getElementById('itemNameSelectDiv').classList.remove('hidden');
  document.getElementById('itemTowSelectDiv').classList.remove('hidden');
  document.getElementById('itemSizeSelectDiv').classList.remove('hidden');
}

function generateObj() {
  const objType = document.getElementById('objTypeSelect').value;
  if (objType === '') {
    return;
  }
  const data = (objType === 'item') ? getItemData() : getUnitData();
  const symbolArray = [
    '10', // base
    '0', // context
    document.getElementById('sideSelect').value, // side
    data.scheme,
    document.getElementById('statusSelect').value, // status
    data.headquarters, // headquarters modifier
    data.towSymbol, // towed
    data.genericId
  ];
  if (data.hasSize) {
    symbolArray.push(data.size);
  }

  if (typeof data.modifier1 !== 'undefined') {
    symbolArray.push(data.modifier1);
  } else {
    symbolArray.push('00');
  }

  if (typeof data.modifier2 !== 'undefined') {
    symbolArray.push(data.modifier2);
  } else {
    symbolArray.push('00');
  }

  var reinforcedReduced = '';
  if (data.isAmplified && data.isReduced) {
    reinforcedReduced = '±';
  } else if (data.isAmplified) {
    reinforcedReduced = '+';
  } else if (data.isReduced) {
    reinforcedReduced = '-';
  }

  const symbol = new ms.Symbol(symbolArray.join(''), {
    size: 50,
    reinforcedReduced: reinforcedReduced,
  });
  // clear prev symbol
  document.getElementById('symbol').innerHTML = '';
  // append new symbol
  document.getElementById('symbol').appendChild(symbol.asDOM());
}

function getItemData() {
  const itemName = document.getElementById('itemNameSelect').value;
  const sizeSelectedValue = document.getElementById('sizeSelect').value;
  const tow = document.getElementById('towSelect').value;

  let size = null;
  for (const sizeItem of equipmentSizeModifiers) {
    if (sizeItem.symbol === sizeSelectedValue) {
      size = sizeItem;
      break;
    }
  }
  if (size === null) {
    return {};
  }

  let base = null;
  for (const groundItem of groundEquipments) {
    if (groundItem.genericId === itemName) {
      base = groundItem;
      break;
    }
  }
  if (base === null) {
    for (const airItem of airEquipments) {
      if (airItem.genericId === itemName) {
        base = airItem;
        break;
      }
    }
  }
  if (base === null) {
    return {};
  }

  return {
    towSymbol: tow,
    size: base.hasSize ? size.symbols[base.sizeIndex] : '',
    hasSize: base.hasSize,
    genericId: base.genericId,
    scheme: base.scheme,
    headquarters: '0',
    isAmplified: false,
    isReduced: false,
  }
}

function getUnitData() {
  // get if checkbox is checked
  const unitType = document.getElementById('groundTroopSelect').value;
  var base = null;
  for (const troop of groundTroops) {
    if (troop.optionValue === unitType) {
      base = troop;
      break;
    }
  }
  if (base === null) {
    return {};
  }

  const isHeadquarters = document.getElementById('isHeadquartersCheckbox').checked;
  const isTaskGroup = document.getElementById('isTaskGroupCheckbox').checked;
  const isHeadquartersUnit = document.getElementById('isHeadquartersUnitCheckbox').checked;
  const isSupplyUnit = document.getElementById('isSupplyUnitCheckbox').checked;

  var headquarters = '0';
  if (isHeadquarters && isTaskGroup) {
    headquarters = '6';
  } else if (isHeadquarters) {
    headquarters = '2';
  } else if (isTaskGroup) {
    headquarters = '4';
  }

  return {
    towSymbol: document.getElementById('unitSizeSelect').value,
    size: '',
    hasSize: false,
    genericId: base.genericId,
    scheme: base.scheme,
    headquarters: headquarters,
    modifier1: (base.modifier1) ? base.modifier1 : (isHeadquartersUnit ? '98' : '00'),
    modifier2: (base.modifier2) ? base.modifier2 : (isSupplyUnit ? '62' : '00'),
    isAmplified: document.getElementById('isAmplifiedCheckbox').checked,
    isReduced: document.getElementById('isReducedCheckbox').checked,
  }
}

function initDrawObjPage() {
  fillObjFormFields();
}