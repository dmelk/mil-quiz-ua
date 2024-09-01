function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function fillSelect(select, values) {
  const newValues = values.slice();
  newValues.sort((a, b) => a.name.localeCompare(b.name));

  for (const value of newValues) {
    const option = document.createElement('option');
    option.value = value.symbol;
    option.text = value.name;
    select.appendChild(option);
  }
}

function fillFormFields() {
  fillSelect(document.getElementById('sideSelect'), sideTypes);
  fillSelect(document.getElementById('statusSelect'), statuses);
  fillSelect(document.getElementById('towSelect'), towTypes);
  fillSelect(document.getElementById('sizeSelect'), equipmentSizeModifiers);
  fillSelect(document.getElementById('unitSizeSelect'), unitSizes);

  const itemNames = [];
  for (const iconType of iconTypes) {
    if (iconType.type !== 'groundEquipment' && iconType.type !== 'airEquipment') {
      continue;
    }
    for (const item of iconType.list) {
      itemNames.push({
        name: item.name,
        symbol: item.genericId
      });
    }
  }
  fillSelect(document.getElementById('itemNameSelect'), itemNames);

  const groundTroopNames = [];
  for (const troop of groundTroops) {
    groundTroopNames.push({
      name: troop.name,
      symbol: troop.optionValue
    })
  }
  fillSelect(document.getElementById('groundTroopSelect'), groundTroopNames);
}

function defineIcon(iconType, base) {
  const sideIdx = getRandomInt(sideTypes.length),
    side = sideTypes[sideIdx];

  sideValue = side.symbol;
  if (iconType === 'groundTroops') {
    troopNameValue = base.optionValue;
  } else {
    itemNameValue = base.genericId;
  }

  const statusIdx = getRandomInt(statuses.length),
    status = statuses[statusIdx];

  statusValue = status.symbol;

  // generate modifiers
  if (iconType === 'groundTroops') {
    modifierFlags.isHeadquarters = getRandomInt(10) > 8;
    modifierFlags.isTaskGroup = getRandomInt(10) > 8;
    modifierFlags.isHeadquartersUnit = getRandomInt(10) > 8;
    modifierFlags.isSupplyUnit = getRandomInt(10) > 8;
    const amplifiedRandom = getRandomInt(10);
    modifierFlags.isAmplified = amplifiedRandom < 3;
    modifierFlags.isReduced = amplifiedRandom >= 3 && amplifiedRandom < 6;
  }

  var headquarters = '0';
  if (modifierFlags.isHeadquarters && modifierFlags.isTaskGroup) {
    headquarters = '6';
  } else if (modifierFlags.isHeadquarters) {
    headquarters = '2';
  } else if (modifierFlags.isTaskGroup) {
    headquarters = '4';
  }

  var towSizeIdx = 0,
    towSize = towTypes[0];
  towValue = towSize.symbol;
  if (iconType === 'groundEquipment' && base.canBeTowed) {
    const isTowed = getRandomInt(10) > 8;
    if (isTowed) {
      towSizeIdx = getRandomInt(towTypes.length);
      towSize = towTypes[towSizeIdx];
      towValue = towSize.symbol;
    }
  } else if (iconType === 'groundTroops') {
    towSizeIdx = getRandomInt(unitSizes.length);
    towSize = unitSizes[towSizeIdx];
    unitSizeValue = towSize.symbol;
  }

  const symbolArray = [
    '10', // base
    '0', // context
    side.symbol, // side
    base.scheme,
    status.symbol, // status
    headquarters, // headquarters modifier
    towSize.symbol, // towed
    base.genericId
  ];

  if (base.hasSize) {
    const sizeIdx = getRandomInt(equipmentSizeModifiers.length),
      size = equipmentSizeModifiers[sizeIdx];
    symbolArray.push(size.symbols[base.sizeIndex]);
    sizeValue = size.symbol;
  }

  if (typeof base.modifier1 !== 'undefined') {
    modifierFlags.isHeadquartersUnit = false;
    symbolArray.push(base.modifier1);
  } else {
    symbolArray.push(modifierFlags.isHeadquarters ? '98' : '00');
  }

  if (typeof base.modifier2 !== 'undefined') {
    modifierFlags.isSupplyUnit = false;
    symbolArray.push(base.modifier2);
  } else {
    symbolArray.push(modifierFlags.isSupplyUnit ? '62' : '00');
  }

  var reinforcedReduced = '';
  if (modifierFlags.isAmplified) {
    reinforcedReduced = '+';
  } else if (modifierFlags.isReduced) {
    reinforcedReduced = '-';
  }

  const symbol = new ms.Symbol(symbolArray.join(''), {
    size: 50,
    reinforcedReduced: reinforcedReduced,
  });
  document.getElementById('symbol').appendChild(symbol.asDOM());
}

