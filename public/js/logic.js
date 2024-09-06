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

function fillObjFormFields() {
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