function checkSelectValue(select, value) {
  if (select.value !== value) {
    select.classList.add('is-invalid');
    select.classList.remove('is-valid');
  } else {
    select.classList.remove('is-invalid');
    select.classList.add('is-valid');
  }
}

function fillSelectValue(select, value) {
  select.value = value;
  select.classList.add('is-valid');
  select.classList.remove('is-invalid');
}

function checkModifier(checkbox, modifier) {
  if (checkbox.checked !== modifier) {
    checkbox.classList.add('is-invalid');
    checkbox.classList.remove('is-valid');
  } else {
    checkbox.classList.remove('is-invalid');
    checkbox.classList.add('is-valid');
  }
}

function fillCheckboxValue(checkbox, modifier) {
  checkbox.checked = modifier;
  checkbox.classList.add('is-valid');
  checkbox.classList.remove('is-invalid');
}

function checkResults()  {
  checkSelectValue(document.getElementById('sideSelect'), sideValue);
  checkSelectValue(document.getElementById('statusSelect'), statusValue);
  checkSelectValue(document.getElementById('itemNameSelect'), itemNameValue);
  checkSelectValue(document.getElementById('sizeSelect'), sizeValue);
  checkSelectValue(document.getElementById('towSelect'), towValue);
  checkSelectValue(document.getElementById('unitSizeSelect'), unitSizeValue);
  checkSelectValue(document.getElementById('groundTroopSelect'), troopNameValue);

  checkModifier(document.getElementById('isHeadquartersCheckbox'), modifierFlags.isHeadquarters);
  checkModifier(document.getElementById('isTaskGroupCheckbox'), modifierFlags.isTaskGroup);
  checkModifier(document.getElementById('isHeadquartersUnitCheckbox'), modifierFlags.isHeadquartersUnit);
  checkModifier(document.getElementById('isSupplyUnitCheckbox'), modifierFlags.isSupplyUnit);
  checkModifier(document.getElementById('isAmplifiedCheckbox'), modifierFlags.isAmplified);
  checkModifier(document.getElementById('isReducedCheckbox'), modifierFlags.isReduced);
}

function fillResults() {
  fillSelectValue(document.getElementById('sideSelect'), sideValue);
  fillSelectValue(document.getElementById('statusSelect'), statusValue);
  fillSelectValue(document.getElementById('itemNameSelect'), itemNameValue);
  fillSelectValue(document.getElementById('sizeSelect'), sizeValue);
  fillSelectValue(document.getElementById('towSelect'), towValue);
  fillSelectValue(document.getElementById('unitSizeSelect'), unitSizeValue);
  fillSelectValue(document.getElementById('groundTroopSelect'), troopNameValue);

  fillCheckboxValue(document.getElementById('isHeadquartersCheckbox'), modifierFlags.isHeadquarters);
  fillCheckboxValue(document.getElementById('isTaskGroupCheckbox'), modifierFlags.isTaskGroup);
  fillCheckboxValue(document.getElementById('isHeadquartersUnitCheckbox'), modifierFlags.isHeadquartersUnit);
  fillCheckboxValue(document.getElementById('isSupplyUnitCheckbox'), modifierFlags.isSupplyUnit);
  fillCheckboxValue(document.getElementById('isAmplifiedCheckbox'), modifierFlags.isAmplified);
  fillCheckboxValue(document.getElementById('isReducedCheckbox'), modifierFlags.isReduced);
}

function reload() {
  window.location.reload();
}

// global variables
var sideValue = '',
  statusValue = '',
  itemNameValue = '',
  sizeValue = '',
  towValue = '',
  unitSizeValue = '',
  troopNameValue = '';

var modifierFlags = {
  isHeadquarters: false,
  isTaskGroup: false,
  isHeadquartersUnit: false,
  isSupplyUnit: false,
  isAmplified: false,
  isReduced: false,
}

function initPage() {
  fillFormFields();
  var allItemsTotal = 0,
    iconIndexes = [];
  for (const iconIdx in iconTypes) {
    const iconType = iconTypes[iconIdx];
    for (var i = allItemsTotal; i < allItemsTotal + iconType.list.length; i++) {
      iconIndexes.push(iconIdx);
    }
    allItemsTotal += iconType.list.length;
  }

  const iconIdx = getRandomInt(allItemsTotal),
    icon = iconTypes[iconIndexes[iconIdx]];

  const iconType = icon.type;

  const baseIdx = getRandomInt(icon.list.length),
    base = icon.list[baseIdx];

  defineIcon(iconType, base);
}
